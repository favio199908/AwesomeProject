import {useEffect, useState} from 'react';
import type {Libros} from '../../core/entities/libro.entity';
import * as UseCases from '../../core/use-cases';
import {libroDBFetcher} from '../../config/adapters/libroDB.adapter';

export const UseLibros = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [volumes, setvolumes] = useState<Libros[]>([]);
  useEffect(() => {
    initialLoad();
  }, []);
  const initialLoad = async () => {
    const volumesPromise = await UseCases.volumesUseCase(libroDBFetcher);
    const [volumes] = await Promise.all([volumesPromise]);

    setvolumes(volumes);

    setIsLoading(false);
  };

  return {isLoading, volumes};
};
