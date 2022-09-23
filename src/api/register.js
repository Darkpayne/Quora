import axios from 'axios'
const BASE_URL = 'http://10.0.0.229/Interns/JonLee/Laravel-Apii/public';


export default  axios.create({
    baseURL : BASE_URL,
    headers : {'Content-type' : 'application/json'}
});
