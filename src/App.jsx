import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Article from './pages/Article';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:title" element={<Article />} />
        </Routes>
        
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4">
              <div className="bg-white text-red-600 px-3 py-1 rounded font-bold text-xl inline-block">
                LH
              </div>
              <h3 className="text-xl font-bold mt-2">Live Hindustan</h3>
            </div>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Live Hindustan News Portal. All rights reserved.
            </p>
            
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;