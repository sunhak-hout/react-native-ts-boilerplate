import React, { Fragment } from 'react';
import { SafeAreaView } from 'react-native';
import HomeScreen from '@/screens/HomeScreen';

const App = () => {
  return (
    <Fragment>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
