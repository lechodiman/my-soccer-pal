import { LOAD_GAMES, GET_GAME, DELETE_GAME } from "../actions/types";

const initialState = {
  games: [],
  game: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_GAMES:
      return { ...state, games: paylaod };
    case GET_GAME:
      return { ...state, game: payload };
    case DELETE_GAME:
      return { ...state, games: state.games.filter(g => g.id !== payload) };
    default:
      return state;
  }
};
