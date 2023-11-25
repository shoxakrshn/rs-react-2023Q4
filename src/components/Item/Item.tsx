import { CharacterType } from '@/types/types';
import React from 'react';

type PropsType = {
  character: CharacterType;
};

const CardItem: React.FC<PropsType> = ({ character }) => {
  return (
    <li className="border rounded p-3 basis-[49%]">
      <h3 className="font-bold text-xl">{character.name}</h3>
    </li>
  );
};

export default CardItem;
