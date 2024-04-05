import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../../routes/StackNavigator';
import {globalStyles} from '../../../theme/theme';

import {LibrosCarrusel} from '../../components/libros/LibrosCarrusel';
import {UseLibros} from '../../hooks/UseLibros';
import {HorizontalCarouselLibros} from '../../components/libros/HorizontalCarruselLibros';

// Componente funcional para la pantalla de lista de libros
export const PantallaListaDeLibros = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const {volumes, isLoading} = UseLibros();

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <View style={globalStyles.container}>
      <LibrosCarrusel libros={volumes} />
      <Text>ScrollinfinitoLibros</Text>
      {/*<HorizontalCarouselLibros libros={volumes} />*/}
    </View>
  );
};
