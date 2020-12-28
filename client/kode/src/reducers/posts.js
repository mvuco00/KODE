//state ce bit postovi, a to je array
export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...state, action.payload];
    default:
      return state;
  }
};
