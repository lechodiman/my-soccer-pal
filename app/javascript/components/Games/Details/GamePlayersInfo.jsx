import React, { useState } from "react";
import {
  createPlayerInvitation,
  deletePlayerInvitation
} from "../../../redux/actions/playerInvitationsActions";
import { connect } from "react-redux";

const GamePlayersInfo = ({
  game,
  gameInvitations,
  gameType,
  createPlayerInvitation,
  deletePlayerInvitation
}) => {
  const [email, setEmail] = useState("");

  const onChange = e => {
    setEmail(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    createPlayerInvitation(game.id, email);
  };

  return (
    <div>
      <h3>Players</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          className="btn btn-outline-primary"
          value="Invite"
        />
      </form>

      <p className="lead">
        {gameInvitations.length}/{gameType.capacity} members
      </p>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {gameInvitations.map(invitation => (
            <tr key={invitation.id}>
              <td>{invitation.email}</td>
              <td>{invitation.status}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deletePlayerInvitation(invitation.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapDispatchToProps = {
  createPlayerInvitation,
  deletePlayerInvitation
};

export default connect(
  null,
  mapDispatchToProps
)(GamePlayersInfo);
