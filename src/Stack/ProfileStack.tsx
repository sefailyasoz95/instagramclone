import React from 'react';
import { Easing } from 'react-native-reanimated';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import ProfileScreen from '../Screens/Profile/ProfileScreen';

interface Props {}
const Profile = createSharedElementStackNavigator();
const ProfileStack = (props: Props) => {
  return (
    <Profile.Navigator screenOptions={{ headerShown: false }}>
      <Profile.Screen name="ProfileNavigatorStack" component={ProfileScreen} />
    </Profile.Navigator>
  );
};

export default ProfileStack;
