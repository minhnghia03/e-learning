import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Image } from 'react-native';

import { images } from '../assets';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import ChapterDetailScreen from '../screens/ChapterDetailScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import { themeColors } from '../theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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

const { streamIcon, classWorkIcon, exploreIcon } = images;
const extraTabOptions = {
  tabBarLabelStyle: { fontFamily: 'exo' },
  tabBarStyle: { borderTopRightRadius: 12, borderTopLeftRadius: 12 },
  tabBarActiveTintColor: themeColors.bgPurple,
  tabBarInactiveTintColor: themeColors.darkGrayText,
};
function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Explore">
      <Tab.Screen
        name="Explore"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return (
              // Custom tab bar icon
              <Image
                source={exploreIcon}
                style={{
                  tintColor: props.color,
                  width: props.size,
                  height: props.size,
                }}
                {...props}
              />
            );
          },
          ...extraTabOptions,
        }}
      />
      <Tab.Screen
        name="Stream"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return (
              // Custom tab bar icon
              <Image
                source={streamIcon}
                style={{
                  tintColor: props.color,
                  width: props.size,
                  height: props.size,
                }}
                {...props}
              />
            );
          },
          ...extraTabOptions,
        }}
      />
      <Tab.Screen
        name="Classwork"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return (
              // Custom tab bar icon
              <Image
                source={classWorkIcon}
                style={{
                  tintColor: props.color,
                  width: props.size,
                  height: props.size,
                }}
                {...props}
              />
            );
          },
          ...extraTabOptions,
        }}
      />
    </Tab.Navigator>
  );
}
