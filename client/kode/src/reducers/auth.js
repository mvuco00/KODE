import { AUTH, LOGOUT } from "../actionTypes/actionTypes";

const AuthReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      //action.data vraća token i result (podatke o korisniku).
      // To želimo spremiti u localStorage kako bi se sačuvalo nakon refresha
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      console.log(action?.data);
      return { ...state, authData: action?.data };

    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default AuthReducer;
