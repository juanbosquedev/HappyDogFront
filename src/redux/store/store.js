import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from "redux-thunk";
import reducer from "../reducer/reducer"

const store = createStore(
  
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);


export default store;