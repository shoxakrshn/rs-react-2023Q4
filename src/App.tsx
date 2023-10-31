import React from 'react';
import { IHero } from './types/types';
import ErrorBoundry from './service/ErrorBoundry';
import SearchBar from './components/SearchBar/SearchBar';
import HeroList from './components/HeroList/HeroList';
import './App.css';

type StateType = {
  heroes: IHero[];
  isLoading: boolean;
};

class App extends React.Component {
  state: StateType = {
    heroes: [],
    isLoading: false,
  };

  cbHeroes = (newHeroes: IHero[]) => this.setState({ heroes: newHeroes });
  cbLoading = (loading: boolean) => this.setState({ isLoading: loading });

  render() {
    const { heroes, isLoading } = this.state;
    return (
      <ErrorBoundry>
        <section className="search mb-4">
          <SearchBar cbHeroes={this.cbHeroes} cbLoading={this.cbLoading} />
        </section>
        <section className="result">
          {isLoading ? <p>Loading...</p> : <HeroList heroes={heroes} />}
        </section>
      </ErrorBoundry>
    );
  }
}

export default App;
