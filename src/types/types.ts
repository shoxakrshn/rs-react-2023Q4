export type InfoType = {
  totalPages: number;
  count: number;
  previousPage: string | null;
  nextPage: string | null;
};

export type CharacterType = {
  _id: number;
  url: string;
  name: string;
  sourceUrl: string;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  alignment: string;
  parkAttractions: string[];
  allies: string[];
  enemies: string[];
  imageUrl: string;
};

export type ResponseType = {
  info: InfoType;
  data: CharacterType[];
};

export type DetailsResponseType = {
  info: InfoType;
  data: CharacterType;
};
