import axios from "axios";

import { LOAD_GAMES, GET_GAME, DELETE_GAME } from "./types";

export const loadGames = () => async dispatch => {
  try {
    const res = await axios.get("/api/v1/games");
    dispatch({ type: LOAD_GAMES, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const getGame = id => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/games/${id}`);
    dispatch({ type: GET_GAME, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const deleteGame = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/v1/games/${id}`);
    dispatch({ type: DELETE_GAME, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};
