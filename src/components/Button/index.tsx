import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { LoadingSpinner } from '../LoadingSpinner';

interface ButtonProps {
  isLoading?: boolean;
  onclick?: () => void;
  movieIsFavorite?: boolean;
}

export function Button({ isLoading, onclick, movieIsFavorite }: ButtonProps) {
  return (
    <button type="button" disabled={isLoading || movieIsFavorite} className="mt-5 px-6 py-3.5 text-base font-medium text-white flex items-center justify-center bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none rounded-md text-center dark:bg-blue-600 transition-colors dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-25 disabled:cursor-not-allowed" onClick={onclick}>
      {!isLoading ? (
        <>
          {movieIsFavorite ? (
            <>
              <span className='text-xl'>
                <AiFillHeart />
              </span>

              <span className="ml-2 font-semibold">
                Filme adicionado aos favoritos
              </span>
            </>
          ) : (
            <>
              <span className='text-xl'>
                <AiOutlineHeart />
              </span>

              <span className="ml-2 font-semibold">
                Adicionar aos favoritos
              </span>
            </>
          )}
        </>
      ) : (
        <LoadingSpinner />
      )}
    </button>
  );
}