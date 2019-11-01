import React from "react";

const GamePlaceInfo = ({ place }) => {
  return (
    <div>
      <h3>Place Information</h3>
      <div className="row">
        <div className="col-md">
          <p>Name: {place.name}</p>
        </div>
        <div className="col-md">
          <p>Phone: {place.phone}</p>
        </div>
        <div className="col-md">
          <p>Street: {place.street}</p>
        </div>
        <div className="col-md">
          <p>Commune: {place.commune}</p>
        </div>
      </div>
    </div>
  );
};

export default GamePlaceInfo;
