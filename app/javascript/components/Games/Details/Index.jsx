import React from "react";
import GameInfo from "./GameInfo";
import GamePlaceInfo from "./GamePlaceInfo";
import GamePlayersInfo from "./GamePlayersInfo";

const GameDetails = () => {
  return (
    <div>
      GameDetails
      <GameInfo></GameInfo>
      <GamePlaceInfo></GamePlaceInfo>
      <GamePlayersInfo></GamePlayersInfo>
    </div>
  );
};

export default GameDetails;
