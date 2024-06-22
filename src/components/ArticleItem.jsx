
import { FaHeart } from "react-icons/fa";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ArticleItem = ({ article }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    navigate(`/article/${encodeURIComponent(article.url)}`);
  };

  const handleFavoriteToggle = (e) => {
    e.stopPropagation(); // Prevent navigation when clicking the favorite button
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    toggleFavorite(article); // Save to local storage
  };

  // Function to add or remove the article from local storage favorites
  const toggleFavorite = (article) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!isFavorite) {
      localStorage.setItem('favorites', JSON.stringify([...favorites, article]));
    } else {
      const updatedFavorites = favorites.filter((favArticle) => favArticle.url !== article.url);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div className="bg-slate-100 rounded-lg border-2 shadow-md overflow-hidden" onClick={handleClick}>
      <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{article.title}</h2>
        <p>{article.description}</p>
        <button onClick={handleFavoriteToggle} className={`mt-2 ${isFavorite ? 'bg-white' : 'bg-red-400'} p-2  rounded-lg px-4 border-2  border-rose-500`}>

             <FaHeart 
              size={22}
              className={
                isFavorite ? 'fill-rose-500' : 'fill-white'
              }
             />
        </button>
      </div>
    </div>
  );
};

export default ArticleItem;
