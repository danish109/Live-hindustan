import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ article, featured = false }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  if (featured) {
    return (
      <Link 
        to={`/article/${encodeURIComponent(article.title)}`}
        state={{ article }}
        className="news-card block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
      >
        <div className="md:flex">
          <div className="md:shrink-0 md:w-1/2">
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
          <div className="p-6 md:w-1/2">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">
                {article.source?.name || 'News Source'}
              </span>
              <span className="mx-2">•</span>
              <span>{formatDate(article.publishedAt)}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-3">
              {article.title}
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-4">
              {article.description || 'Read the full story for more details...'}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                By {article.author || 'Staff Reporter'}
              </span>
              <span className="text-red-600 font-medium hover:text-red-700 transition">
                Read More →
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      to={`/article/${encodeURIComponent(article.title)}`}
      state={{ article }}
      className="news-card block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
    >
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <span className="bg-red-100 text-red-600 px-2 py-1 rounded font-medium">
            {article.source?.name || 'News Source'}
          </span>
          <span className="mx-2">•</span>
          <span>{formatDate(article.publishedAt)}</span>
        </div>
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">
          {article.description || 'Click to read the full story...'}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            By {article.author || 'Staff Reporter'}
          </span>
          <span className="text-red-600 text-sm font-medium hover:text-red-700 transition">
            Read More
          </span>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;