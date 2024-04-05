import {StackScreenProps} from '@react-navigation/stack';

import {ScrollView} from 'react-native-gesture-handler';
import {RootStackParams} from '../../../routes/StackNavigator';

import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

import {UseLibro} from '../../hooks/UseLibro';
import {LibrosHeader} from './LibrosHeader';
import {LibrosDetails} from './LibrosDetails';

interface Props extends StackScreenProps<RootStackParams, 'DetalleDeLibro'> {}

export const PantallaDetalleDeLibro = ({route}: Props) => {
  const {librosid} = route.params;
  const {isLoading, libro} = UseLibro(librosid);

  if (isLoading || !libro) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      {/* Header */}
      {libro && <LibrosHeader title={libro.title} />}

      {/* Details */}
      {libro && <LibrosDetails libro={libro} />}
    </ScrollView>
  );
};
