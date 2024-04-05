import {useEffect, useState} from 'react';
import * as UseCases from '../../core/use-cases';

import {FullLibro} from '../../core/entities/libro.entity';
import {libroDBFetcher} from '../../config/adapters/libroDB.adapter';

export const UseLibro = (librotitle: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setLibro] = useState<FullLibro>();

  useEffect(() => {
    loadLibro();
  }, [librotitle]);

  async function loadLibro() {
    setIsLoading(true);

    const fullLibroPromise = UseCases.getLibroByIdUseCase(
      libroDBFetcher,
      librotitle,
    );

    const [fullLibro] = await Promise.all([fullLibroPromise]);

    setLibro(fullLibro);

    setIsLoading(false);
  }

  return {
    isLoading,
    movie,
  };
};
