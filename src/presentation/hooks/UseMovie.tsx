import { useEffect, useState } from 'react';
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { Cast } from '../../core/entities/cast.entity';
import { FullMovie } from '../../core/entities/movie.entity';


export const UseMovie = ( movieid: number ) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>();


  useEffect(() => {
    loadMovie();    
  }, [movieid]);


  const loadMovie = async() => {
    setIsLoading(true);

    const fullMoviePromise = UseCases.getMovieByIdUseCase(movieDBFetcher, movieid);
    const castPromise = UseCases.getMovieCastUseCase(movieDBFetcher, movieid);
    
    const [ fullMovie, cast ] = await Promise.all([ fullMoviePromise, castPromise ]);

    setMovie(fullMovie);
    setCast( cast );

    setIsLoading(false);
    
  }
  






  return {
    isLoading,
    movie,
    cast,
  }
}