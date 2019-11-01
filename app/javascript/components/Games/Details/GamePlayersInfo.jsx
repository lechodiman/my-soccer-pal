import React from "react";

const GamePlayersInfo = ({ gameInvitations }) => {
  return (
    <div>
      <h1 className="display-6">Players</h1>
      <ul>
        {gameInvitations.map(invitation => (
          <li key={invitation.id}>
            {invitation.email}
            {invitation.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GamePlayersInfo;
