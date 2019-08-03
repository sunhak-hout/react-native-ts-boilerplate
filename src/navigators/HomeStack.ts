import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '@/screens/HomeScreen';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(HomeStack);
