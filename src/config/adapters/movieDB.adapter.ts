import { AxiosAdapter } from './http/axios.adapter';


export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'fd4ab1e80f1062fbefcabbac7d5bd645',
    language: 'es'
  }
});