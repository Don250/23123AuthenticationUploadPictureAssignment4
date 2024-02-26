import React from "react";
import { View, Text,ImageBackground, Image } from 'react-native';
import {
     DrawerContentScrollView,
DrawerItemList
 } from "@react-navigation/drawer";
import Ionicons from'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

 const CustomDrawer = props => {
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props } contentContainerStyle={{backgroundColor:'#fff'}}>
                <ImageBackground source={require('../assets/splash.png')} style={{padding:20}}>
                    <Image
                    source={require('../assets/status.jpg')} style={{height:50, width:70,marginBottom: 10, borderRadius: 40}}/>
                    <Text style={{color:'#000' ,fontSize:15,}}>
                        Donatien Munyeshyaka
                    </Text>
                </ImageBackground>
                <View style={{flex:1, backgroundColor:'#fff',paddingTop: 10}}>
                <DrawerItemList {...props}/>
                </View>

            </DrawerContentScrollView>
            <View>

            </View>

        </View>
    )
 } 
 export default CustomDrawer