import { Routes, Route } from 'react-router-dom';
import NotFound404 from '../view/NotFound';
import Home from '../view/Home';

export default function Root() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route element={<NotFound404 />} path={'*'} />
    </Routes>
  );
}
