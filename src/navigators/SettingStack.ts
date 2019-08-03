import { createStackNavigator, createAppContainer } from 'react-navigation';
import SettingScreen from '@/screens/SettingScreen';

const SettingStack = createStackNavigator({
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      title: 'Setting',
    },
  },
});

export default createAppContainer(SettingStack);
