import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../features/articlesSlice';

const categories = ['Business', 'Technology', 'Entertainment'];

const CategoryFilter = () => {
  const dispatch = useDispatch();

  return (
    <select
      onChange={(e) => dispatch(setCategory(e.target.value))}
      className="ml-4 p-2 rounded-lg border-2 border-black bg-slate-200"
    >
      <option value="">All</option>
      {categories.map((category) => (
        <option className='bg-slate-200 hover:bg-slate-400' key={category} value={category.toLowerCase()}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
