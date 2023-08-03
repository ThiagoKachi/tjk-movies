import { useState } from 'react';
import { useQuery } from 'react-query';
import { getMovies } from '../services/getMovies';
import { Movie } from '../models/movies';
import { useLocation, useParams } from 'react-router-dom';

const ONE_HOUR = 3600000;

type GenresMap = {
  [key: string]: number;
};

const genresMap: GenresMap = {
  action: 28,
  adventure: 12,
  comedy: 35,
  drama: 18,
  fantasy: 14,
  'science-fiction': 878,
  romance: 10749,
  musical: 10402,
  horror: 27,
};

export function useMoviesQueries() {
  const [moviesList, setMoviesList] = useState<Movie>({} as Movie);
  const [isLoadingMovies, setIsLoadingMovies] = useState(true);
  const [isErrorMovies, setIsErrorMovies] = useState(false);
  const [page, setPage] = useState(1);

  const { genre, movie } = useParams();
  const { pathname } = useLocation();

  const pageTitle = pathname.slice(9);

  const genreId = genre && genresMap[genre.toLowerCase()];

  const queryOptions = {
    retry: 3,
    refetchOnWindowFocus: false,
    refetchInterval: ONE_HOUR,
    keepPreviousData: false,
    onSuccess: (data: Movie) => {
      setMoviesList(data);
      setIsLoadingMovies(false);
    },
    onError: () => {
      setIsLoadingMovies(false);
      setIsErrorMovies(true);
    },
  };

  if (pageTitle === 'popular') {
    useQuery(['popular', page], () => getMovies.getMoviesPopular(page), queryOptions);
  } else if (pageTitle === 'releases') {
    useQuery(['upcoming', page], () => getMovies.getMoviesUpcoming(page), queryOptions);
  } else if (pageTitle === 'best-movies') {
    useQuery(['top_rated', page], () => getMovies.getMoviesTopRated(page), queryOptions);
  } else if (pageTitle === 'explore') {
    useQuery(['discover', page], () => getMovies.getDiscover(page), queryOptions);
  } else if (genreId) {
    useQuery(
      ['getByCategory', genreId, page],
      () => getMovies.getMoviesByCategory(genreId, page),
      queryOptions
    );
  } else if (movie) {
    useQuery(['getByName', movie, page], () => getMovies.getMovieByName(movie, page), queryOptions);
  }

  function nextPage() {
    setPage((old) => old + 1);
  }

  function previousPage() {
    setPage((old) => old - 1);
  }

  function handlePage(page: number) {
    setPage(page);
  }

  return {
    moviesList,
    isLoadingMovies,
    isErrorMovies,
    nextPage,
    previousPage,
    handlePage,
    pathname
  };
}
