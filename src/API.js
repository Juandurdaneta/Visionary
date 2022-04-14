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

       const token = await AsyncStorage.getItem('TOKEN');

        const bodyData = {
            username,
            email
        };


        const data = await(
            await fetch(`${API_URL}/users`, {
                method: 'PUT',
                headers : { 'Authorization' : `Bearer ${token}`, 'Content-Type': 'application/json'},
                body: JSON.stringify(bodyData)
            })
        ).json();

        return data;

    },

    deleteUser : async() => {

       const token = await AsyncStorage.getItem('TOKEN');

        const data = await(await fetch(`${API_URL}/users`, {
            method: 'DELETE',
            headers : { 'Authorization' : `Bearer ${token}`}
        })
        ).json();

        return data;

    },


    getMangas : async () => {

        const endpoint = `${API_URL}/manga/`;
        return await (await fetch(endpoint)).json();


    },

    getManga : async(id) =>{
        const endpoint = `${API_URL}/manga/${id}`;
        return await (await fetch(endpoint)).json();
    },

    followManga : async(mangaId) => {
        const token = await AsyncStorage.getItem('TOKEN');

        const bodyData = {
            mangaId
        }

        const data = await(
            await fetch(`${API_URL}/users/followManga`, {
                method: 'PUT',
                headers : { 'Authorization' : `Bearer ${token}`, 'Content-Type': 'application/json'},
                body: JSON.stringify(bodyData)
            })
        ).json();

        return data;

    },

    unfollowManga : async(mangaId) => {
        const token = await AsyncStorage.getItem('TOKEN');

        const bodyData = {
            mangaId
        };

        const data = await(
            await fetch(`${API_URL}/users/unfollowManga`, {
                method: 'PUT',
                headers : { 'Authorization' : `Bearer ${token}`, 'Content-Type': 'application/json'},
                body: JSON.stringify(bodyData)
            })
        ).json();

        return data;

    }

}

export default apiSettings;