import axios from 'axios'

const instance = axios.create({
    baseURL: "https://react-burger-app-275f1.firebaseio.com/"
})

export default instance;