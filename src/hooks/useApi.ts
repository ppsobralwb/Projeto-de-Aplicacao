import axios from 'axios'

export const api = axios.create({
    //baseURL: 'http://localhost:3000',
    baseURL: 'http://127.0.0.1:3000',
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        // return {
        //     user: { id: 0, email: 'ppsobral@gmail.com', name:'Pedro Paulo'}
        // };
        const response = await api.post('/validate', { token });
        return response.data;
    },
    getApplications: async() => {
        const response = await api.get('/applications');
        return response.data;
    },
    getApplicationById: async (id: string) => {
        const token = localStorage.getItem('authToken');
        const response = await api.get(`/applications/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    },
    register: async (name: string, email: string, password: string) => {
        // return {
        //     user: {name, email, password},
        // };
        const response = await api.post('/register', { name, email, password});
        return response.data;
    },
    registerApplication: async (name: string, applicationCall: string, parameters: []) => {
        const token = localStorage.getItem('authToken');
        const response = await api.post('/createApplication', {name, applicationCall, parameters}, 
            {headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    },
    updateApplication: async (id: string, name: string, applicationCall: string, parameters: []) => {
        const token = localStorage.getItem('authToken');
        const response = await api.put(`/updateApplication/${id}`, {name, applicationCall, parameters}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    },
    deleteApplication: async (id: string) => {
        const token = localStorage.getItem('authToken');
        const response = await api.delete(`/deleteApplication/${id}`,
            {headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    },
    signin: async (email: string, password: string) => {
        const response = await api.post('/signin', { email, password });
        console.log(response.data)
        return response.data
    },
    logout: async () => {
        return { status: true };
        const response = await api.post('/logout');
        return response.data;
    }
});