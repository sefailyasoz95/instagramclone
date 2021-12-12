import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import TabStack from './src/Stack/TabStack';

export default function App() {
  return (
    <NavigationContainer>
      <TabStack />
      <StatusBar barStyle="light-content" />
    </NavigationContainer>
  );
}
