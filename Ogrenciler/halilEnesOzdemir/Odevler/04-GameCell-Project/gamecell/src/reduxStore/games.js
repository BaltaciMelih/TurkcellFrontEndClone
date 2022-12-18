const GET_GAMES = 'GET_GAMES';

export const gamesAction = () => async (dispatch) => {
  const data = await fetch('http://localhost:8080/data').then((res) => res.json());

  dispatch({ type: GET_GAMES, payload: data });
};

const gameReducer = (state = { games: [] }, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        games: action.payload
      };

    default:
      return state;
  }
};

export default gameReducer;
