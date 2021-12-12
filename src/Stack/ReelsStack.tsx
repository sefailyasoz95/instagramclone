import React from 'react';
import {Easing} from 'react-native-reanimated';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import ReelsScreen from '../Screens/Reels/ReelsScreen';

interface Props {}
const Reels = createSharedElementStackNavigator();
const ReelsStack = (props: Props) => {
  return (
    <Reels.Navigator screenOptions={{headerShown: false}}>
      <Reels.Screen name="Reels" component={ReelsScreen} />
    </Reels.Navigator>
  );
};

export default ReelsStack;
