import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import placesReducer from "./placesReducer";
import gameTypesReducer from "./gameTypesReducer";

export default combineReducers({
  gamesReducer,
  placesReducer,
  gameTypesReducer
});
