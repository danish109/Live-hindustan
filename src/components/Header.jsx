import React from 'react';

const Header = () => {
  const categories = ['General', 'Business', 'Technology', 'Sports', 'Entertainment', 'Health'];

  return (
    <header className="bg-red-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="bg-white text-red-600 px-3 py-1 rounded font-bold text-xl">
              LH
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">Live Hindustan</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-sm">📅</span>
              <span className="text-sm">{new Date().toLocaleDateString('en-IN')}</span>
            </div>
            <button className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-red-500">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-1 md:space-x-6 py-3">
            {categories.map((category) => (
              <li key={category}>
                <a
                  href={`#${category.toLowerCase()}`}
                  className="px-3 py-2 hover:bg-red-700 rounded-lg transition text-sm md:text-base font-medium"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;