import { useQuery } from 'react-query';
import { HomeSection } from '../../components/HomeSection';
import { getMovies } from '../../services/getMovies';

const ONE_HOUR = 3600000;

export function Home() {
  // useMutation - Para criar, editar ou deletar
  const {
    data: dataUpcoming,
    isError: isErrorUpcoming,
    isLoading: isLoadingUpcoming
  } = useQuery(['upcoming'], () => getMovies.getMoviesUpcoming(1), {
    retry: 3,
    refetchOnWindowFocus: false,
    refetchInterval: ONE_HOUR,
  });

  const {
    data: dataPopular,
    isError: isErrorPopular,
    isLoading: isLoadingPopular
  } = useQuery(['popular'], () => getMovies.getMoviesPopular(1), {
    retry: 3,
    refetchOnWindowFocus: false,
    refetchInterval: ONE_HOUR,
  });

  const {
    data: dataTopRated,
    isError: isErrorTopRated,
    isLoading: isLoadingTopRated
  } = useQuery(['top_rated'], () => getMovies.getMoviesTopRated(1), {
    retry: 3,
    refetchOnWindowFocus: false,
    refetchInterval: ONE_HOUR,
  });

  return (
    <div>
      <HomeSection
        title="Filmes populares"
        redirectTo='/explore/popular'
        movies={dataPopular}
        isLoading={isLoadingPopular}
        isError={isErrorPopular}
      />
      <HomeSection
        title="Lançamentos"
        redirectTo='/explore/releases'
        movies={dataUpcoming}
        isLoading={isLoadingUpcoming}
        isError={isErrorUpcoming}
      />
      <HomeSection
        title="Melhores filmes"
        redirectTo='/explore/best-movies'
        movies={dataTopRated}
        isLoading={isLoadingTopRated}
        isError={isErrorTopRated}
      />
      <HomeSection
        title="Favoritos"
        redirectTo='/explore/favorites'
        movies={dataTopRated}
        isLoading={isLoadingTopRated}
        isError={isErrorTopRated}
      />
    </div>
  );
}