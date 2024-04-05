import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';
import {UseMovies} from '../../hooks/UseMovies';
import {UseLibros} from '../../hooks/UseLibros';
import {LibrosCarrusel} from '../../components/libros/LibrosCarrusel';

export const HomeScreen = () => {
  const {isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage} =
    UseMovies();
  const {volumes} = UseLibros();

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <ScrollView>
      <View>
        <LibrosCarrusel libros={volumes} />
        <PosterCarousel movies={nowPlaying} />

        {/* Populares */}
        <HorizontalCarousel
          movies={popular}
          title="Populares"
          loadNextPage={popularNextPage}
        />

        {/* Mejor Calificadas */}
        <HorizontalCarousel movies={topRated} title="Mejor calificadas" />

        {/* Próximamente */}
        <HorizontalCarousel movies={upcoming} title="Próximamente" />
      </View>
    </ScrollView>
  );
};
