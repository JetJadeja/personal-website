import React from "react";
import { Link } from "react-router-dom";
import articlesData from "../data/articlesData";

function Writing() {
  // Sort articles by date descending
  const sortedArticles = [...articlesData].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <section className="min-h-screen px-4 sm:px-8 py-16 bg-black text-white">
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase mb-12 text-center glitch-target">
        Writing
      </h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {sortedArticles.map((article) => (
          <div
            key={article.slug}
            className="border-2 border-white p-6 transition-colors 
                       hover:bg-white hover:text-black 
                       hover:underline 
                       cursor-pointer 
                       glitch-target"
          >
            <Link to={`/article/${article.slug}`} className="block">
              <h3 className="text-2xl font-bold tracking-wide uppercase">
                {article.title}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                {article.date} &middot; {article.readingTime}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Writing;