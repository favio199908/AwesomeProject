import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';



import { StackNavigator } from './routes/StackNavigator';
import { BottomTabsNavigator } from './routes/BottomTabsNavigator';
import { MaterialBottomNavigator } from './routes/MaterialBottomNavigator';


export const App = () => {


  return (
    
    <NavigationContainer>

      {/*<StackNavigator/>
      <BottomTabsNavigator/>*/}
      <MaterialBottomNavigator/>

    </NavigationContainer>
  );
};
