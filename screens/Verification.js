// import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useReducer, useState } from "react";
import { StyleSheet, Text, View } from "react-native";


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from "react-native-safe-area-context";
import { validateInput } from '../actions/fromActions';
import Button from '../components/Button';
import { COLORS, FONTS, SIZES } from "../constants";
import { OTPTextView } from 'react-otp-textinput';
import * as Animatable from 'react-native-animatable';


const Home = ({ navigation }) => {
    const [isLoading, setIsloading] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient
                 colors={["rgb(0, 128, 0)", "rgb(0, 255, 0)"]}
                style={{ flex: 1 }}
            >
                <StatusBar hidden />
                
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Verification</Text>
                        <Text style={styles.subHeaderTitle}>Please verify with your code</Text>
                    </View>
                    
                    <Animatable.View 
                   animation="fadeInputBig"
                   style={styles.footer}>
                        
                    <KeyboardAwareScrollView >
                        <Text  style={styles.inputHeader}>Code</Text>
                        <OTPTextView
                        texInputStyle={styles.OTPStyle}
                        onPress={()=>navigation.navigate("Login")}/>


                        <Button
                            title="SIGN UP"
                            isLoading={isLoading}
                            onPress={() => navigation.navigate("Home")}
                        />
                   
                </KeyboardAwareScrollView>
                </Animatable.View>
            </LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 60,
        paddingBottom: 4
    },
    footer: {
        flex: 3,
        backgroundColor: COLORS.white,
        paddingHorizontal: 12,
        paddingVertical: 0
    },
    headerTitle: {
        ...FONTS.h2,
        color: COLORS.white
    },
    subHeaderTitle: {
        ...FONTS.body4,
        color: COLORS.white,
        marginVertical: SIZES.padding,
        textAlign: "center"
    },
    inputHeader: {
        ...FONTS.body4,
        textTransform: "uppercase",
        marginVertical: 4
    },
    OTPStyle:{
        backgroundColor: COLORS.gray,
        borderColor: COLORS.black,
        borderWidth:1,
        borderRadius: 10,
        height:58,
        width: 58,
        borderBottomWidth:1
        
    }
});

export default Home;