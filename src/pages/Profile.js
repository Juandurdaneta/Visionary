import React, { useEffect, useState } from "react"
import { getUser } from "../redux/ducks/user" 
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, Text, Image, StyleSheet , View, TouchableOpacity} from "react-native";
import EditUserModal from "../components/EditUserModal";

const Profile = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)
    const [profileEditModal, setProfileEditModal] = useState(false);
    useEffect(()=>{
        dispatch(getUser())
    }, [])

    return(
       <ScrollView style={styles.container}>

        <EditUserModal visible={profileEditModal} onModalClose={setProfileEditModal} />

           <View style={styles.headerProfileImage}>

            <Image source={user && user.profileImage} style={styles.profilePicture} />

                <View style={styles.headerProfileUser}> 

                    <Text style={styles.username}>{ user.username }  </Text>
                    
                    <TouchableOpacity  style={styles.buttonStyle} onPress={setProfileEditModal} >
                            <Text style={{ textAlign: 'center', color: 'gray'}}>Edit Profile</Text>
                    </TouchableOpacity>

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

    username : {
        fontSize: 20,
        fontWeight: 600
    },
    pencilIcon : {
        fontSize: 16,
        marginLeft: 10,
        marginTop: 5
    },

    buttonStyle : {
        borderRadius: 5,
        padding: 6,
        borderColor: 'gray',
        borderWidth: 2,
        margin: 10
        },

})

export default Profile;