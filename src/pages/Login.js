import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import API from '../API.js'
import login_header_image from "../images/login_header_image.jpeg"
import { showMessage } from "react-native-flash-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/ducks/user.js";

const Login = ({ navigation }) => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('');


    const handleSubmit = async() => {
        try {
            const data = await API.authenticate(
                email,
                password
            )

            if(data.status === 200) { 
                await AsyncStorage.setItem('TOKEN', data.token)
                dispatch(getUser());

            } else {
                showMessage({
                    message: data.message,
                    type: "danger"
                })
            }

        } catch(error){
            showMessage({
                message: 'Error: '+error.message,
                type: "danger"
            })
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
                    <Text style={styles.paragraph}>If you are new here /  <Text style={{ color: '#223872'}} onPress={() => navigation.navigate('Register')}>Sign up now</Text></Text>

            </View>
        </>
    )
}

const styles = StyleSheet.create({

    background_header : {
        height: 250
    },
    container: {
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
        backgroundColor: '#223872',
        padding: 15,
        },
    paragraph : {
        marginTop : 15,
        color: 'gray'
    }
  });
  


export default Login;
