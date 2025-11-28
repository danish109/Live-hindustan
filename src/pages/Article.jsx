import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Article = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { article } = location.state || {};

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-red-600 hover:text-red-700 mb-6 transition"
        >
          ← Back to News
        </button>

        <header className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-medium">
              {article.source?.name || 'News Source'}
            </span>
            <span className="mx-3">•</span>
            <span>{formatDate(article.publishedAt)}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>
          
          {article.author && (
            <p className="text-lg text-gray-600">
              By <span className="font-semibold">{article.author}</span>
            </p>
          )}
        </header>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
              {article.description}
            </p>
            
            <div className="text-gray-800 leading-8 space-y-4">
              <p>
                {article.content || "This is a detailed news article. In a real application, this would contain the full content of the news story with proper formatting, images, and other media elements."}
              </p>
              
              <p>
                News articles typically include multiple paragraphs with detailed information,
                quotes from relevant sources, statistics, and analysis of the event or topic
                being covered.
              </p>
              
              <p>
                The content would be structured to provide readers with comprehensive
                understanding of the news story, including background information and
                potential implications.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  Breaking News
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {article.source?.name || 'General'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="bg-white border-t py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            More Stories
          </h2>
          <div className="text-center">
            <button
              onClick={() => navigate('/')}
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition font-medium"
            >
              View All News
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;