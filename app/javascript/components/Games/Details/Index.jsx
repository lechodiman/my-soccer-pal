import React from "react";
import GameInfo from "./GameInfo";
import GamePlaceInfo from "./GamePlaceInfo";
import GamePlayersInfo from "./GamePlayersInfo";
import { connect } from "react-redux";
import { getGame } from "../../../redux/actions/gamesActions";
import { getGameType } from "../../../redux/actions/gameTypesActions";
import { getPlace } from "../../../redux/actions/placesActions";
import { getGameInvitations } from "../../../redux/actions/gameInvitationsActions";

const GameDetails = ({
  getGame,
  game,
  gameType,
  place,
  gameInvitations,
  match
}) => {
  useEffect(() => {
    getGame(match.params.id);
  }, [getGame, match.params.id]);

  useEffect(() => {
    getGameType(game.game_type_id);
  }, [getGameType, game]);

  useEffect(() => {
    getPlace(game.place_id);
  }, [getPlace, game]);

  useEffect(() => {
    getGameInvitations(game.id);
  }, [getGameInvitations, game]);

  return (
    <div>
      <h1 className="display-4">{game.name}</h1>
      <GameInfo game={game} gameType={gameType}></GameInfo>
      <GamePlaceInfo place={place}></GamePlaceInfo>
      <GamePlayersInfo gameInvitations={gameInvitations}></GamePlayersInfo>
    </div>
  );
};

const mapStateToProps = state => ({
  game: state.gamesReducer.game,
  gameType: state.gameTypesReducer.gameType,
  place: state.placesReducer.place,
  gameInvitations: state.gameInvitationsReducer.gameInvitation
});

const mapDispatchToProps = {
  getGame,
  getGameType,
  getPlace,
  getGameInvitations
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameDetails);
