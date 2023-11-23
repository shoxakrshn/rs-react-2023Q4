import React, { useContext } from 'react';
import { CharacterType } from '../../types/types';

type ContextType = {
  characters: CharacterType[];
  setCharacters: React.Dispatch<React.SetStateAction<CharacterType[]>>;
};

export const CharactersContext = React.createContext<ContextType | undefined>(
  undefined,
);

export const useCharactersContext = () => {
  const characters = useContext(CharactersContext);

  if (characters === undefined) {
    throw new Error('useCharactersContext must be used in CharactersContext');
  }

  return characters;
};
