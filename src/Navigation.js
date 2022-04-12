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
import MangaDetails from "./pages/MangaDetails";
// theme
import visionaryTheme from "./theme/visionaryTheme";
import MenuComponent from "./components/MenuComponent";
import { MenuProvider } from "react-native-popup-menu";
import { AiOutlineHome, AiFillHome, AiOutlineUser } from 'react-icons/ai'
import { View } from "react-native";
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
                <MenuProvider>
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            headerRight: () =>(
                               route.name == 'Profile' && <MenuComponent />
                            ),
                            headerTitleAlign: "center",
                            headerShadowVisible: false, 
                            
                            tabBarIcon : ({focused, color, size}) =>{
                                let iconName;
                                if(route.name === 'Home') {
                                    iconName = focused ? <AiFillHome size={size} color={color} /> : <AiOutlineHome size={size} color={color} />;
                                    return iconName
                                }
                                if(route.name === 'Profile') {
                                    return <AiOutlineUser size={size} color={color}/>
                                }
                            }
                        })}
                    >
                        <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
                        <Tab.Screen name="Profile" component={Profile} />
                        <Tab.Screen name="Manga Details" component={MangaDetails} options={{
                            tabBarButton: () => (
                                <View style={{width:0, height:0}}></View>
                            ),
                            tabBarVisible:false //hide tab bar on this screen
                        }}/>
                    </Tab.Navigator>
                </MenuProvider>
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