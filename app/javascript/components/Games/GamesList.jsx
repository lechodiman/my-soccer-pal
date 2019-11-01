import React from "react";
import { Link } from "react-router-dom";

const GamesList = () => {
  return (
    <div>
      GamesList
      <Link to="/games/details/1">First Game</Link>
      <Link to="/games/new">New Game</Link>
    </div>
  );
};

export default GamesList;
