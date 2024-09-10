
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import Home from '../screens/Home/Home';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  )
}
// screenOptions = {{header: ()=> null, headeShown: false}}
export default MainNavigation