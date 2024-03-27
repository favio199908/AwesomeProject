
import { View, Text, FlatList } from 'react-native';

import { globalStyles } from '../theme/theme';
import { PrimaryButton } from '../presentation/components/shared/PrimaryButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../routes/StackNavigator';

const eventos = [
    { id:1 , name : 'Evento 1'},
    { id:2 , name : 'Evento 2'},
    { id:3 , name : 'Evento 3'},
    { id:4 , name : 'Evento 4'},
    { id:5 , name : 'Evento 5'},
    { id:6 , name : 'Evento 6'},
    { id:7 , name : 'Evento 7'},

];

export const PantallaListaDeEventos = () => {
    const navigation= useNavigation<NavigationProp<RootStackParams>>();
    
    return(
        <View style={globalStyles.container}>
            <Text>Eventos</Text>
            <FlatList data={eventos}
            renderItem={({item}) =>(<PrimaryButton onPress={()=>navigation.navigate('DetalleDeEvento',{id: item.id, name: item.name})}
            label={item.name} />)}/>
            
        </View>

    )

}