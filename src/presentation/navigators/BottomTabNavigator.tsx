import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { useCounterState } from '../store/counter-store';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {

  const count = useCounterState(state => state.count)

  return (
    <Tab.Navigator
      // screenOptions={{
      //   headerTitle:`Contador: ${count}`
      // }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}