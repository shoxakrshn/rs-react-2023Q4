import { http, HttpResponse } from 'msw';
import { mockResponse, mockDetail } from '../service/mockData';
export const handlers = [
  http.get('https://api.disneyapi.dev/character/', () => {
    return HttpResponse.json(mockResponse, { status: 200 });
  }),

  http.get('https://api.disneyapi.dev/character/112', () =>
    HttpResponse.json(mockDetail, { status: 200 }),
  ),
];
