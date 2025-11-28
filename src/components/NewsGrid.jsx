import React from 'react';
import NewsCard from './NewsCard';

const NewsGrid = ({ articles, title, showFeatured = true }) => {
  if (!articles || articles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No articles found.</p>
      </div>
    );
  }

  const featuredArticle = showFeatured ? articles[0] : null;
  const gridArticles = showFeatured ? articles.slice(1) : articles;

  return (
    <section className="py-8">
      {title && (
        <div className="container mx-auto px-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-red-600 pl-4">
            {title}
          </h2>
        </div>
      )}
      
      <div className="container mx-auto px-4">
        {featuredArticle && (
          <div className="mb-8">
            <NewsCard article={featuredArticle} featured={true} />
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridArticles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;