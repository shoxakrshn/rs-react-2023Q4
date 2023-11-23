import { useState } from 'react';
import { CharactersContext } from './CharactersContext';
import { CharacterType } from '../../types/types';

type ProviderType = {
  children: React.ReactNode;
};

export const CharactersProvider: React.FC<ProviderType> = ({ children }) => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);

  return (
    <CharactersContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharactersContext.Provider>
  );
};
