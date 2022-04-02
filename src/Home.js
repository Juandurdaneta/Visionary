import React, {useContext} from "react";
import { Text, ScrollView, View } from "react-native";
import { useAuth } from "./auth";
const Home = () => {

    const auth = useAuth();
    const user = auth.user;

   return(
       <ScrollView>
           <View>
               <Text>Hello, {user.username}</Text>
               <Text>Enjoy the latests of our mangas</Text>
           </View>
       </ScrollView>
       )


}

export default Home;