import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Football Games</h1>
        <p className="lead">A curated list of football games</p>
        <hr className="my-4" />
        <Link to="/games" className="btn btn-lg custom-button" role="button">
          View Games
        </Link>
      </div>
    </div>
  </div>
);
