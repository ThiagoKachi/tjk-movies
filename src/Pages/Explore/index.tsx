import { useLocation } from 'react-router-dom';

export function Explore() {
  const { pathname } = useLocation();

  return (
    <h2>{pathname || 'AQUI'}</h2>
  );
}