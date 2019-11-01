import axios from "axios";

import { LOAD_PLACES, GET_PLACE } from "./types";

export const loadPlaces = () => async dispatch => {
  try {
    const res = await axios.get("/api/v1/places");
    dispatch({ type: LOAD_PLACES, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const getPlace = id => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/places/${id}`);
    dispatch({ type: GET_PLACE, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};
