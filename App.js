import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Calculator from './screens/Calculator';
import Contact from './screens/Contact';
import Home from './screens/Home';
import Profile from './screens/Profile';

const BottomTab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

function BottomTabNavigation() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Calculator"
        component={Calculator}
        options={{
          tabBarLabel: 'Calculator',
          tabBarIcon: ({ color }) => (
            <AntDesign name="calculator" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={26} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const TopTab = createMaterialTopTabNavigator();

function TopTabNavigation() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Home" component={Home} />
      <TopTab.Screen name="Profile" component={Profile} />
      <TopTab.Screen name="Contact" component={Contact} />
      <TopTab.Screen name="Calculator" component={Calculator} />
    </TopTab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={BottomTabNavigation} options={{ title: 'Home' }} />
        <Drawer.Screen name="Profile" component={TopTabNavigation} options={{ title: 'Profile' }} />
        <Drawer.Screen name="Contact" component={TopTabNavigation} options={{ title: 'Contact' }} />
        <Drawer.Screen name="Calculator" component={TopTabNavigation} options={{ title: 'Calculator' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
