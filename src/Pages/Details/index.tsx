import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs';

import { BreadCrumb } from '../../components/Breadcrumb';
import { Button } from '../../components/Button';
import { DetailsSkeleton } from '../../components/Skeleton/DetailsSkeleton';
import { ErrorBadge } from '../../components/ErrorBadge';
import { ToastComponent } from '../../components/Toast';

import { getYear } from '../../utils/getMovieYear';
import { minutesToHours } from '../../utils/minutesToHours';
import { formatedBudget } from '../../utils/formatCurrency';
import { getMovies } from '../../services/getMovies';
import { MovieDetails } from '../../models/movies';

const ONE_HOUR = 3600000;

export function MovieDetailsPage() {
  const { id } = useParams();
  const [movieAlreadyFavorite, setMovieAlreadyFavorite] = useState(false);
  const [filmAddedToFavorite, setFilmAddedToFavorite] = useState<null | boolean>(null);

  function handleCloseToast() {
    setFilmAddedToFavorite(null);
  }

  const { data: dataFavorites, refetch } = useQuery(
    ['favorites'],
    () => getMovies.getFavoritesMovies(1),
    {
      retry: 3,
      refetchOnWindowFocus: false,
      refetchInterval: ONE_HOUR,
    }
  );

  function findIfMovieIsFavorite() {
    const movieIsFavorite = dataFavorites?.results.find(
      (movie: MovieDetails) => movie.id === Number(id)
    );
    setMovieAlreadyFavorite(!!movieIsFavorite);
  }

  useEffect(() => {
    findIfMovieIsFavorite();
  }, []);

  const { data, isLoading, isError } = useQuery(
    ['movieDetails', id],
    () => id && getMovies.getMovieDetails(id),
    {
      retry: 3,
      refetchOnWindowFocus: false,
      refetchInterval: ONE_HOUR * 24, // 24 hours
    }
  );

  const mutation = useMutation({
    mutationFn: (movieId: string) => getMovies.addMovieToFavorites(movieId),
    onSuccess: () => {
      setMovieAlreadyFavorite(true);
      setFilmAddedToFavorite(true);
      refetch();
    },
    onError: () => {
      setFilmAddedToFavorite(false);
    },
  });

  if (isLoading) {
    return <DetailsSkeleton />;
  }

  if (isError) {
    return (
      <ErrorBadge />
    );
  }

  return (
    <>
      {filmAddedToFavorite !== null && (
        <ToastComponent
          toastType={filmAddedToFavorite ? 'success' : 'error'}
          onClose={handleCloseToast}
        />
      )}
      <BreadCrumb title={data.title} />
      <div className="flex gap-10 flex-col lg:flex-row">
        <img
          src={`http://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt={data.title}
          className="rounded-md w-full h-[400px] lg:w-[50%] lg:h-[700px] object-cover object-center"
        />

        <div className="flex flex-col w-full lg:w-[40%] mb-10">
          <h1 className="text-2xl text-gray-600 font-semibold mb-8">
            {data.title}
          </h1>
          <div className="flex flex-col gap-5">
            <p className="flex justify-between text-lg font-medium text-gray-500">
              Orçamento:
              <span>{formatedBudget(data.budget)}</span>
            </p>
            <p className="flex justify-between text-lg font-medium text-gray-500">
              Página do filme:
              <a
                href={data.homepage}
                target="_blank"
                rel="noreferrer"
                className="hover:underline flex items-center gap-2"
              >
                Acessar
                <BsArrowRightShort />
              </a>
            </p>
            <p className="flex justify-between text-lg font-medium text-gray-500">
              Lingua original:
              <p>{data.original_language}</p>
            </p>
            <p className="flex justify-between text-lg font-medium text-gray-500">
              Ano de lançamento:
              <span>{getYear(data.release_date)}</span>
            </p>
            <p className="flex justify-between text-lg font-medium text-gray-500">
              Receita do filme:
              <span>{formatedBudget(data.revenue)}</span>
            </p>
            <p className="flex justify-between text-lg font-medium text-gray-500">
              Duração:
              <span>{minutesToHours(data.runtime)}</span>
            </p>
            <p className="flex justify-between text-lg font-medium text-gray-500">
              Nota:
              <span>{data.vote_average}</span>
            </p>
            <p className="flex justify-between text-lg font-medium text-gray-500">
              Página IMDB
              <a
                href={`https://www.imdb.com/title/${data.imdb_id}`}
                target="_blank"
                rel="noreferrer"
                className="hover:underline flex items-center gap-2"
              >
                Acessar
                <BsArrowRightShort />
              </a>
            </p>

            <Button
              isLoading={false}
              onclick={() => mutation.mutate(id!)}
              movieIsFavorite={movieAlreadyFavorite}
            />
          </div>
        </div>
      </div>
    </>
  );
}
