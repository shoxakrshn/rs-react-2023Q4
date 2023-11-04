import React, { useState } from 'react';
import { IHero } from './types/types';
import ErrorBoundry from './service/ErrorBoundry';
import SearchBar from './components/SearchBar/SearchBar';
import HeroList from './components/HeroList/HeroList';
import './App.css';

const App: React.FC = () => {
  const [heroes, setHeroes] = useState<IHero[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const cbHeroes = (newHeroes: IHero[]) => setHeroes(newHeroes);
  const cbLoading = (loading: boolean) => setIsLoading(loading);

  return (
    <ErrorBoundry>
      <section className="search mb-4">
        <SearchBar cbHeroes={cbHeroes} cbLoading={cbLoading} />
      </section>
      <section className="result">
        {isLoading ? <p>Loading...</p> : <HeroList heroes={heroes} />}
      </section>
    </ErrorBoundry>
  );
};

export default App;
