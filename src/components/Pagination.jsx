import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../features/articlesSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.articles);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className="p-2 mx-1 bg-slate-500 text-white rounded-lg"
      >
        Previous
      </button>
      <span className="p-2 text-white mx-1">{page}</span>
      <button
        onClick={() => handlePageChange(page + 1)}
        className="p-2 px-6 mx-1 bg-slate-500 text-white rounded-lg"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
