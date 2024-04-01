import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

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
