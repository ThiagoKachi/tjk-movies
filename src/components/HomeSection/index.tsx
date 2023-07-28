import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Carousel } from '../Carousel';
import { Skeleton } from '../Skeleton';

import { Movie } from '../../models/movies';

interface HomeSectionProps {
  title: string;
  redirectTo: string;
  movies: Movie;
  isLoading: boolean;
  isError: boolean;
}

export function HomeSection({
  title,
  redirectTo,
  movies,
  isLoading,
  isError,
}: HomeSectionProps) {
  return (
    <div className='mb-10'>
      <div className='flex justify-between align-middle mb-3'>
        <h1 className='font-semibold text-slate-700 text-xl'>{title}</h1>
        <Link to={redirectTo}>
          <div className='flex align-middle hover:underline'>
            <button className='text-slate-800 text-md font-medium'>Ver todos</button>
            <span className='mt-1 ml-3 text-md'><AiOutlineRight /></span>
          </div>
        </Link>
      </div>
      {isError && (
        <div className='text-center'>
          <span className='text-red-500 font-semibold'>
            Erro ao carregar os filmes! Tente novamente.
          </span>
        </div>
      )}

      {isLoading ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <Carousel movies={movies.results} />
      )}
    </div>
  );
}