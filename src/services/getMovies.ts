import api from './api';

const access_token = import.meta.env.VITE_TOKEN_API;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${access_token}`
  }
};

export const getMovies = {
  getMoviesUpcoming: async () => {
    const { data } = await api.get('/upcoming', options);
    return data;
  },
  getMoviesPopular: async () => {
    const { data } = await api.get('/popular', options);
    return data;
  },
  getMoviesTopRated: async () => {
    const { data } = await api.get('/top_rated', options);
    return data;
  }
};