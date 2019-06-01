import React from "react";
import { Pet } from "./Pet";

const Results = props => {
  const { pets } = props;
  return (
    <div className="search">
      {!pets.length ? (
        <h1> No pets found ! </h1>
      ) : (
        <div>
          {pets.map((pet, key) => (
            <Pet key={key} pet={pet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
