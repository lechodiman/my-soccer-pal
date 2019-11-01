import React from "react";

const GamePlayersInfo = ({ gameInvitations, gameType }) => {
  return (
    <div>
      <h3>Players</h3>
      <p className="lead">
        {gameInvitations.length}/{gameType.capacity} members
      </p>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {gameInvitations.map(invitation => (
            <tr key={invitation.id}>
              <td>{invitation.email}</td>
              <td>{invitation.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GamePlayersInfo;
