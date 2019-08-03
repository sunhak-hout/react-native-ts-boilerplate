import { formatDate } from '@/libs/moment';
import { Text, Thumbnail, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Thumbnail
        source={require('@/assets/undraw_react.png')}
        style={styles.thumbnail}
      />
      <Text style={styles.text}>The Journey to React Native</Text>
      <Text style={[styles.text, styles.date]}>{formatDate(new Date())}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  thumbnail: {
    width: 150,
    height: 150,
  },
  text: {
    marginVertical: 4,
  },
  date: {
    color: 'grey',
    fontSize: 14,
  },
});

export default HomeScreen;
