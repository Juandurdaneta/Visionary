import React, { useState } from "react";
import { Text, TextInput } from "react-native";


const UserForm = ({title, user}) =>{

    const [username, setUsername] = useState(user ? user.username : "")

    return(
        <View>
            <Text>{title}</Text>
            <Text>Username</Text>
            <TextInput 
                textContentType="username"
                placeholder="Username"
                placeholderTextColor="gray"
                onChange={text => setUsername(text)}
                value={username}
            />
            <Text>Email address</Text>
        </View>
    )
}

export default UserForm;

