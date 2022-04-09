import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from "react-native";;
import register_header_image from "../images/register_header_image.png";
import API from '../API';
import { showMessage } from "react-native-flash-message";

const Register = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)

    const handleSubmit = async () => {
        setError(false);
        try {
            
            const data = await API.createUser(
                username,
                email,
                password
            );

            
            if(data.status === 200) {
                setUsername('') ; setEmail(''); setPassword('')
                showMessage({
                    message: data.message,
                    type: "success"
                })
            } else {
                showMessage({
                    message: data.message,
                    type: "danger"
                })
            }

        } catch(error) {
            setError(true);
            console.log(error);
        }
    }

    return(

        <>    
        <ImageBackground style={styles.background_header} source={register_header_image}></ImageBackground>

        <View style={styles.container}>


            <View style={styles.greeting}>
                    <Text style={styles.greetingText}>Welcome! </Text><Text style={styles.h1}>Join our community today.</Text>
                </View>

                <View style={styles.formGroup}>

                    <TextInput  style={styles.input} placeholder="Email" value={email} onChangeText={setEmail}  />
                    <TextInput  style={styles.input} placeholder="Username" value={username} onChangeText={setUsername}  />
                    <TextInput style={styles.input}  placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword}  />

                    <TouchableOpacity  style={styles.buttonStyle} onPress={handleSubmit}>
                        <Text style={{ color: "white", textAlign: 'center' }}>Sign up</Text>
                    </TouchableOpacity>

                </View>
                <Text style={styles.paragraph}>Already have an account? / <Text style={{ color: '#223872'}} onPress={() => navigation.navigate('Login')}>Login</Text> </Text>

        </View>
        </>

    )
}

const styles = StyleSheet.create({


    background_header : {
        height: 250
    },
    container: {
        padding: '6%',
      },
      greeting: {
        marginTop: 0,
    },
    greetingText: {
        marginTop: 10,
        color: 'gray',
    },
    h1: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 12,
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
    },
    message : {
        backgroundColor: 'lightblue',
    }
  
})

export default Register;