import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomDrawer from '../Navigation/CustomDrawer';
import Calculator from './Calculator'
import Contact from './Contact'
import Home from './Home';
import Profile from './Profile';

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
                        <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

const TopTab = createMaterialTopTabNavigator();

function TopTabNavigation() {
    return (
        <TopTab.Navigator  >
            <TopTab.Screen name="Home" component={Home} />
            <TopTab.Screen name="Profile" component={Profile} />
            <TopTab.Screen name="Contact" component={Contact} />
            <TopTab.Screen name="Calculator" component={Calculator} />
        </TopTab.Navigator>
    );
}

export default function DrawerNav() {
    return (

     
            <Drawer.Navigator drawerContent={props => <CustomDrawer{...props} />} screenOptions={{
                headerShown: true,
                drawerActiveBackgroundColor: ' colors={["rgb(0, 128, 0)", "rgb(0, 255, 0)"]}',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontFamily: 'Roboto-Medinum', fontSize: 15
                },
            }}>
                <Drawer.Screen name="Home" component={BottomTabNavigation} options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="home-outline" size={22} color={color} />
                    )
                }} />

                <Drawer.Screen name="Profile" component={BottomTabNavigation} options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="person-circle" size={22} color={color} />
                    )
                }} />

                <Drawer.Screen name="Contact" component={BottomTabNavigation} options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="people-outline" size={22} color={color} />
                    )
                }} />

                <Drawer.Screen name="Calculator" component={BottomTabNavigation} options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="calculator" size={22} color={color} />
                    )
                }} />
            </Drawer.Navigator>
       
    );
}
