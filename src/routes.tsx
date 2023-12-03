import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import MainPage from './pages/MainPage';
import UncontrolledPage from './pages/UncontrolledPage';
import ControlledPage from './pages/ControlledPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<MainPage />} />
      <Route path="uncontrolled" element={<UncontrolledPage />} />
      <Route path="controlled" element={<ControlledPage />} />
    </Route>,
  ),
);

export default router;
