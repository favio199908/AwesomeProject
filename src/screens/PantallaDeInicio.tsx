import { NavigationProp, useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, Button } from 'react-native';
import { PrimaryButton } from '../components/shared/PrimaryButton';
import { RootStackParams } from '../routes/StackNavigator';

export const PantallaDeInicio = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    return(
        <View>
            <Text>Pantalla de Inicio</Text>
            
            <PrimaryButton
      onPress={() =>
        navigation.navigate('Inicio' as never)}
      label= 'Inicio'
      />
           <PrimaryButton
      onPress={()=>navigation.navigate('Eventos')}
      label= 'Eventos'
      />
      <PrimaryButton
      onPress={()=>navigation.navigate('About' as never)}
      label= 'About'
      />
        </View>

    )

}