import React from 'react';
import { useNavigate } from 'react-router-dom';

const FavoritesPage = () => {
  // Retrieve favorite items from local storage
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const navigate = useNavigate()

  return (
    <div className="container mx-auto p-4">
      {favorites.length ===0 ? (
          <div className="container mx-auto p-4 text-white flex flex-col justify-center items-center h-screen">
            <h1 className="text-3xl font-bold mb-4">No favorite article not found !!</h1>
        <button onClick={() => navigate(-1)} className='border-2  rounded-lg p-2 bg-slate-500 hover:bg-slate-400'>Go Back</button>
    </div>
      ) : (
        <div>
            <h1 className="text-3xl text-white font-bold mb-4">Favorite Articles</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {favorites.map((article, index) => (
                <div key={index} className="bg-slate-100 rounded-lg border-2 shadow-md overflow-hidden">
                <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">{article.title}</h2>
                    <p>{article.description}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
