import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('semua');

  useEffect(() => {
    // TODO: Fetch articles dari backend
    // const fetchArticles = async () => {
    //   try {
    //     const response = await fetch('http://localhost:5000/api/articles');
    //     const data = await response.json();
    //     setArticles(data);
    //   } catch (error) {
    //     console.error('Error fetching articles:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchArticles();
    
    setLoading(false);
  }, []);

  return (
    <div className="App">
      <header className="navbar">
        <div className="container">
          <h1>Rie Blog</h1>
          <p>Tempat berbagi tentang Anime, Teknologi, dan lainnya</p>
        </div>
      </header>

      <main className="container">
        <div className="filters">
          <button 
            className={selectedCategory === 'semua' ? 'active' : ''}
            onClick={() => setSelectedCategory('semua')}
          >
            Semua
          </button>
          <button 
            className={selectedCategory === 'teknologi' ? 'active' : ''}
            onClick={() => setSelectedCategory('teknologi')}
          >
            Teknologi
          </button>
          <button 
            className={selectedCategory === 'anime' ? 'active' : ''}
            onClick={() => setSelectedCategory('anime')}
          >
            Anime
          </button>
          <button 
            className={selectedCategory === 'lainnya' ? 'active' : ''}
            onClick={() => setSelectedCategory('lainnya')}
          >
            Lainnya
          </button>
        </div>

        {loading ? (
          <p className="loading">Loading...</p>
        ) : articles.length === 0 ? (
          <p className="no-articles">Belum ada artikel. Kembali lagi nanti!</p>
        ) : (
          <div className="articles-grid">
            {articles.map(article => (
              <article key={article._id} className="article-card">
                <h2>{article.title}</h2>
                <span className="category">{article.category}</span>
                <p className="excerpt">{article.content.substring(0, 100)}...</p>
                <small>by {article.author}</small>
              </article>
            ))}
          </div>
        )}
      </main>

      <footer>
        <p>&copy; 2024 Rie Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
