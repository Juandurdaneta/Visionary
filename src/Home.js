import React, {useContext} from "react";
import { Text, ScrollView, View, StyleSheet } from "react-native";
import { useAuth } from "./auth";
const Home = () => {

    const auth = useAuth();
    const user = auth.user;

   return(
       <ScrollView style={styles.containerView}>
           <View style={styles.heroContainer}>
               <Text style={styles.heroContainerTextHeader} >Hello, {user.username}</Text>
               <Text style={styles.heroContainerTextParagraph} >Enjoy the latests of our mangas</Text>
           </View>
       </ScrollView>
       )

}

const styles = StyleSheet.create({
    containerView : {
        backgroundColor : "#F7F7F7"
        },
    heroContainer : {
        height: '40vh',
        backgroundColor: '#223872',
        color: '#F7F7F7',
        textAlign: 'center',
        padding: '8%'
    },
    heroContainerTextHeader : {
        fontSize: '1.6rem',
        color: '#F7F7F7'
    },
    heroContainerTextParagraph : {
        color: '#D7D6DB',
        fontSize: '.7rem'
    }
    
})





export default Home;