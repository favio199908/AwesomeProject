import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {Volumes} from '../../../infrastructure/interfaces/libros-db.responses';

import {LibrosMapper} from '../../../infrastructure/mappers/libros.mapper';
import {Libros} from '../../entities/libro.entity';

export const volumesUseCase = async (
  fetcher: HttpAdapter,
): Promise<Libros[]> => {
  try {
    const Volumene = await fetcher.get<Volumes>('/volumes');

    return Volumene.items.map(LibrosMapper.fromLibrosDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - volumes/s1gVAAAAYAAJ');
  }
};
