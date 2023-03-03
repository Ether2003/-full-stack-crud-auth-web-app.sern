/**
 * this file exports api calls to the Shark resource
 * author: Refaat 🌻
 */
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const sharkApi = axios.create({
    baseURL: 'http://localhost:3333/api'
});

const headers = {
    Authorization: cookies.get('token')
};

export const getSharks = async () => {
    const response = await sharkApi.get('/sharks', { headers });
    return response.data;
}

export const createShark = async (shark) => {
    const response = await sharkApi.post(`/sharks`, shark, { headers });
    return response;
}

export const updateShark = async (shark) => {
    const response = await sharkApi.put(`/sharks/${shark.id}`, { name: shark.name }, { headers });
    return response;
}

export const deleteShark = async (_id) => {
    const response = await sharkApi.delete(`/sharks/${_id}`, { headers });
    return response;
}
