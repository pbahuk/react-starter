import React from "react";
import { Link } from "@reach/router";

export const Pet = props => {
  const { name, gender, description, photos = [], id } = props.pet;
  let hero = "http://placecorgi/300/300";
  if (photos.length) {
    hero = photos[0].small;
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {gender}: {description}
        </h2>
      </div>
    </Link>
  );
};
