import { LOAD_GAME_TYPES, GET_GAME_TYPE } from "../actions/types";

const initialState = {
  gameTypes: [],
  gameType: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_GAME_TYPES:
      return { ...state, gameTypes: payload };
    case GET_GAME_TYPE:
      return { ...state, gameType: payload };
    default:
      return state;
  }
};
