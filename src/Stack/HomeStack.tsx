import React from 'react';
import {Easing} from 'react-native-reanimated';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import HomeScreen from '../Screens/Home/HomeScreen';
import ProfileScreen from '../Screens/Profile/ProfileScreen';

interface Props {}
const Home = createSharedElementStackNavigator();
const HomeStack = (props: Props) => {
  return (
    <Home.Navigator screenOptions={{headerShown: false}}>
      <Home.Screen name="Home" component={HomeScreen} />
    </Home.Navigator>
  );
};

export default HomeStack;
