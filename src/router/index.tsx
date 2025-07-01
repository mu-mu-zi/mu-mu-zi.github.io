import { Routes, Route } from 'react-router-dom';
import NotFound404 from '../view/NotFound';
import Home from '../view/Home';
import About from '../view/About';
import Chat from '../view/Chat';
import Share from '../view/Share';

export default function Root() {
  return (
    <Routes>
      <Route index element={<Home />} path={'/'} />
      <Route element={<About />} path={'/about'} />
      <Route element={<Chat />} path={'/chat'} />
      <Route element={<Share />} path={'/share'} />
      <Route element={<NotFound404 />} path={'*'} />
    </Routes>
  );
}
