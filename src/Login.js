import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import API from './API.js'
import login_header_image from "./images/login_header_image.jpeg"
import { useAuth } from "./auth";
import { showMessage } from "react-native-flash-message";

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('');
    const auth = useAuth()


    const handleSubmit = async() => {
        try {
            const data = await API.authenticate(
                email,
                password
            )

            if(data.status === 200) { 
                auth.login({ authToken: data.token, username: data.username })

            } else {
                showMessage({
                    message: data.message,
                    type: "danger"
                })
            }

        } catch(error){
            console.log(error)
        }
    }

    return(
        <>
        <ImageBackground source={login_header_image} style={styles.background_header}></ImageBackground>
            <View style={styles.container}>

                <View style={styles.greeting}>
                    <Text style={styles.greetingText}>Welcome back!</Text>
                    <Text style={styles.h1}>Log in with your credentials.</Text>
                </View>

                <View style={styles.formGroup}>
                    <TextInput  style={styles.input} placeholder="Email" vaule={email} onChangeText={setEmail} />
                    <TextInput style={styles.input}  placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword}/>

                    <TouchableOpacity  style={styles.buttonStyle} onPress={handleSubmit}>
                        <Text style={{ color: "white", textAlign: 'center' }}>Log In</Text>
                    </TouchableOpacity>
                    
                </View>
                    <Text style={styles.paragraph}>If you are new here / Sign up now</Text>

            </View>
        </>
    )
}

const styles = StyleSheet.create({

    background_header : {
        height: 250
    },
    container: {
        backgroundColor: '#fff',
        padding: '8%',
      },
      greeting: {
        marginTop: 10,
    },
    greetingText: {
        marginTop: 5,
        color: 'gray',
    },
    h1: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 12
    },
    formGroup : {
        marginTop: 10
    },
    input: {
        height: 50,
        marginBottom: 25,
        backgroundColor: '#F6F6F6',
        padding: 10,
        borderRadius: 10
    },
    buttonStyle : {
        borderRadius: 8,
        backgroundColor: '#046BF1',
        padding: 15,
        },
    paragraph : {
        marginTop : 15,
        color: 'gray'
    }
  });
  


export default Login;
