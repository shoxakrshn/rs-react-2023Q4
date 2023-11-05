export interface IResponse {
  info: Info;
  results: IHero[];
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface IHero {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
