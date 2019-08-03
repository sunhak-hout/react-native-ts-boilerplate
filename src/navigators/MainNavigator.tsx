import AppIcon from '@/components/AppIcon';
import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import HomeStack from './HomeStack';
import SettingStack from './SettingStack';

const MainNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Setting: SettingStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        const iconName = getIconName(routeName as RouteName);
        return <AppIcon name={iconName} color={focused ? '#42adf5' : 'grey'} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#42adf5',
      inactiveTintColor: 'grey',
    },
  },
);

type RouteName = 'Home' | 'Setting';
const getIconName = (routeName: RouteName) => {
  switch (routeName) {
    case 'Home':
      return 'home';
    case 'Setting':
      return 'settings';
    default:
      return 'home';
  }
};

export default createAppContainer(MainNavigator);
