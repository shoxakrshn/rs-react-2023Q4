import React from 'react';
import { IHero } from '../../types/types';

type PropsType = {
  hero: IHero;
};

class HeroItem extends React.Component<PropsType> {
  render() {
    const { hero } = this.props;
    return (
      <li>
        <h3>{hero.name}</h3>
      </li>
    );
  }
}

export default HeroItem;
