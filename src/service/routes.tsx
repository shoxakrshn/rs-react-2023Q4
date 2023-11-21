import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import DetailPage from '../pages/DetailPage/DetailPage';
import NotFoundPage from '../pages/NotFound/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainPage />}>
        <Route path="character/:id" element={<DetailPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

export default router;
