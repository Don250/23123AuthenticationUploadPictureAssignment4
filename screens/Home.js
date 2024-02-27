import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Profile=()=>{
    return(
        <View style = {styles.container}>
            <Text>Home Screen</Text>
        </View>
    )
}
export default Profile
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  });