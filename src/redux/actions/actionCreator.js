// actions.js
export const LOGIN = "LOGIN";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";
export const ALLDOGS = "ALLDOGS";
export const ALLDOGS_ERROR = "ALLDOGS_ERROR";



import axios from "axios";

const API = import.meta.env.VITE_API_URL; 

export function userLog(user) {
  return async function (dispatch) {
    try {

      const { data } = await axios.post(`${API}userLogin`, user);
      alert([...data])

      return dispatch({ type: LOGIN, payload: data });
    } catch (error) {
      console.log(error)
      return dispatch({
        
        type: LOGIN_ERROR,
        payload: error,
      });
    }
  };
}


export const logout = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${API}userLogout`);
      return dispatch({    type: LOGOUT, payload: data });
    } catch (error) {
      return dispatch({
        type: LOGOUT,
        payload: error,
      });
    }
  };

};

export function register(user) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`${API}userRegister`, user);
      return dispatch({ type: REGISTER, payload: data });
    } catch (error) {
      return dispatch({
        type: REGISTER,
        payload: error,
      });
    }
  };
}

//DOGS 
export function getDogs() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${API}allDogs`,);
      return dispatch({ type: REGISTER, payload: data });
    } catch (error) {
      return dispatch({
        type: ALLDOGS_ERROR,
        payload: error,
      });
    }
  };
}