import {
  LOAD_PLAYER_INVITATIONS,
  ADD_PLAYER_INVITATION
} from "../actions/types";

const initialState = {
  gameInvitations: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PLAYER_INVITATIONS:
      return { ...state, gameInvitations: payload };
    case ADD_PLAYER_INVITATION:
      return {
        ...state,
        gameInvitations: [...state.gameInvitations, payload]
      };
    default:
      return state;
  }
};
