import axios from 'axios'

const BASE='http://localhost:8080'
const DELETEBYUSERID='/remove/{id}'

class UserService{
    retrieveAllUsers(){
        return axios.get(`${BASE}/getUsers`);
    }

    deleteUserById(id) {
        return axios.delete(`${BASE}/remove/${id}`);
    }

    retrieveUser(id) {
        //console.log('executed service')
        return axios.get(`${BASE}/user/${id}`);
    }

    createUser(user) {
        //console.log('executed service')
        return axios.post(`${BASE}/saveUser/`, user);
    }

    updateUser(user) {
        //console.log('executed service')
        return axios.put(`${BASE}/saveUser/`, user);
    }


}
export default new UserService()

