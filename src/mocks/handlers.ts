import { http } from 'msw';

export const handlers = [
  http.get('https://api.disneyapi.dev/character/', () => {}),
];
