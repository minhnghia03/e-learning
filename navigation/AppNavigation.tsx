import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeIcon, HeartIcon, CogIcon } from 'react-native-heroicons/outline';

import ChapterDetailScreen from '../screens/ChapterDetailScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import { themeColors } from '../theme';
import SettingsScreen from '../screens/SettingsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Home" options={{ headerShown: false }} component={BottomTabNavigator} />
        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />
        <Stack.Screen name="SignIn" options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUpScreen} />
        <Stack.Screen
          name="CourseDetail"
          options={{ headerShown: false }}
          component={CourseDetailScreen as React.ComponentType<any>}
        />
        <Stack.Screen
          name="ChapterDetail"
          options={{ headerShown: false }}
          component={ChapterDetailScreen as React.ComponentType<any>}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const extraTabOptions = {
  tabBarLabelStyle: { fontFamily: 'exo' },
  tabBarStyle: { borderTopRightRadius: 12, borderTopLeftRadius: 12 },
  tabBarActiveTintColor: themeColors.bgPurple,
  tabBarInactiveTintColor: themeColors.darkGrayText,
};
function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Trang chủ">
      <Tab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return <HomeIcon size={props.size} color={props.color} />;
          },
          ...extraTabOptions,
        }}
      />
      <Tab.Screen
        name="Yêu thích"
        component={FavoritesScreen}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return <HeartIcon size={props.size} color={props.color} />;
          },
          ...extraTabOptions,
        }}
      />
      <Tab.Screen
        name="Cài đặt"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return <CogIcon size={props.size} color={props.color} />;
          },
          ...extraTabOptions,
        }}
      />
    </Tab.Navigator>
  );
}
