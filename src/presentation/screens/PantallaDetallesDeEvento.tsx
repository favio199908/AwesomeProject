import {View, Text} from 'react-native';

import {globalStyles} from '../../theme/theme';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigator';
import {useEffect} from 'react';

export const PantallaDetallesDeEvento = () => {
  const params = useRoute<RouteProp<RootStackParams, 'Eventos'>>().params;
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text>Detalles De Evento</Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
        }}>
        {params.id} - {params.name}
      </Text>
    </View>
  );
};
