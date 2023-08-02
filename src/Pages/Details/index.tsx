import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs';

import { BreadCrumb } from '../../components/Breadcrumb';

import { getMovies } from '../../services/getMovies';
import { getYear } from '../../utils/getMovieYear';
import { minutesToHours } from '../../utils/minutesToHours';
import { formatedBudget } from '../../utils/formatCurrency';
import { DetailsSkeleton } from '../../components/Skeleton/DetailsSkeleton';

const ONE_HOUR = 3600000;

export function MovieDetails() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery(
    ['movieDetails', id],
    () => id && getMovies.getMovieDetails(id),
    {
      retry: 3,
      refetchOnWindowFocus: false,
      refetchInterval: ONE_HOUR * 24, // 24 hours
    }
  );

  if (isLoading) {
    return <DetailsSkeleton />;
  }

  if (isError) {
    return (
      <div
        className="flex items-center justify-center p-4 mb-4 text-md text-red-800 rounded-md bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <span className="font-medium">
          Erro ao carregar filmes. Tente novamente!
        </span>
      </div>
    );
  }

  return (
    <>
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
          </div>
        </div>
      </div>
    </>
  );
}
