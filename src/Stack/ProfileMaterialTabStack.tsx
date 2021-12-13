import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AttachedScreen from '../Screens/Profile/TopBar/AttachedScreen';
import PostsScreen from '../Screens/Profile/TopBar/PostsScreen';
import VideosScreen from '../Screens/Profile/TopBar/VideosScreen';
import MyReelsScreen from '../Screens/Profile/TopBar/MyReelsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfileMaterialTab = createMaterialTopTabNavigator();
const ProfileMaterialTabStack = () => {
  return (
    <ProfileMaterialTab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'transparent',
        },
        tabBarShowLabel: false,
      }}
    >
      <ProfileMaterialTab.Screen
        name="Posts"
        component={PostsScreen}
        options={({}) => ({
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={'grid'}
              size={20}
              color={focused ? '#ff4444' : 'white'}
            />
          ),
        })}
      />
      <ProfileMaterialTab.Screen
        name="Reels"
        component={MyReelsScreen}
        options={({}) => ({
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'movie' : 'movie-open-outline'}
              size={20}
              color={focused ? '#ff4444' : 'white'}
            />
          ),
        })}
      />
      <ProfileMaterialTab.Screen
        name="Videos"
        component={VideosScreen}
        options={({}) => ({
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'play' : 'play-outline'}
              size={20}
              color={focused ? '#ff4444' : 'white'}
            />
          ),
        })}
      />
      <ProfileMaterialTab.Screen
        name="Attached"
        component={AttachedScreen}
        options={({}) => ({
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name={'person-pin'}
              size={20}
              color={focused ? '#ff4444' : 'white'}
            />
          ),
        })}
      />
    </ProfileMaterialTab.Navigator>
  );
};

export default ProfileMaterialTabStack;
