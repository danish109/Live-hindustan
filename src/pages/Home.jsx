import React, { useState, useEffect } from 'react';
import NewsGrid from '../components/NewsGrid';
import Loading from '../components/Loading';
import { newsService } from '../services/newsApi';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('general');

  const categories = [
    { id: 'general', name: 'Top Stories' },
    { id: 'business', name: 'Business' },
    { id: 'technology', name: 'Technology' },
    { id: 'sports', name: 'Sports' },
    { id: 'entertainment', name: 'Entertainment' },
    { id: 'health', name: 'Health' }
  ];

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        let newsData;
        if (activeCategory === 'general') {
          newsData = await newsService.getTopHeadlines();
        } else {
          newsData = await newsService.getNewsByCategory(activeCategory);
        }
        setArticles(newsData);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-red-600 to-red-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Latest News & Updates
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Stay informed with the most recent and important news from around the world
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto space-x-1 py-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
                  activeCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News Content */}
      {loading ? (
        <Loading />
      ) : (
        <NewsGrid 
          articles={articles} 
          title={categories.find(cat => cat.id === activeCategory)?.name}
        />
      )}
    </main>
  );
};

export default Home;