let initialState = {
  muz: 0,
};

export const muzReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EKLEME":
      return { muz: state.muz + 1 };
    case "CIKARMA":
      return { muz: state.muz - 1 };
    default:
      return state;
  }
};
