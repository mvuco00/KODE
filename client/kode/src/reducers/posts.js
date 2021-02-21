import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  LIKE,
  DELETE,
} from "../actionTypes/actionTypes";
//state ce bit postovi, a to je array
export default (state = [], action) => {
  switch (action.type) {
    case DELETE:
      return state.filter((post) => post._id !== action.payload);
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...state, action.payload];
    case UPDATE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case LIKE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return state;
  }
};
