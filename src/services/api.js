import axios from 'axios';

const apikey = '3c876bf0';
const api = axios.create({
    baseURL: 'https://www.omdbapi.com'
});

export default api;
export { apikey };
