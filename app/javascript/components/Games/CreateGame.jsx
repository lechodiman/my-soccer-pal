import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loadGameTypes } from "../../redux/actions/gameTypesActions";
import { loadPlaces } from "../../redux/actions/placesActions";
import { createGame } from "../../redux/actions/gamesActions";
import moment from "moment";
import { Link } from "react-router-dom";

const CreateGame = ({
  gameTypes,
  places,
  createGame,
  loadGameTypes,
  loadPlaces
}) => {
  const [formData, setFormData] = useState({
    name: "",
    date: moment().format("YYYY-MM-DD"),
    time: moment().format("HH:mm"),
    place_id: 1,
    game_type_id: 1
  });

  const { name, date, time, place_id, game_type_id } = formData;

  const onChange = e => {
    const newState = {
      ...formData,
      [e.target.name]: e.target.value
    };
    setFormData(newState);
  };

  const onSubmit = e => {
    e.preventDefault();
    createGame(formData);
  };

  useEffect(() => {
    loadPlaces();
  }, [loadPlaces]);

  useEffect(() => {
    loadGameTypes();
  }, [loadGameTypes]);

  return (
    <div>
      <h1 className="display-4">Create Game</h1>
      <Link to="/games" className="btn btn-outline-secondary">
        Back
      </Link>
      <p className="lead">To create a new game, fill out the form</p>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Game Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="game_type_id">Game Type</label>
          <select
            className="form-control"
            value={game_type_id}
            onChange={onChange}
            name="game_type_id"
          >
            {gameTypes.map(gameType => (
              <option key={gameType.id} value={gameType.id}>
                {gameType.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="place_id">Place</label>
          <select
            className="form-control"
            value={place_id}
            onChange={onChange}
            name="place_id"
          >
            {places.map(place => (
              <option key={place.id} value={place.id}>
                {place.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={date}
            onChange={onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            value={time}
            onChange={onChange}
            className="form-control"
          />
        </div>
        <input
          type="submit"
          className="btn btn-lg btn-outline-primary"
          value="Create"
        />
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  gameTypes: state.gameTypesReducer.gameTypes,
  places: state.placesReducer.places
});

const mapDispatchToProps = {
  createGame,
  loadGameTypes,
  loadPlaces
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGame);
