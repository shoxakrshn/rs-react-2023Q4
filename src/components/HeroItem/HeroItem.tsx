import React from 'react';
import { IHero } from '../../types/types';
import { Link } from 'react-router-dom';

type PropsType = {
  hero: IHero;
};

const HeroItem: React.FC<PropsType> = ({ hero }) => {
  return (
    <li className="border rounded p-3 basis-[49%]">
      <Link to={`character/${hero.id}`} key={hero.id}>
        <h3 className="font-bold text-xl">{hero.name}</h3>
        <p>status: {hero.status}</p>
      </Link>
    </li>
  );
};

export default HeroItem;
