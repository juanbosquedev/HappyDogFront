// actions.js
export const LOGIN = "LOGIN";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";

export const ALLDOGS = "ALLDOGS";
export const ALLDOGS_ERROR = "ALLDOGS_ERROR";
export const NEWDOG = "NEWDOG";
export const NEWDOG_ERROR = "NEWDOG_ERROR";
export const DELETE_DOG = "DELETE_DOG";
export const DELETE_DOG_ERROR = "DELETE_DOG_ERROR";

export const UPDATE_DOG = "UPDATE_DOG";
export const UPDATE_DOG_ERROR = "UPDATE_DOG_ERROR";

import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export function userLog(user) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`${API}userLogin`, user);

      return dispatch({ type: LOGIN, payload: data.userFromDB });
    } catch (error) {
      return dispatch({ type: LOGIN_ERROR, payload: error });
    }
  };
}

export const logout = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${API}userLogout`);
      return dispatch({ type: LOGOUT, payload: data });
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
      const { data } = await axios.get(`${API}allDogs`);
      return dispatch({ type: ALLDOGS, payload: data });
    } catch (error) {
      return dispatch({
        type: ALLDOGS_ERROR,
        payload: error,
      });
    }
  };
}

export function newDog(dog) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`${API}newDog`, dog);
      return dispatch({ type: NEWDOG, payload: data });
    } catch (error) {
      return dispatch({
        type: NEWDOG_ERROR,
        payload: error,
      });
    }
  };
}

export function deleteDog(dogId) {
  return async function (dispatch) {
    try {
      const { data } = await axios.delete(`${API}dogDelete/${dogId}`);
      return dispatch({ type: DELETE_DOG, payload: data });
    } catch (error) {
      return dispatch({
        type: DELETE_DOG_ERROR,
        payload: error,
      });
    }
  };
}

export function updateDog(updatedDog) {
  return async function (dispatch) {
    try {
      const { data } = await axios.put(
        `${API}updateDog/${updatedDog.id}`,
        updatedDog
      );
      return dispatch({ type: UPDATE_DOG, payload: data.dog });
    } catch (error) {
      return dispatch({
        type: UPDATE_DOG_ERROR,
        payload: error,
      });
    }
  };
}

// const getConfig = () => {
//   const cook = document.cookie;

//   const tokenIndex = cook.indexOf("token=");

//   const token = cook.substring(tokenIndex).replace("token=", "");
//   return {
//     header: {
//       "authorization": token,
//     },
//   };
// };



// export function newDog(dog) {
//   return async function (dispatch) {
//     try {
//       const { data } = await axios.post(`${API}newDog`, dog, getConfig());
//       return dispatch({ type: NEWDOG, payload: data });
//     } catch (error) {
//       return dispatch({ type: NEWDOG_ERROR, payload: error });
//     }
//   };
// }

// export function deleteDog(dogId) {
//   return async function (dispatch) {
//     try {
//       const { data } = await axios.delete(`${API}dogDelete/${dogId}`, getConfig());
//       return dispatch({ type: DELETE_DOG, payload: data });
//     } catch (error) {
//       return dispatch({ type: DELETE_DOG_ERROR, payload: error });
//     }
//   };
// }

// export function updateDog(updatedDog) {
//   return async function (dispatch) {
//     try {
//       const { data } = await axios.put(`${API}updateDog/${updatedDog.id}`, updatedDog, getConfig());
//       return dispatch({ type: UPDATE_DOG, payload: data.succes });
//     } catch (error) {
//       return dispatch({ type: UPDATE_DOG_ERROR, payload: error });
//     }
//   };
// }

//DOGS SIN TOKEN

