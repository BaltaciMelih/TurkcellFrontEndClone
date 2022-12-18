const todos = (state = [], action) => {
  if (action.type == 'ADD_TODO') {
    return [...state, action.payload];
  } else if ((action.type = 'DELETE_TODO')) {
    let newTodos = state.filter((q) => q.id !== action.payload.id);
    return newTodos;
  } else {
    return state;
  }
};

export default todos;
