import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import placesReducer from "./placesReducer";
import gameTypesReducer from "./gameTypesReducer";
import playerInvitationsReducer from "./playerInvitationsReducer";

export default combineReducers({
  gamesReducer,
  placesReducer,
  gameTypesReducer,
  playerInvitationsReducer
});
