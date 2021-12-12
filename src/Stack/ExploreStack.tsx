import React from 'react';
import {Easing} from 'react-native-reanimated';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import ExploreScreen from '../Screens/Explore/ExploreScreen';

interface Props {}
const Explore = createSharedElementStackNavigator();
const ExploreStack = (props: Props) => {
  return (
    <Explore.Navigator screenOptions={{headerShown: false}}>
      <Explore.Screen name="Explore" component={ExploreScreen} />
    </Explore.Navigator>
  );
};

export default ExploreStack;
