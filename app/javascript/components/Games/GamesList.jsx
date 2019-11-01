import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { loadGames, deleteGame } from "../../redux/actions/gamesActions";
import { connect } from "react-redux";

const GamesList = ({ games, loadGames, deleteGame }) => {
  useEffect(() => {
    loadGames();
  }, [loadGames]);

  return (
    <div>
      <h1>GamesList</h1>
      <Link to="/games/new" className="btn btn-primary">
        New Game
      </Link>
      <ul>
        {games.map(game => (
          <li key={game.id}>
            <Link to={`/games/details/${game.id}`}>{game.name}</Link>
            <button
              className="btn btn-danger"
              onClick={() => deleteGame(game.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  games: state.gamesReducer.games
});

const mapDispatchToProps = {
  loadGames,
  deleteGame
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamesList);
