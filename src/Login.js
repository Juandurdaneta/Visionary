import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button, Image, ImageBackground } from "react-native";
import { Link, useNavigate } from "react-router-dom";
import API from './API.js'
import login_header_image from "./images/login_header_image.jpeg"
import { AuthContext, useAuth } from "./auth";
import { showMessage } from "react-native-flash-message";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('');
    const auth = useAuth()
    const navigate = useNavigate();

    const handleSubmit = async() => {
        try {
            const data = await API.authenticate(
                email,
                password
            )

            if(data.status === 200) { 
                auth.login({ authToken: data.token, username: data.username })
                navigate('/', { replace: true })
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
            <Text style={styles.greetingText}>Welcome back! <br /> <Text style={styles.h1}>Log in with your credentials.</Text></Text>
            </View>

            <View style={styles.formGroup}>
                <TextInput  style={styles.input} placeholder="Email" vaule={email} onChangeText={setEmail} />
                <TextInput style={styles.input}  placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword}/>
            <Button title='Login' color='#046BF1' style={styles.buttonStyle} onPress={handleSubmit}/>
            </View>
            <Text style={styles.paragraph}>If you are new here / <Link style={{color: '#046BF1', textDecoration: 'none'}}to={'/register'}>Sign up now</Link></Text>

        </View>
        </>
    )
}

const styles = StyleSheet.create({

    background_header : {
        height: '30vh'
    },
    container: {
        backgroundColor: '#fff',
        padding: '8%',
      },
      greeting: {
        marginTop: '1rem',
    },
    greetingText: {
        marginTop: '.5rem',
        color: 'gray',
    },
    h1: {
        fontSize: '1.4rem',
        fontWeight: '600',
        marginBottom: 12
    },
    formGroup : {
        marginTop: '1rem'
    },
    input: {
        height: 50,
        marginBottom: 25,
        backgroundColor: '#F6F6F6',
        padding: 10,
        borderRadius: 10
    },
    buttonStyle : {
        margin: 100,
        borderRadius: 24
    },
    paragraph : {
        marginTop : 15,
        color: 'gray'
    }
  });
  


export default Login;
