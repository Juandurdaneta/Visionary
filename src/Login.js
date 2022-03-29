import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Link } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <View style={styles.container}>

            <View style={styles.greeting}>
                <Text style={styles.h1}>Welcome,<br/>Login Now.</Text>
                <Text style={styles.greetingText}>If you are new here / <Link to={'/register'}>Create New</Link></Text>
            </View>

            <View style={styles.formGroup}>
                <TextInput  style={styles.input} placeholder="Email"/>
                <TextInput style={styles.input}  placeholder="Password" secureTextEntry={true}/>
            <Button title='Login' color='#233872' style={styles.buttonStyle}/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      padding: '8%'
    },

    greeting: {
        marginTop: '8rem',
    },

    greetingText: {
        marginTop: '.5rem',
        color: 'gray',
        marginBottom: 20    },

    h1: {
        fontSize: '1.5rem',
        fontWeight: '600',
        marginBottom: 12
    },

    formGroup : {
        marginTop: '1.6rem'
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
    link : {
        textDecorationLine: 'none'
    }

  });
  


export default Login;
