import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";


const UserForm = ({title, user}) =>{

    const [username, setUsername] = useState(user ? user.username : "")
    const [email, setEmail] = useState(user ? user.email : "")
    const [password, setPassword] = useState("")
    

    return(
        <View>
            <Text>{title}</Text>
            <Text>Username</Text>
            <TextInput 
                textContentType="username"
                placeholder="Username"
                placeholderTextColor="gray"
                onChangeText={setUsername}
                value={username}
            />
            <Text>Email address</Text>
            <TextInput 
                textContentType="emailAddress"
                placeholder="Email"
                placeholderTextColor="gray"
                onChangeText={setEmail}
                value={email}
            />

            <Text>Password</Text>
            <TextInput 
                textContentType="password"
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="gray"
                onChangeText={setPassword}
            />

        </View>
    )
}

export default UserForm;

