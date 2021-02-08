import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './home';
import ChatScreen from './Characterchoose';
import SettingsScreen from './setting';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Chat: {
    screen: ChatScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
});
export default createAppContainer(TabNavigator);
