import axios from "axios";

export class UserService{
    static serverUrl = `http://localhost:3000/users`;

    static getAllUsers(){
        return axios.post(this.serverUrl); 
    } 
}