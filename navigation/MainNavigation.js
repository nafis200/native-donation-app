
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import Home from '../screens/Home/Home';
import SingleDonationItem from '../screens/SingleDonationItem/SingleDonationItem';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.SingleDonationItem} component={SingleDonationItem} />
    </Stack.Navigator>
  )
}
// screenOptions = {{header: ()=> null, headeShown: false}}
export default MainNavigation