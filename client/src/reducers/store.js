function reducer(state = [], action) {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}

export default reducer;
