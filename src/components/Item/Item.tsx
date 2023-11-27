import { CharacterType } from '@/types/types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type PropsType = {
  character: CharacterType;
};

const CardItem: React.FC<PropsType> = ({ character }) => {
  const router = useRouter();
  const { page, limit, search } = router.query;

  const href = search
    ? {
        pathname: `/character/${character._id}`,
        query: { page, limit, search },
      }
    : {
        pathname: `/character/${character._id}`,
        query: { page, limit },
      };

  return (
    <li className="border rounded p-3 basis-[49%]">
      <Link href={href} key={character._id}>
        <h3 className="font-bold text-xl">{character.name}</h3>
      </Link>
    </li>
  );
};

export default CardItem;
