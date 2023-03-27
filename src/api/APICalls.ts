import axios from 'axios';

import { SERVER_ENDPOINT } from '../constants';
import { IClientCreate } from '../types';

const axiosInstance = axios.create({
    baseURL: SERVER_ENDPOINT
})

class APICalls {
    static createClients = (data: IClientCreate) => {
     return axiosInstance.post('/api/client/create', data)
    }
}

export default APICalls