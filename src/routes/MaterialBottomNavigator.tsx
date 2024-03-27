import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Ionicons } from '../presentation/components/shared/Ionicons';
import { PantallaListaDeEventos } from '../screens/PantallaListaDeEventos';
import { PantallaListaDeLibros } from '../screens/book/PantallaListaDeLibros';

const Tab = createMaterialBottomTabNavigator();

export const MaterialBottomNavigator=()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{title:'HOME',tabBarIcon:({color})=> <Ionicons name="home-outline"/>}} component={StackNavigator} />
      <Tab.Screen name="Events" options={{title:'EVENTS',tabBarIcon:({color})=> <Ionicons name="calendar-outline"/>}} component={PantallaListaDeEventos} />
      <Tab.Screen name="Books" options={{title:'BOOKS',tabBarIcon:({color})=> <Ionicons name="library-outline"/>}} component={PantallaListaDeLibros} />
      
      
      <Tab.Screen name="Settings" options={{title:'SETTINGS',tabBarIcon:({color})=> <Ionicons name="settings-outline"/>}} component={SettingsScreen} />
      
      
    </Tab.Navigator>
  );
}