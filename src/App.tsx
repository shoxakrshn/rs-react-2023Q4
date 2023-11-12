import React from 'react';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
} from 'react-router-dom';

import './App.css';
import MainPage from './pages/MainPage/MainPage';
import DetailPage from './pages/DetailPage/DetailPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route index element={<MainPage />} />
      <Route path="/page/:pageId" element={<MainPage />}>
        <Route path="character/:id" element={<DetailPage />} />
      </Route>
    </Route>,
  ),
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
