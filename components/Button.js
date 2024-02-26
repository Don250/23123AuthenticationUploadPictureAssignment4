// import { View,Text,StyleSheet,TouchableOpacity} from "react-native";
// import React from "react";
// import {COLORS, SIZES,FONTS} from '../constants';
// import { ActivityIndicator } from "react-native";

// const Button = (props) => {
//     const  isLoading = props.isLoading | false
//     return(
//         <TouchableOpacity style={{
//             ...styles.btn,
//             ...props.style
//         }}
//         onPress={props.onPress}
         
//          >
//             {
//                 isLoading && isLoading == true?(
//                     <ActivityIndicator size={"small"} color={COLORS.white}/>

                    
//                 ): (
//                     <Text style={{...FONTS.body2, color:COLORS.white}}>{props.title}</Text>
//                 )
            
//         </TouchableOpacity>
//     )
// }
// const styles= StyleSheet.create({

//     btn:{
//         paddingHorizontal: SIZES.padding,
//         paddingVertical: SIZES.padding,
//         borderColor: COLORS.primary,
//         borderEndWidth:1,
//         borderRadius: SIZES.padding,
//         alignItems: "center",
//         backgroundColor: COLORS.primary,
//         marginVertical: 12
        
//     },
//     onPress:{

//     }
// })

import React from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from '../constants';

const Button = (props) => {
    const isLoading = props.isLoading || false; // Corrected the logical OR operator

    return (
        <TouchableOpacity
            style={{
                ...styles.btn,
                ...props.style
            }}
            onPress={props.onPress}
        >
            {isLoading && isLoading === true ? (
                <ActivityIndicator size={"small"} color={COLORS.white} />
            ) : (
                <Text style={{ ...FONTS.body2, color: COLORS.white }}>{props.title}</Text>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
        borderColor: COLORS.primary,
        borderWidth: 1, // Corrected the property name
        borderRadius: SIZES.radius, // Updated from SIZES.padding to SIZES.radius
        alignItems: "center",
        backgroundColor: COLORS.primary,
        marginVertical: 12
    }
});

export default Button;
