import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles } from '../features/articlesSlice';
import ArticleItem from './ArticleItem';
import Pagination from './Pagination';

const ArticleList = () => {
  const dispatch = useDispatch();
  const { articles, status, error, category, page } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles({ category, page }));
  }, [category, page, dispatch]);

  if (status === 'loading') {
    return <div className='text-white'>Loading...</div>;
  }

  if (status === 'failed') {
    return <div className='text-white'>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto  p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleItem key={article.url} article={article} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default ArticleList;
