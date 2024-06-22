import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchArticles } from '../features/articlesSlice';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchArticles({ query }));
  };

  return (
    <form onSubmit={handleSearch} className="flex">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="p-2 rounded-l-lg bg-slate-200 focus:bg-slate-300 focus:border-0 border-2 border-r-0 border-black"
      />
      <button type="submit" className="bg-slate-300 hover:bg-slate-400 text-black font-semibold border-l-2 border-black p-2 rounded-r-lg border">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
