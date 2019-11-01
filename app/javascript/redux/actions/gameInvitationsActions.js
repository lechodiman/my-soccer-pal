import axios from "axios";

import { LOAD_GAME_INVITATIONS } from "./types";

export const loadGameInvitations = game_id => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/games/${game_id}/game_invitations`);
    dispatch({ type: LOAD_GAME_INVITATIONS, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};
