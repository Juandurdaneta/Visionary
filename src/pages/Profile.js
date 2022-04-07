import React, { useEffect } from "react"
import { getUser } from "../redux/ducks/user"; 
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, Text, Image, StyleSheet , View} from "react-native";
import { BsPencil } from 'react-icons/bs'

const Profile = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)
    
    useEffect(()=>{
        dispatch(getUser())
    }, [])

    return(
       <ScrollView style={styles.container}>
           <View style={styles.headerProfileImage}>
            <Image source={user && user.profileImage} style={styles.profilePicture} />
            <View style={styles.headerProfileUser}> 
                <Text style={styles.username}>{ user.username }  </Text><Text style={styles.pencilIcon}> <BsPencil /> </Text> 
            </View>
           </View>
       </ScrollView>
    );


}


const styles = StyleSheet.create({
    container : {
        padding: 15,
        textAlign: "center",
    },
    profilePicture : {
        width: 66,
        height: 58, 
        marginBottom: 15
    },
    headerProfileImage: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        margin: 10
    },
    headerProfileUser : {
        flexDirection: "row"
    },
    username : {
        fontSize: 20,
        fontWeight: 600
    },
    pencilIcon : {
        fontSize: 16,
        marginLeft: 10,
        marginTop: 5
    }

})

export default Profile;