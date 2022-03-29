import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Link } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <>
        <View style={styles.background_header}></View>
        <View style={styles.container}>

            <View style={styles.greeting}>
            <Text style={styles.greetingText}>Welcome back!</Text> <Text style={styles.h1}>Log in with your credentials.</Text>
            </View>

            <View style={styles.formGroup}>
                <TextInput  style={styles.input} placeholder="Email"/>
                <TextInput style={styles.input}  placeholder="Password" secureTextEntry={true}/>
            <Button title='Login' color='#046BF1' style={styles.buttonStyle}/>
            </View>
            <Text style={styles.paragraph}>If you are new here / <Link style={{color: '#046BF1', textDecoration: 'none'}}to={'/register'}>Sign up now</Link></Text>

        </View>
        </>
    )
}

const styles = StyleSheet.create({

    background_header : {
        height: '30vh',
        backgroundImage : 'url("https://cdn.dribbble.com/users/56226/screenshots/13389754/media/f3fb87ec39b9d13318c2e26704dcf74a.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
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
