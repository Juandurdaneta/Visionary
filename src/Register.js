import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Link } from "react-router-dom";

const Register = () => {
    return(

        <>    
        <View style={styles.background_header}></View>
        <View style={styles.container}>


            <View style={styles.greeting}>
                    <Text style={styles.greetingText}>Welcome!</Text> <Text style={styles.h1}>Join our community today.</Text>
                </View>

                <View style={styles.formGroup}>
                    <TextInput  style={styles.input} placeholder="Email"/>
                    <TextInput  style={styles.input} placeholder="Username"/>
                    <TextInput style={styles.input}  placeholder="Password" secureTextEntry={true}/>
                <Button title='Sign Up' color='#233872' style={styles.buttonStyle}/>
                </View>
                <Text style={styles.paragraph}>Already have an account? / <Link to={'/'}>Log in</Link></Text>

        </View>
        </>

    )
}

const styles = StyleSheet.create({


    background_header : {
        height: '30vh',
        backgroundImage : 'url("https://cdn.dribbble.com/users/334862/screenshots/15610485/media/8dcf04f337509b1b306c7727907115e0.png")',
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
  
})

export default Register;