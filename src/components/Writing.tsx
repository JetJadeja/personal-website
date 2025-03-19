import React from "react";
import { Link } from "react-router-dom";
import articlesData from "../data/articlesData";

function Writing() {
  // Sort articles by date descending
  const sortedArticles = [...articlesData].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return sortedArticles.length > 0 ? (
    <section className="w-screen py-16 flex items-center justify-center bg-black text-white relative">
      <div className="max-w-2xl text-center px-4">
        {/* Heading matches the About and Projects sections' style */}
        <h1 className="font-mono text-xl sm:text-2xl md:text-3xl mb-10">
          writing
        </h1>

        {/* Articles list with minimal styling */}
        <div className="text-left">
          {sortedArticles.map((article, idx) => (
            <Link
              key={article.slug}
              to={`/article/${article.slug}`}
              className="block mb-8 group"
            >
              <div className="flex">
                <span className="font-mono text-xs opacity-60 w-6 pt-1">
                  {(idx + 1).toString().padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-mono text-base sm:text-lg group-hover:underline">
                    {article.title}
                  </h3>
                  <p className="font-light text-xs text-gray-400 mt-1">
                    {article.date} · {article.readingTime}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
}

export default Writing;
