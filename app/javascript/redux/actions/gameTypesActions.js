import axios from "axios";

import { LOAD_GAME_TYPES, GET_GAME_TYPE } from "./types";

export const loadGameTypes = () => async dispatch => {
  try {
    const res = await axios.get("/api/v1/game_types");
    dispatch({ type: LOAD_GAME_TYPES, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const getGameType = id => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/game_types/${id}`);
    dispatch({ type: GET_GAME_TYPE, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};
