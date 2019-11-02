import axios from "axios";

import {
  LOAD_PLAYER_INVITATIONS,
  ADD_PLAYER_INVITATION,
  DELETE_PLAYER_INVITATION
} from "./types";

export const loadPlayerInvitations = game_id => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/games/${game_id}/player_invitations`);
    dispatch({ type: LOAD_PLAYER_INVITATIONS, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const createPlayerInvitation = (game_id, email) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post(
      `/api/v1/games/${game_id}/player_invitations`,
      { email },
      config
    );
    dispatch({ type: ADD_PLAYER_INVITATION, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const deletePlayerInvitation = id => async dispatch => {
  try {
    await axios.delete(`/api/v1/player_invitations/${id}`);
    dispatch({ type: DELETE_PLAYER_INVITATION, payload: id });
  } catch (err) {
    console.error(err);
  }
};
