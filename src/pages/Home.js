import React, { useEffect } from "react";
import { Text, ScrollView, View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useHomeFetch } from "../Hooks/useHomeFetch";
import { getUser } from "../redux/ducks/user"; 

const Home = () => {
    const { state } = useHomeFetch();

    console.log(state);


    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)
    
    useEffect(()=>{
        dispatch(getUser())
    }, [])

   return(
       <ScrollView style={styles.containerView}>
           <View style={styles.heroContainer}>
               <Text style={styles.heroContainerTextHeader} >Hello, {user.username}!</Text>
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
        padding: '8%',
        margin: '10px',
        borderRadius: 15
    },
    heroContainerTextHeader : {
        fontSize: 25,
        color: '#F7F7F7',
        marginBottom: '10px',
        fontWeight: "600"
    },
    heroContainerTextParagraph : {
        color: '#D7D6DB',
        fontSize: 15
    }
    
})





export default Home;