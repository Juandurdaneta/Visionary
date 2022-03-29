import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Link } from "react-router-dom";

const Register = () => {
    return(
        <View style={styles.container}>

        <View style={styles.greeting}>
                <Text style={styles.h1}>Welcome,<br/>Join today.</Text>
                <Text style={styles.greetingText}>If you already have an account / <Link to={'/'}>Log in</Link></Text>
            </View>

            <View style={styles.formGroup}>
                <TextInput  style={styles.input} placeholder="Email"/>
                <TextInput  style={styles.input} placeholder="Username"/>
                <TextInput style={styles.input}  placeholder="Password" secureTextEntry={true}/>
            <Button title='Sign Up' color='#233872' style={styles.buttonStyle}/>
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
  
})

export default Register;