import React, { useEffect } from "react";
import GameInfo from "./GameInfo";
import GamePlaceInfo from "./GamePlaceInfo";
import GamePlayersInfo from "./GamePlayersInfo";
import { connect } from "react-redux";
import { getGame } from "../../../redux/actions/gamesActions";
import { getGameType } from "../../../redux/actions/gameTypesActions";
import { getPlace } from "../../../redux/actions/placesActions";
import { loadPlayerInvitations } from "../../../redux/actions/playerInvitationsActions";
import { Link } from "react-router-dom";

const GameDetails = ({
  game,
  gameType,
  place,
  gameInvitations,
  getGame,
  getGameType,
  getPlace,
  loadGameInvitations,
  match
}) => {
  useEffect(() => {
    getGame(match.params.id);
  }, [getGame, match.params.id]);

  useEffect(() => {
    if (game) {
      getGameType(game.game_type_id);
    }
  }, [getGameType, game]);

  useEffect(() => {
    if (game) {
      getPlace(game.place_id);
    }
  }, [getPlace, game]);

  useEffect(() => {
    if (game) {
      loadGameInvitations(game.id);
    }
  }, [loadGameInvitations, game]);

  return game && gameType && place ? (
    <div>
      <h1 className="display-4">{game.name}</h1>
      <Link to="/games" className="btn btn-outline-secondary">
        Back
      </Link>
      <GameInfo game={game} gameType={gameType}></GameInfo>
      <GamePlaceInfo place={place}></GamePlaceInfo>
      <GamePlayersInfo
        gameInvitations={gameInvitations}
        gameType={gameType}
        game={game}
      ></GamePlayersInfo>
    </div>
  ) : (
    "Loading"
  );
};

const mapStateToProps = state => ({
  game: state.gamesReducer.game,
  gameType: state.gameTypesReducer.gameType,
  place: state.placesReducer.place,
  gameInvitations: state.playerInvitationsReducer.gameInvitations
});

const mapDispatchToProps = {
  getGame,
  getGameType,
  getPlace,
  loadGameInvitations: loadPlayerInvitations
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameDetails);
