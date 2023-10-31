import React from 'react';
import { IHero } from '../../types/types';
import HeroItem from '../HeroItem/HeroItem';

type PropsType = {
  heroes: IHero[];
};

class HeroList extends React.Component<PropsType> {
  render() {
    const { heroes } = this.props;
    if (heroes.length === 0) {
      return <p>no results</p>;
    }

    return (
      <ul className="flex flex-wrap  justify-between gap-2 gap-y-5">
        {heroes.map((hero, idx) => (
          <HeroItem hero={hero} key={idx} />
        ))}
      </ul>
    );
  }
}

export default HeroList;
