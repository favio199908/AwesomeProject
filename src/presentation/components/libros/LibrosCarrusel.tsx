import {ScrollView, Text, View} from 'react-native';
import {Libros} from '../../../core/entities/libro.entity';
import {LibrosPoster} from './LibrosPoster';

interface Props {
  libros: Libros[];
  height?: number;
}
export const LibrosCarrusel = ({height = 440, libros}: Props) => {
  return (
    <View style={{height}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {libros.map(libros => (
          <LibrosPoster key={libros.id} libro={libros} />
        ))}
      </ScrollView>
    </View>
  );
};
