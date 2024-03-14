// reducer.js
import { LOGIN, LOGOUT, REGISTER } from "../actions/actionCreator";

const initialState = {
  userLogged: {
    id: "",
    name: "",
    role: "",
    logged: "",
  },
  registerState:"",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        registerState: action.payload,
      };
    case LOGIN:
      return {
        ...state,

        userLogged: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        userLogged: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
