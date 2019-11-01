import { LOAD_GAME_INVITATIONS } from "../actions/types";

const initialState = {
  gameInvitations: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_GAME_INVITATIONS:
      return { ...state, gameInvitations: payload };
    default:
      return state;
  }
};
