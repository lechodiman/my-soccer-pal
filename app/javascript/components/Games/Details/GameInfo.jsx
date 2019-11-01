import React from "react";

const GameInfo = ({ game, gameType }) => {
  return (
    <div>
      <h1 className="display-6">Game Information</h1>
      {game.date}
      {game.time}

      {gameType.name}
      {gameType.capacity}
    </div>
  );
};

export default GameInfo;
