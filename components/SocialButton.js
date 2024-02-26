import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SIZES } from '../constants';
const SocialButton = ({ onPress, icon, style }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
        >
            <Image 
                source={icon}
                resizeMode='contain'
                style={[styles.icon, style]} // Apply the styles here
            />
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    container:{
        marginHorizontal:SIZES.padding
    },
    icon:{
        height:44,
        width:42,
        borderRadius:30
    }
})
export default SocialButton