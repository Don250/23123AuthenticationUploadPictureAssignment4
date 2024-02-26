
// export default Home;
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useReducer, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
// import * as Animatable from 'react-native-animatable';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from "react-native-safe-area-context";
import { validateInput } from '../actions/fromActions';
import Button from '../components/Button';
import Input from '../components/Input';
import { COLORS, FONTS, SIZES } from "../constants";
import { reducer } from '../reducers/fromReducers';
import { ExtraText,ExtraView,TextLink,TextLinkContent } from '../components/style';

const isTestMode = true;
const initialState = {
    inputValue: {
        fullName: isTestMode ? "Donatien Munyeshyaka" : "",
        email: isTestMode ? "example@gmail.com" : "",
        password: isTestMode ? "**********" : "",
        confirmPassword: isTestMode ? "**********" : "",
    },
    inputValidities: {
        fullName: false,
        email: false,
        password: false,
        confirmPassword: false
    },
    formIsValid: false
}

const Home = ({ navigation }) => {
    const [isLoading, setIsloading] = useState(false);
    const [formState, dispatchFormState] = useReducer(reducer, initialState)

    const inputChangedHandler = useCallback((inputId, inputValue) => {
        const result = validateInput(inputId, inputValue)
        dispatchFormState({ inputId, validationResult: result, inputValue })

    }, [dispatchFormState])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient
                colors={["rgb(0, 128, 0)", "rgb(0, 255, 0)"]}
                style={{ flex: 1 }}
            >
                <StatusBar hidden />
                <KeyboardAwareScrollView >
                    <View
                        style={styles.header}>
                        <Text style={styles.headerTitle}>Register</Text>
                        <Text style={styles.subHeaderTitle}>Please register to create a new account</Text>
                    </View>
                    <View
                        //aanimation="fadeInputBig"
                        style={styles.footer}>

                        <Text style={styles.inputHeader}>Full Name</Text>
                        <Input
                            id="fullName"
                            onInputChanged={inputChangedHandler}
                            errorText={formState.inputValidities["fullName"]}
                            placeholder="Donatien"

                            placeholderTextColor={COLORS.black}
                        />
                        <Text style={styles.inputHeader}>Email</Text>
                        <Input
                            id="email"
                            onInputChanged={inputChangedHandler}
                            errorText={formState.inputValidities["email"]}
                            placeholder="example@gmail.com"
                            placeholderTextColor={COLORS.black}
                            keyboardType="email-address"
                        />
                        <Text style={styles.inputHeader}>Password</Text>
                        <Input
                            id="password"
                            onInputChanged={inputChangedHandler}
                            errorText={formState.inputValidities["password"]}
                            placeholder="***********"
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={true}
                            autoCapitalize="none"
                        />
                        <Text style={styles.inputHeader}>Re-type Password</Text>
                        <Input
                            id="confirmPassword"
                            onInputChanged={inputChangedHandler}
                            errorText={formState.inputValidities["confirmPassword"]}
                            placeholder="***********"
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={true}
                            autoCapitalize="none"
                        />

                        <Button
                            title="SIGN UP"
                            isLoading={isLoading}
                            onPress={() => navigation.navigate("Home")}
                        />

                        <ExtraView>
                            <ExtraText> Have an account already? </ExtraText>
                            <TextLink onPress={() => navigation.navigate('Login')}>
                                <TextLinkContent>Login</TextLinkContent>
                            </TextLink>
                        </ExtraView>

                    </View>
                </KeyboardAwareScrollView>
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
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 22,
        paddingVertical: 30
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
    }
});

export default Home;
