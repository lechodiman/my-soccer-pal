import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { loadGames, deleteGame } from "../../redux/actions/gamesActions";
import { connect } from "react-redux";
import GamesListItem from "./GameListItem";

const GamesList = ({ games, loadGames, deleteGame }) => {
  useEffect(() => {
    loadGames();
  }, [loadGames]);

  return (
    <div>
      <h1 className="display-4">GamesList</h1>
      <Link to="/games/new" className="btn btn-lg custom-button">
        New Game
      </Link>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Name</th>
            <th scope="col">Game Type</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {games.map(game => (
            <tr key={game.id}>
              <GamesListItem game={game}></GamesListItem>
            </tr>
          ))}
        </tbody>
      </table>
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
