import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {VolumeInfo} from '../../../infrastructure/interfaces/libros-db.responses';
import {LibrosMapper} from '../../../infrastructure/mappers/libros.mapper';
import {FullLibro} from '../../entities/libro.entity';
export const getLibroByIdUseCase = async (
  fetcher: HttpAdapter,
  librotitle: string,
): Promise<FullLibro> => {
  try {
    const libro = await fetcher.get<VolumeInfo>(`/${librotitle}`);
    const fullLibro = LibrosMapper.fromLibrosDBToEntity(libro);
    return fullLibro;
  } catch (error) {
    throw new Error(`Cannot get movie by id: ${librotitle}`);
  }
};
