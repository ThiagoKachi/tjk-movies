import { Navigate, Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Explore } from '../pages/Explore';
import { MovieDetailsPage } from '../pages/Details';

export function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/explore" element={<Explore />}/>
      <Route path="/explore/:genre" element={<Explore />}/>
      <Route path="/explore/movie/:movie" element={<Explore />}/>
      <Route path="/explore/favorites" element={<Explore />}/>
      <Route path="/explore/popular" element={<Explore />}/>
      <Route path="/explore/best-movies" element={<Explore />}/>
      <Route path="/explore/releases" element={<Explore />}/>
      <Route path="/details/:id" element={<MovieDetailsPage />}/>
    </Routes>
  );
}