import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/HomeScreen';

import { SettingsScreen } from '../screens/SettingsScreen';
import { PantallaListaDeEventos } from '../screens/PantallaListaDeEventos';
import { PantallaDetallesDeEvento } from '../screens/PantallaDetallesDeEvento';
import { PantallaListaDeLibros } from '../screens/book/PantallaListaDeLibros';
import { PantallaDetalleDeLibro } from '../screens/book/PantallaDetalleDeLibro';
import { PantallaDetalleMovie } from '../screens/movie/PantallaDetalleMovie';




export type RootStackParams = {
  Inicio: undefined,
  Eventos: undefined,
  DetalleDeEvento: {id:number,name:string},
  Libros: undefined,
  DetalleDeLibro: { id: number, titulo: string },
  DetalleMovie: { movieid: number},
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
      
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Eventos" component={PantallaListaDeEventos} />
      <Stack.Screen name="DetalleDeEvento" component={PantallaDetallesDeEvento} />
      <Stack.Screen name="Libros" component={PantallaListaDeLibros} />
      <Stack.Screen name="DetalleDeLibro" component={PantallaDetalleDeLibro} />
      <Stack.Screen name="DetalleMovie" component={PantallaDetalleMovie} />
      
      <Stack.Screen name="Settings" component={SettingsScreen} />
      
    </Stack.Navigator>
  );
}