import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticles as fetchArticlesFromAPI } from '../services/newsAPI';

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ category, page, query }) => {
    const response = await fetchArticlesFromAPI(category, page, query);
    return response.articles;
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    category: '',
    page: 1,
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCategory, setPage } = articlesSlice.actions;
export default articlesSlice.reducer;
