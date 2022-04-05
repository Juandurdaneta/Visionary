import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from "./src/Register"
import Login from "./src/Login"
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import store from './src/redux/store'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Register" headerBackTitleVisible={false} component={Register} options={{headerShown: false}}></Stack.Screen> 
            <Stack.Screen name="Login" headerBackTitleVisible={false} component={Login} options={{headerShown: false}}></Stack.Screen>   
          </Stack.Navigator>
          <FlashMessage position="bottom" />      
      </NavigationContainer>
    </Provider>
    );
}

