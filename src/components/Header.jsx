import React from 'react';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
  return (
    <header  className="bg-slate-600 cursor-pointer border-b-4  p-4 flex justify-between items-center">
      <h1 onClick={() => navigate(-1)} className="text-white text-3xl font-serif font-bold">NewsApp</h1>
      <SearchBar />
      <div>
        <CategoryFilter />
        <button onClick={() => navigate('favorites')} className='ml-2 p-[6px] px-2 bg-rose-400 hover:bg-rose-500 rounded-lg border-2 border-black'>Liked News</button>
      </div>
    </header>
  );
};

export default Header;
