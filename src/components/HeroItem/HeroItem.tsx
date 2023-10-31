import React from 'react';
import { IHero } from '../../types/types';
type PropsType = {
  hero: IHero;
};

class HeroItem extends React.Component<PropsType> {
  render() {
    const { hero } = this.props;
    return (
      <li className="border rounded p-3 basis-[49%]">
        <h3 className="font-bold text-xl">{hero.name}</h3>
        <p>Gender: {hero.gender}</p>
        <p>Height: {hero.height}</p>
        <p>Eye Color: {hero.eye_color}</p>
        <p>Birth Year: {hero.birth_year}</p>
      </li>
    );
  }
}

export default HeroItem;
