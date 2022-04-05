import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from "./src/Register"
import Login from "./src/Login"



const Stack = createNativeStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Register" headerBackTitleVisible={false} component={Register} options={{headerShown: false}}></Stack.Screen> 
            <Stack.Screen name="Login" headerBackTitleVisible={false} component={Login} options={{headerShown: false}}></Stack.Screen>   
          </Stack.Navigator>      
      </NavigationContainer>
    );
}

