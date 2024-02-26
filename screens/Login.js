
import Checkbox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useReducer, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from "react-native-safe-area-context";
import { validateInput } from '../actions/fromActions';
import Button from '../components/Button';
import Input from '../components/Input';
import SocialButton from "../components/SocialButton";
import { COLORS, FONTS, Icons, SIZES } from "../constants";
import { reducer } from '../reducers/fromReducers';
import { ExtraText,ExtraView,TextLink,TextLinkContent } from '../components/style';
import DrawerNav from './DrawerNav';
import Register from './Home';

const isTestMode = true;

const initialState = {
    inputValue: {
        email: isTestMode ? "example@gmail.com" : "",
        password: isTestMode ? "**********" : "",
    },
    inputValidities: {
        email: false,
        password: false,
    },
    formIsValid: false
};

const Login = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const [formState, dispatchFormState] = useReducer(reducer, initialState);

    const inputChangedHandler = useCallback((inputId, inputValue) => {
        const result = validateInput(inputId, inputValue);
        dispatchFormState({ type: "INPUT_CHANGE", inputId, validationResult: result, inputValue });
    }, [dispatchFormState]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient
                colors={["rgb(0, 128, 0)", "rgb(0, 255, 0)"]}
                style={{ flex: 1 }}
            >
                <StatusBar hidden />
                <KeyboardAwareScrollView >
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Sign In</Text>
                        <Text style={styles.subHeaderTitle}>Please signin to existing account!</Text>
                    </View>
                    <View style={styles.footer}>
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
                        <View style={styles.checkboxContainer}>
                            <Checkbox
                                style={styles.Checkbox}
                                value={isChecked}
                                color={isChecked ? COLORS.primary : undefined}
                                onValueChange={setChecked}
                            />
                            <Text style={{ ...FONTS.body4 }}> Remember me</Text>
                            
                        </View >
                        
                        <TouchableOpacity onPress={() => navigation.navigate("Verification")}>
                            
                        <Text style={{ ...FONTS.body4, color: COLORS.black }}>Forgot Password</Text>
                    </TouchableOpacity>
                    <Button
                        title="SIGNIN"
                        isLoading={isLoading}
                        onPress={() => navigation.navigate("DrawerNav")}
                    />

                    <ExtraView>
                        <ExtraText>Don't have an account already? </ExtraText>
                        <TextLink onPress={() => navigation.navigate('Register')}>
                            <TextLinkContent>Signup</TextLinkContent>
                        </TextLink>
                    </ExtraView>
                    
                    <View style={styles.lineContainer}>
                        <View style={styles.line} />
                        <Text style={{ ...FONTS.body4, color: COLORS.black, textAlign: "center" }}>Or</Text>
                        <View style={styles.line} />
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginVertical: SIZES.padding2
                    }}>
                        <SocialButton
                            onPress={() => console.log("Implementing social authentication")}
                            icon={Icons.facebook}
                        />
                        <SocialButton
                            onPress={() => console.log("Implementing social authentication")}
                            icon={Icons.google}
                        />
                        <SocialButton
                            onPress={() => console.log("Implementing social authentication")}
                            icon={Icons.twitter}

                        />
                    </View>
                  


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
    },
    checkboxContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginVertical: 18
    },
    lineContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: "gray"
    },
    inputContainer: {
        width: "100%",
        backgroundColor: COLORS.white
    }
});

export default Login;
