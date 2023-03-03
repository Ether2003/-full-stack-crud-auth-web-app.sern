/**
 * this file exports api calls for the authentication process
 * author: Refaat 🌻
 */
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const authApi = axios.create({
    baseURL: 'http://localhost:3333/auth'
});

export const register = async (credentials) => {
    const response = await authApi.post('/register', credentials);
    return response.data;
}

export const authenticate = async (credentials) => {
    const response = await authApi.post('/login', credentials);

    if (response.data.token) {
        cookies.set('token', response.data.token, { path: '/' });
    }

    return response.data;
}