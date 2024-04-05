import {StackScreenProps} from '@react-navigation/stack';

import {ScrollView} from 'react-native-gesture-handler';
import {RootStackParams} from '../../../routes/StackNavigator';
import {UseMovie} from '../../hooks/UseMovie';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

import {UseLibros} from '../../hooks/UseLibros';
import {LibrosHeader} from './LibrosHeader';
import {Text} from 'react-native';

interface Props extends StackScreenProps<RootStackParams, 'DetalleDeLibro'> {}

export const PantallaDetalleDeLibro = () => {
  return (
    <ScrollView>
      <Text>hola</Text>
    </ScrollView>
  );
};
