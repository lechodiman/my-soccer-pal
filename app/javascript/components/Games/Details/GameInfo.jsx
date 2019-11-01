import React from "react";
import moment from "moment";

const GameInfo = ({ game, gameType }) => {
  return (
    <div>
      <h3>Game Information</h3>
      <div className="row">
        <div className="col-sm">
          <p>Date: {moment(game.date).format("MMM Do YY")}</p>
        </div>
        <div className="col-sm">
          <p>Time: {moment(game.time).format("h:mm")}</p>
        </div>
        <div className="col-md">
          <p>Game Type: {gameType.name}</p>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
