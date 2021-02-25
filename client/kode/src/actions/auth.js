import { AUTH } from "../actionTypes/actionTypes";
import * as api from "../api";

// kad su action creators async koristi se redux thunk
// imamo funkciju koja vraća async fju s dispatchom
export const signin = (formData, history) => async (dispatch) => {
  try {
    // log in user
    // navigate to home push
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    // sign up the user
    // navigate to home push
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
