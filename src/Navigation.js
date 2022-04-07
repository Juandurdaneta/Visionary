// react navigation 
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashMessage from "react-native-flash-message";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// react / redux
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/ducks/user";
// pages
import Home from "./pages/Home";
import Register from "./pages/Register"
import Login from "./pages/Login"
import Profile from "./pages/Profile";
// theme
import visionaryTheme from "./theme/visionaryTheme";

// navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation(){
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);

    useEffect(()=>{
        dispatch(getUser())
    }, [])

    return (
        <NavigationContainer theme={visionaryTheme}>
            {!!user ? (
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        headerLeft: () =>{

                        },
                        headerTitleAlign: "center",
                        cardStyle: {backgroundColor: 'red' }
                    })}
                >
                    <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
                    <Tab.Screen name="My profile" component={Profile} />
                </Tab.Navigator>

            ): (
            <Stack.Navigator>
                <Stack.Screen name="Register" headerBackTitleVisible={false} component={Register} options={{headerShown: false}}></Stack.Screen> 
                <Stack.Screen name="Login" headerBackTitleVisible={false} component={Login} options={{headerShown: false}}></Stack.Screen>   
            </Stack.Navigator>
            )}
            <FlashMessage position="bottom" />
        </NavigationContainer>
    )


}