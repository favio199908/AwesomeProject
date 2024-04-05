import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../presentation/screens/home/HomeScreen';

import {SettingsScreen} from '../presentation/screens/settings/SettingsScreen';
import {PantallaListaDeEventos} from '../presentation/screens/PantallaListaDeEventos';
import {PantallaDetallesDeEvento} from '../presentation/screens/PantallaDetallesDeEvento';
import {PantallaListaDeLibros} from '../presentation/screens/library/PantallaListaDeLibros';
import {PantallaDetalleDeLibro} from '../presentation/screens/library/PantallaDetalleDeLibro';
import {PantallaDetalleMovie} from '../presentation/screens/movie/PantallaDetalleMovie';

export type RootStackParams = {
  Inicio: undefined;
  Eventos: undefined;
  DetalleDeEvento: {id: number; name: string};
  Libros: undefined;
  DetalleDeLibro: {librosid: string};
  DetalleMovie: {movieid: number};
  Settings: undefined;
};
const Stack = createStackNavigator<RootStackParams>();
export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Eventos" component={PantallaListaDeEventos} />
      <Stack.Screen
        name="DetalleDeEvento"
        component={PantallaDetallesDeEvento}
      />
      <Stack.Screen name="Libros" component={PantallaListaDeLibros} />
      <Stack.Screen name="DetalleDeLibro" component={PantallaDetalleDeLibro} />
      <Stack.Screen name="DetalleMovie" component={PantallaDetalleMovie} />

      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
