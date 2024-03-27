import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

import AboutScreen from '../screens/AboutScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { PantallaDeInicio } from '../screens/PantallaDeInicio';
import { PantallaListaDeEventos } from '../screens/PantallaListaDeEventos';
import { PantallaDetallesDeEvento } from '../screens/PantallaDetallesDeEvento';


export type RootStackParams = {
  Inicio: undefined,
  Eventos: undefined,
  DetalleDeEvento: {id:number,name:string},
  About:undefined,
  Settings:undefined


}
const Stack = createStackNavigator<RootStackParams>();
export const StackNavigator= ()=> {
  return (
    <Stack.Navigator screenOptions={{
    headerShown: true,
    headerStyle:{
      elevation:0,
      shadowColor:'transparent'}}}>
      
      <Stack.Screen name="Inicio" component={PantallaDeInicio} />
      <Stack.Screen name="Eventos" component={PantallaListaDeEventos} />
      <Stack.Screen name="DetalleDeEvento" component={PantallaDetallesDeEvento} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      
    </Stack.Navigator>
  );
}