import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Link } from "react-router-dom";
import register_header_image from "./images/register_header_image.png"
import API from './API.js'
const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false)

    const handleSubmit = async () => {
        setMessage('');
        try {
            const data = await API.createUser(
                username,
                email,
                password
            );

            console.log(data);
            
            setMessage(data.message)

            if(data.status === 200) {setUsername('') ; setEmail(''); setPassword('')}

        } catch(error) {
            setMessage(error);
            console.log(error);
        }
    }

    return(

        <>    
        <View style={styles.background_header}></View>

        <View style={styles.container}>

            <View style={styles.message}>
                {!!message && <Text>{message}</Text>}
            </View>

            <View style={styles.greeting}>
                    <Text style={styles.greetingText}>Welcome! <br/><Text style={styles.h1}>Join our community today.</Text></Text>
                </View>

                <View style={styles.formGroup}>
                    <TextInput  style={styles.input} placeholder="Email" value={email} onChangeText={setEmail}  />
                    <TextInput  style={styles.input} placeholder="Username" value={username} onChangeText={setUsername}  />
                    <TextInput style={styles.input}  placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword}  />
                <Button title='Sign Up' color='#046BF1' style={styles.buttonStyle} onPress={handleSubmit}/>
                </View>
                <Text style={styles.paragraph}>Already have an account? / <Link to={'/'}>Log in</Link></Text>

        </View>
        </>

    )
}

const styles = StyleSheet.create({


    background_header : {
        height: '30vh',
        backgroundImage : `url(${register_header_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    container: {
        backgroundColor: '#fff',
        padding: '6%',
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
    },
    message : {
        backgroundColor: 'lightblue',
    }
  
})

export default Register;