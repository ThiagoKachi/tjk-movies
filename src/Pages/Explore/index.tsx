/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useLocation, useParams } from 'react-router-dom';
import { translateTitle } from '../../utils/translateTitle';
import { Card } from '../../components/Card';
import { useQuery, useQueryClient } from 'react-query';
import { getMovies } from '../../services/getMovies';
import { useEffect, useState } from 'react';
import { Movie, MovieDetails } from '../../models/movies';
import { Skeleton } from '../../components/Skeleton';

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

export function Explore() {
  const [moviesList, setMoviesList] = useState<Movie>({} as Movie);
  const [isLoadingMovies, setIsLoadingMovies] = useState(true);
  const [isErrorMovies, setIsErrorMovies] = useState(false);

  const queryClient = useQueryClient();

  const { pathname } = useLocation();
  const { genre, movie } = useParams();

  const pageTitle = pathname.slice(9);

  const genreId = genre && genresMap[genre.toLowerCase()];

  useQuery(
    ['getByCategory', genreId],
    () => genreId && getMovies.getMoviesByCategory(genreId),
    {
      retry: 3,
      refetchOnWindowFocus: false,
      refetchInterval: ONE_HOUR,
      onSuccess: (data) => {
        setMoviesList(data);
        setIsLoadingMovies(false);
      },
      onError: () => {
        setIsLoadingMovies(false);
        setIsErrorMovies(true);
      },
    }
  );

  useQuery(
    ['getByName', movie],
    () => movie && getMovies.getMovieByName(movie),
    {
      retry: 3,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setMoviesList(data);
        setIsLoadingMovies(false);
      },
      onError: () => {
        setIsLoadingMovies(false);
        setIsErrorMovies(true);
      },
    }
  );

  const dataDiscover = useQuery(
    ['discover'], getMovies.getDiscover, {
      retry: 3,
      refetchOnWindowFocus: false,
      refetchInterval: ONE_HOUR,
      onSuccess: (data) => {
        setMoviesList(data);
        setIsLoadingMovies(false);
      },
      onError: () => {
        setIsLoadingMovies(false);
        setIsErrorMovies(true);
      },
    }
  );

  const dataUpcoming: Movie = queryClient.getQueryData(['upcoming'])!;
  const dataTopRated: Movie = queryClient.getQueryData(['top_rated'])!;
  const dataPopular: Movie = queryClient.getQueryData(['popular'])!;

  useEffect(() => {
    if (pageTitle === 'popular') {
      setMoviesList(dataPopular);
    }
    if (pageTitle === 'releases') {
      setMoviesList(dataUpcoming);
    }
    if (pageTitle === 'best-movies') {
      setMoviesList(dataTopRated);
    }
    if (pageTitle === 'explore') {
      setMoviesList(dataDiscover.data || []);
    }
  }, [pageTitle, dataDiscover, dataPopular, dataTopRated, dataUpcoming]);

  return (
    <div className="w-full mb-10">
      <h1 className="text-slate-700 font-semibold text-xl border-b-[1px] py-3 mb-8">
        {translateTitle(pathname)}
      </h1>

      {isErrorMovies && (
        <h2 className='text-lg font-semibold text-gray-500 text-center'>
          Algo deu errado, tente novamente!
        </h2>
      )}

      {isLoadingMovies ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moviesList?.results?.map((movie: MovieDetails) => (
            <div key={movie.id}>
              <Card
                title={movie.title}
                image={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date}
                size={{
                  height: '250px',
                }}
              />
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
