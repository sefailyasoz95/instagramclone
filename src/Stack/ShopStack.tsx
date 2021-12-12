import React from 'react';
import {Easing} from 'react-native-reanimated';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import ShopScreen from '../Screens/Shop/ShopScreen';

interface Props {}
const Shop = createSharedElementStackNavigator();
const ShopStack = (props: Props) => {
  return (
    <Shop.Navigator screenOptions={{headerShown: false}}>
      <Shop.Screen name="Shop" component={ShopScreen} />
    </Shop.Navigator>
  );
};

export default ShopStack;
