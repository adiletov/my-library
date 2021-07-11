import axios from "axios";
const authKey = 'whatever-you-want'
const axiosApi = axios.create({
    baseURL: 'https://reactnd-books-api.udacity.com',
    headers: {
        Authorization : authKey
    }
})

export default axiosApi