import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import HomeStack from './HomeStack';
import SettingStack from './SettingStack';

const MainNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Setting: SettingStack,
});

export default createAppContainer(MainNavigator);
