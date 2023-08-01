import { useQuery } from 'react-query';
import { getMovies } from '../../services/getMovies';
import { useParams } from 'react-router-dom';
import { BreadCrumb } from '../../components/Breadcrumb';

import starIcon from '../../assets/star.svg';

const ONE_HOUR = 3600000;

export function MovieDetails() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery(
    ['movieDetails', id], () => id && getMovies.getMovieDetails(id), {
      retry: 3,
      refetchOnWindowFocus: false,
      refetchInterval: ONE_HOUR * 24, // 24 hours
    }
  );

  if (isLoading) return <span>Carregando...</span>;

  console.log(data);

  return (
    <>
      <BreadCrumb title={data?.title} />
      <div className='flex gap-10 flex-col lg:flex-row'>
        <img
          src={`http://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt={data.title}
          className='rounded-md w-[100%] h-[400px] lg:w-[50%] lg:h-[700px] object-cover relative'
        />

        <div className="absolute top-4 left-6 flex align-middle">
          <span className="mt-0.5">
            <img
              className="h-4 w-4"
              src={starIcon}
              alt="Estrela indicando a nota"
            />
          </span>
          <div className="ml-2">
            <span className="text-[15px] text-white">
              {data.vote_average ? data.vote_average : '-'}
            </span>
            <span className="text-[14px] ml-0.5 text-gray-400 font-medium">
            /10
            </span>
          </div>
        </div>

        <div>
          <h1 className='text-3xl font-semibold'>{data.title}</h1>
          {/* Orçamento */}
          {/* HomePage */}
          {/* Lingua original */}
          {/* Ano de lançamento */}
          {/* Receita */}
          {/* Duração */}
          {/* Status */}
          {/* Nota */}
          {/* IMDB página (https://www.imdb.com/title/id_do_filme/) */}
        </div>
      </div>
    </>
  );
}