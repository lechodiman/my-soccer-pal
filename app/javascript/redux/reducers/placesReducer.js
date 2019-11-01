import { LOAD_PLACES, GET_PLACE } from "../actions/types";

const initialState = {
  places: [],
  place: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PLACES:
      return { ...state, places: payload };
    case GET_PLACE:
      return { ...state, place: payload };
    default:
      return state;
  }
};
