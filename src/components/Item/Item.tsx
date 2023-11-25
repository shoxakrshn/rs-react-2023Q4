import { CharacterType } from '@/types/types';
import Link from 'next/link';
import React from 'react';

type PropsType = {
  character: CharacterType;
};

const CardItem: React.FC<PropsType> = ({ character }) => {
  return (
    <li className="border rounded p-3 basis-[49%]">
      <Link href={`/character/${character._id}`} key={character._id}>
        <h3 className="font-bold text-xl">{character.name}</h3>
      </Link>
    </li>
  );
};

export default CardItem;
