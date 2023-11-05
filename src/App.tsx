import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import './App.css';
import DetailPage from './pages/DetailPage/DetailPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="character/:id" element={<DetailPage />} />
      </Route>
    </Routes>
  );
};

export default App;
