/* eslint-disable react-native/no-inline-styles */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ExploreStack from './ExploreStack';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import ReelsStack from './ReelsStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ShopStack from './ShopStack';

interface Props {}
const Tab = createBottomTabNavigator();
const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#040404' },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({}) => ({
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={focused ? 25 : 20}
              color={focused ? '#ff4444' : 'white'}
            />
          ),
        })}
      />

      <Tab.Screen
        name="ExploreStack"
        component={ExploreStack}
        options={({}) => ({
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'md-search-sharp' : 'md-search-outline'}
              size={focused ? 25 : 20}
              color={focused ? '#ff4444' : 'white'}
            />
          ),
        })}
      />
      <Tab.Screen
        name="ReelsStack"
        component={ReelsStack}
        options={({}) => ({
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'movie' : 'movie-open-outline'}
              size={focused ? 25 : 20}
              color={focused ? '#ff4444' : 'white'}
            />
          ),
        })}
      />
      <Tab.Screen
        name="ShopStack"
        component={ShopStack}
        options={({}) => ({
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo
                name={'shopping-bag'}
                size={focused ? 25 : 20}
                color={focused ? '#ff4444' : 'white'}
              />
            ) : (
              <Feather
                name={'shopping-bag'}
                size={focused ? 25 : 20}
                color={focused ? '#ff4444' : 'white'}
              />
            ),
        })}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={({}) => ({
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../Assets/Images/profile-img.jpeg')}
              width={10}
              height={10}
              style={{
                width: 26,
                height: 26,
                borderRadius: 1,
                borderWidth: 1,
                borderColor: focused ? 'red' : 'transparent',
                resizeMode: 'contain',
              }}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default TabStack;

// const styles = StyleSheet.create({});
