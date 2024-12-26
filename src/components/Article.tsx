import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import articlesData, { IArticle } from "../data/articlesData";

function Article() {
  const { slug } = useParams();
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [articleMeta, setArticleMeta] = useState<IArticle | null>(null);

  useEffect(() => {
    // Immediately show spinner by setting loading = true
    setLoading(true);

    // Try to find the article data
    const foundArticle = articlesData.find((a) => a.slug === slug);
    if (!foundArticle) {
      setMarkdownContent("Article not found.");
      setLoading(false);
      return;
    }

    // Store article metadata
    setArticleMeta(foundArticle);

    // Load the markdown file with NO artificial delay
    import(
      /* webpackChunkName: "markdown" */ `../writing/${
        foundArticle.markdownPath.split("/").pop()
      }`
    )
      .then((res) => fetch(res.default))
      .then((r) => (r ? r.text() : Promise.reject("No response")))
      .then((text) => {
        setMarkdownContent(text);
        setLoading(false);
        // Force scroll to top once fully loaded
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        console.error(err);
        setMarkdownContent("Error loading article.");
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    // Show spinner on a black background immediately
    return (
      <div className="min-h-screen w-full bg-black text-white flex items-center justify-center">
        <div className="flex flex-col items-center">
          {/* Outer ring - strictly black background, no delay */}
          <div className="relative w-20 h-20 mb-6">
            <div className="absolute inset-0 border-4 border-gray-600 rounded-full animate-spin border-t-transparent"></div>
            <div className="absolute inset-5 border-4 border-gray-800 rounded-full animate-pulse border-b-transparent"></div>
          </div>
          <p className="text-base text-gray-300 tracking-wider uppercase">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen px-8 py-16 bg-black text-white">
      <div className="max-w-3xl mx-auto">
        {articleMeta && (
          <>
            <h1 className="text-4xl font-bold mb-2">{articleMeta.title}</h1>
            <p className="text-sm text-gray-400 mb-6">
              {articleMeta.date} &middot; {articleMeta.readingTime}
            </p>
          </>
        )}

        <article className="prose prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, [remarkRehype, { allowDangerousHtml: false }]]}
            rehypePlugins={[
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: "wrap" }],
            ]}
          >
            {markdownContent}
          </ReactMarkdown>
        </article>

        <div className="mt-8">
          <Link
            to="/"
            className="underline text-gray-300 hover:text-gray-100 transition"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Article;