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

    static getAppData = () => {
        return axiosInstance.get('/data/get')
    }

    static uploadApp = (data: any) => {
        return axiosInstance.post('/data/upload', data)
    }

    static updateApp = (appId: string) => {
        return axiosInstance.post('/data/update', { appId })
    }
}

export default APICalls