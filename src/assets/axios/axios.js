import axios from "axios";


const instance = axios.create({
    baseURL: 'https://private-anon-0660c8e823-pizzaapp.apiary-mock.com/',
    // headers: {'Content-Type': 'application/json'}
})

export default instance