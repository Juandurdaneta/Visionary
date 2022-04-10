import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    API_URL
} from './config'

const defaultConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}

const apiSettings = {
    createUser : async(username, email, password) => {
        const bodyData = {
            username,
            email,
            password
        };
        // sending the request to the API
        const data = await(
            await fetch(`${API_URL}/users/register`, {
                ...defaultConfig,
                body: JSON.stringify(bodyData)
            })
        ).json();

        return data;
    },
    
    authenticate : async(email, password) => {
        const bodyData = {
            email,
            password
        };
        // sending request to the API
        const data = await(
            await fetch(`${API_URL}/users/login`, {
                ...defaultConfig,
                body: JSON.stringify(bodyData)
            })
        ).json();

        return data;
    },

    getUser : async() => {
       const token = await AsyncStorage.getItem('TOKEN')

       const data = await(await fetch(`${API_URL}/users`, {
           method: 'GET',
           headers : { 'Authorization' : `Bearer ${token}`}
       })
       ).json();


       return data
    },

    updateUser : async(username, email) =>{

       const token = await AsyncStorage.getItem('TOKEN')

        const bodyData = {
            username,
            email
        };

        console.log(bodyData)

        const data = await(
            await fetch(`${API_URL}/users`, {
                method: 'PUT',
                headers : { 'Authorization' : `Bearer ${token}`, 'Content-Type': 'application/json'},
                body: JSON.stringify(bodyData)
            })
        ).json();

        return data;

    }

}

export default apiSettings;