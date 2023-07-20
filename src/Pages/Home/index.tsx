import { HomeSection } from '../../components/HomeSection';

export function Home() {
  return (
    <div>
      <HomeSection title="Filmes populares" redirectTo='/explore/popular' />
      <HomeSection title="Lançamentos" redirectTo='/explore/releases' />
      <HomeSection title="Melhores filmes" redirectTo='/explore/best-movies' />
      <HomeSection title="Favoritos" redirectTo='/explore/favorites' />
    </div>
  );
}