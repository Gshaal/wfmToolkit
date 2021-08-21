import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://wfm-toolkit.herokuapp.com/api'
})

//https://wfm-toolkit.herokuapp.com/login
export default instance;