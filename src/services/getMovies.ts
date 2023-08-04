import api from './api';

const access_token = import.meta.env.VITE_TOKEN_API;
const account_id = import.meta.env.VITE_ACCOUNT_ID;

const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${access_token}`
  }
};

export const getMovies = {
  getMoviesUpcoming: async (page = 1) => {
    const { data } = await api.get('/movie/upcoming', {
      ...options,
      params: {
        page,
      }
    });
    return data;
  },
  getMoviesPopular: async (page = 1) => {
    const { data } = await api.get('/movie/popular', {
      ...options,
      params: {
        page,
      }
    });
    return data;
  },
  getMoviesTopRated: async (page = 1) => {
    const { data } = await api.get('/movie/top_rated', {
      ...options,
      params: {
        page,
      }
    });
    return data;
  },
  getDiscover: async (page = 1) => {
    const { data } = await api.get('/discover/movie', {
      ...options,
      params: {
        sort_by: 'vote_count.desc',
        page,
      }
    });
    return data;
  },
  getMoviesByCategory: async (genreId: number, page = 1) => {
    const { data } = await api.get('/movie/top_rated', {
      ...options,
      params: {
        with_genres: genreId,
        page
      }
    });
    return data;
  },
  getMovieByName: async (movieName: string, page = 1) => {
    const { data } = await api.get('/search/movie', {
      ...options,
      params: {
        query: movieName,
        page
      }
    });
    return data;
  },
  getMovieDetails: async (id: string) => {
    const { data } = await api.get(`/movie/${id}`, { ...options });
    return data;
  },
  getFavoritesMovies: async (page = 1) => {
    const { data } = await api.get(`/account/${account_id}/favorite/movies`, { 
      ...options,
      params: {
        language: 'en-US',
        page,
        sort_by: 'created_at.asc'
      }
    });
    return data;
  },
  addMovieToFavorites: async (movieId: string) => {
    const { data } = await api.post(`/account/${account_id}/favorite`, {
      media_type: 'movie',
      media_id: Number(movieId),
      favorite: true
    }, options);
    return data;
  },
};