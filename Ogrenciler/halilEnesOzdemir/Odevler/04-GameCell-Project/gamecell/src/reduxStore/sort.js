export const sortGames = (isSort = false) => ({
  type: 'IS_SORT',
  isSort
});

const sortGamesReducer = (isSort = false, action) => {
  switch (action.type) {
    case 'IS_SORT':
      return action.isSort;

    default:
      return isSort;
  }
};

export default sortGamesReducer;
