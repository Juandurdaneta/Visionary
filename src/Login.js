import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Login = () => {
    return(
        <View style={styles.container}>
            <View style={styles.greeting}>
                <Text style={styles.h1}>Welcome,<br/>Login Now.</Text>
                <Text style={styles.greetingText}>If you are new here / Create New</Text>
            </View>

            <View style={styles.formGroup}>
                <TextInput  style={styles.input} placeholder="Email"/>
                <TextInput style={styles.input}  placeholder="Password" secureTextEntry={true}/>
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
        color: 'gray'
    },

    h1: {
        fontSize: '1.5rem',
        fontWeight: '600'
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
    }

  });
  


export default Login;
