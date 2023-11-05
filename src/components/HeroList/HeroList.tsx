import React from 'react';
import { IHero } from '../../types/types';
import HeroItem from '../HeroItem/HeroItem';

type PropsType = {
  heroes: IHero[];
};

const HeroList: React.FC<PropsType> = ({ heroes }) => {
  if (heroes.length === 0) {
    return <p>no results</p>;
  }

  return (
    <ul className="flex flex-col gap-x-2 gap-y-5">
      {heroes.map((hero) => (
        <HeroItem hero={hero} key={hero.id} />
      ))}
    </ul>
  );
};

export default HeroList;
