import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity } from "react-native";


const UserForm = ({title, user, callback}) =>{

    const [username, setUsername] = useState(user ? user.username : "")
    const [email, setEmail] = useState(user ? user.email : "")
    const [password, setPassword] = useState("")

    
   

    return(
        <View >

            <View style={styles.pictureContainer}>
                <Image source={user && user.profileImage} style={styles.profilePicture} />
            </View>

            <Text style={styles.labelText}>Username</Text>
            <TextInput 
                textContentType="username"
                placeholder="Username"
                placeholderTextColor="gray"
                onChangeText={setUsername}
                value={username}
                style={styles.formTextInput}
            />
            <Text style={styles.labelText} >Email address</Text>
            <TextInput 
                textContentType="emailAddress"
                placeholder="Email"
                placeholderTextColor="gray"
                onChangeText={setEmail}
                value={email}
                style={styles.formTextInput}
            />

           
            <TouchableOpacity style={styles.updateUserButton} onPress={()=> callback(username, email)}>
                <Text style={{ textAlign: 'center', color: 'white'}}>Update profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.deleteUserButton}>
                <Text style={{ textAlign: 'center', color: 'red'}}>Delete profile</Text>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    labelText: {
        marginVertical: 10,
        color: "gray",
        fontSize: 15
    },
    formTextInput : {
        borderBottomWidth: 1,
        height: 20,
        marginBottom: 30
    },
    profilePicture : {
        width: 66,
        height: 58, 
    },
    pictureContainer : {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 25,
    },
    updateUserButton : {
        padding: 15,
        backgroundColor: "#223872",
        borderRadius: 8,
        marginBottom: 15
    },
    deleteUserButton : {
        padding: 8,
        borderColor: "red",
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1
    }
})

export default UserForm;

