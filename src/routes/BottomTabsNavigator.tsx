import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1 } from '../screens/tabs/Tab1';
import { Tab2 } from '../screens/tabs/Tab2';
import { Tab3 } from '../screens/tabs/Tab3';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';


const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = ()=> {
  return (
    <Tab.Navigator 
    sceneContainerStyle={{
        backgroundColor: globalColors.background
    }}
    screenOptions={{
        //headerShown: false,
        tabBarLabelStyle: {
            marginBottom: 5,
        },
        headerStyle:{
            elevation:0,
        }
    }}>
      <Tab.Screen name="TAB1" options={{title:'1',tabBarIcon:({color})=>(<Text style={{color}}>Tab 1</Text>)}} component={Tab1} />
      <Tab.Screen name="TAB2" options={{title:'2'}} component={Tab2} />
      <Tab.Screen name="TAB3" options={{title:'3'}} component={Tab3} />
    </Tab.Navigator>
  );
}