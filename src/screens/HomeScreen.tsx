import { formatDate } from '@/libs/moment';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';


const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <Text>Hello From HomeScreen</Text>
      <Text>Today is: {formatDate(new Date())}</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
