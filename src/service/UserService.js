import axios from 'axios'

const BASE='http://localhost:8080/'
const USERS='http://localhost:8080/getUsers'
const DELETEBYUSERID='/remove/{id}'

class UserService{
    retrieveAllUsers(){
        return axios.get(USERS);
    }

    deleteUserById(id) {
        return axios.delete(`${BASE}/remove/${id}`);
    }


}
export default new UserService()

