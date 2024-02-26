import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import DrawerNav from "../screens/DrawerNav";

const Stack=createStackNavigator();

const BaseRoot = ()=>{
    return(
        <NavigationContainer>
             <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="DrawerNav" component={DrawerNav}/>
             </Stack.Navigator>
        </NavigationContainer>
    )
}

export default BaseRoot;