import { translateTitle } from '../../utils/translateTitle';
import { Card } from '../../components/Card';
import { MovieDetails } from '../../models/movies';
import { Skeleton } from '../../components/Skeleton';
import { Navigation } from '../../components/Navigation';
import { useMoviesQueries } from '../../hooks/useQueriesCall';

export function Explore() {
  const {
    moviesList,
    isErrorMovies,
    isLoadingMovies,
    handlePage,
    nextPage,
    previousPage,
    pathname
  } = useMoviesQueries();

  return (
    <div className="w-full mb-10">
      <div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {moviesList?.results?.map((movie: MovieDetails) => (
              <div key={movie.id}>
                <Card
                  id={movie.id}
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
      
      <div className='w-full flex justify-end'>
        <Navigation
          prev={previousPage}
          next={nextPage}
          handlePage={handlePage}
          hasMore={moviesList?.total_pages >= moviesList?.page}
          pages={moviesList?.total_pages}
          currentPage={moviesList?.page}
        />
      </div>
    </div>
  );
}
