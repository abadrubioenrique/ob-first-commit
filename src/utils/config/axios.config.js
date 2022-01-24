import axios from 'axios';
// Default config for AXIOS
export default axios.create(
    {
        baseURL: 'https://api-fc.herokuapp.com',
        responseType: 'json',
        timeout: 6000
    }
)