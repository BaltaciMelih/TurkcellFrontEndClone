import Request from "../../api/Request";
import * as actionTypes from "./actionTypes";

export function changeCategory(category) {  //seçilen kategoriye göre currentCategory güncellenecek
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}

export function getCategoriesSuccess(categories) { //kategoriler json'dan çekilecek
  return {type: actionTypes.GET_CATEGORIES_SUCCESS, payload:categories};
}

export function getCategories() { 
  return function (dispatch) {
    const request = new Request("http://localhost:8000/categories");
    request.get().then(result => dispatch(getCategoriesSuccess(result)))
    .then((data) => console.log(data.payload))
  };
}
