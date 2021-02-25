import { AUTH } from "../actionTypes/actionTypes";
import * as api from "../api";

// kad su action creators async koristi se redux thunk
// imamo funkciju koja vraća async fju s dispatchom
export const signin = (formData, history) => async (dispatch) => {
  try {
    // log in user
    // dohvat podataka koje smo u API-ju dohvatili iz baze
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    // navigate to home push
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    // sign up the user
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    // navigate to home push
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
