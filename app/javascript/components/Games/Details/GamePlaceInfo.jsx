import React from "react";

const GamePlaceInfo = ({ place }) => {
  return (
    <div>
      <h1 className="display-6">Place Information</h1>
      {place.name}
      {place.phone}
      {place.street}
      {place.commune}
    </div>
  );
};

export default GamePlaceInfo;
