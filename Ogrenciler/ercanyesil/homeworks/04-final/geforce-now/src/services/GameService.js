import axios from "axios";

export class GameService{
    static serverUrl = `http://localhost:3000/games`;

    static getAllGames(){
        return axios.get(this.serverUrl);
    } 
}