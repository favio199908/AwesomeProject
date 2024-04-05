import {AxiosAdapter} from './http/axios.adapter';

export const libroDBFetcher = new AxiosAdapter({
  baseUrl: 'https://www.googleapis.com/books/v1',
  params: {
    q: 'flowers', // Agrega el parámetro de búsqueda
    orderBy: 'newest', // Agrega el parámetro de ordenación
    key: 'AIzaSyAzGcvBlnYE3FnRj53g1hUJQONrIVLGIE8',
  },
});
