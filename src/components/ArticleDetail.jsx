import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';


const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const encodedId = encodeURIComponent(id);

  console.log("Encoded ID from URL:", encodedId);

  const article = useSelector((state) =>
    state.articles.articles.find((article) => {
      const encodedUrl = encodeURIComponent(article.url);
      console.log("Comparing encoded URL:", encodedUrl, "with encoded ID:", encodedId);
      return encodedUrl === encodedId;
    })
  );

  if (!article) {
    return (
        <div className="container mx-auto p-4 text-white flex flex-col justify-center items-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Article not found !!</h1>
            <button onClick={() => navigate(-1)} className='border-2  rounded-lg p-2 bg-slate-500 hover:bg-slate-400'>Go Back</button>
        </div>
    );
  }

  return (
    <div className="container mx-auto p-4 text-white lg:w-4/6">
      <h1 className="text-3xl font-bold mb-4 ">{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} className="w-full h-96 border-[2px] rounded-lg overflow-hidden object-cover mb-4" />
      <p className='text-lg'>{article.content}</p>
    </div>
  );
};

export default ArticleDetail;
