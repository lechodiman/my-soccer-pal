import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { deleteGame } from "../../redux/actions/gamesActions";
import { connect } from "react-redux";

const GameListItem = ({ game, deleteGame }) => {
  const [gameType, setGameType] = useState(null);

  useEffect(() => {
    const getGameType = async id => {
      try {
        const res = await axios.get(`/api/v1/game_types/${id}`);
        setGameType(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getGameType(game.game_type_id);
  }, [game]);

  return (
    <>
      <td>
        {moment(game.date).format("MMM Do YY")},{" "}
        {moment(game.time).format("h:mm")}
      </td>
      <td>{game.name}</td>
      <td>{gameType ? gameType.name : "Loading"}</td>
      <td>
        <Link
          className="btn btn-outline-secondary mx-1"
          to={`/games/details/${game.id}`}
        >
          View
        </Link>
        <button
          className="btn btn-outline-danger"
          onClick={() => deleteGame(game.id)}
        >
          Delete
        </button>
      </td>
    </>
  );
};

const mapDispatchToProps = {
  deleteGame
};

export default connect(
  null,
  mapDispatchToProps
)(GameListItem);
