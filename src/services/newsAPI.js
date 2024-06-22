
import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async (category = '', page = 1, query = '') => {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      category: category || 'general',
      country: 'in',
      page,
      pageSize: 12,
      q: query,
      apiKey: process.env.REACT_APP_NEWS_API_KEY,
    },
  });
  return response.data;
};
