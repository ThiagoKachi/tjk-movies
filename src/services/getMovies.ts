import api from './api';

const access_token = import.meta.env.VITE_TOKEN_API;

const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${access_token}`
  }
};

export const getMovies = {
  getMoviesUpcoming: async () => {
    const { data } = await api.get('/movie/upcoming', options);
    return data;
  },
  getMoviesPopular: async () => {
    const { data } = await api.get('/movie/popular', options);
    return data;
  },
  getMoviesTopRated: async () => {
    const { data } = await api.get('/movie/top_rated', options);
    return data;
  },
  getDiscover: async () => {
    const { data } = await api.get('/discover/movie', {
      ...options,
      params: {
        sort_by: 'vote_count.desc'
      }
    });
    return data;
  },
  getMoviesByCategory: async (genreId: number) => {
    const { data } = await api.get('/movie/top_rated', {
      ...options,
      params: {
        with_genres: genreId
      }
    });
    return data;
  },
  getMovieByName: async (movieName: string) => {
    const { data } = await api.get('/search/movie', {
      ...options,
      params: {
        query: movieName
      }
    });
    return data;
  }
};