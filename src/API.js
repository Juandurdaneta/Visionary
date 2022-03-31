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
    }
}

export default apiSettings;