import * as actionTypes from "./actionTypes";
import Request from "../../api/Request";

export function getGamesSuccess(games) {
  return { type: actionTypes.GET_GAMES_SUCCESS, payload: games };
}

export function getGames(category, searchText) {
  return function (dispatch) {
    let url = "http://localhost:3000/data";
    const request = new Request(url);

    //kategori bilgisi yollanmışsa
    if (category) {
      console.log("getgames if")
      let gamesArr = [];
      request.get().then((result) => {
        result.map((game) => {
          if (game.genres.includes(category)) {
            gamesArr.push(game);
          }
        });
        dispatch(getGamesSuccess(gamesArr));
      });
    }
    //searchbar'a bilgi girilmişse
    else if(searchText){
      let searchingGames = []; //aramaya uyan verilerin tutulacağı array
      if (searchText !== "") {  //eğer searchbar boş değilse
        request.get().then((response) => { 
          response.map((game) => {
            if (game.title.toLowerCase().includes(searchText)) { //searchbar'daki text'i içeren oyunlar bulunur
              searchingGames.push(game); //eşleşen oyunlar array'e atılır
            } 
          });
          dispatch(getGamesSuccess(searchingGames)); //eşleşen oyunların olduğu arraye göre oyunlar çekilir
        });
      }
    }
    //default olarak
    else {
      request
        .get()
        .then((result) => dispatch(getGamesSuccess(result)))
        .then((data) => console.log(data.payload));
    }
  };
}
