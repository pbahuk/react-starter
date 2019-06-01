import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";
const data = [
  {
    name: "Luna",
    animal: "Dog",
    breed: "Havanese"
  },
  {
    name: "Pepper",
    animal: "Bird",
    breed: "Cockteil"
  },
  {
    name: "Doink",
    animal: "Cat",
    breed: "Mixed"
  }
];

const App = () => {
  return (
    <div>
      <h1> Adopt Me </h1>
      {data.map((pet, key) => (
        <Pet key={key} name={pet.name} animal={pet.animal} breed={pet.breed} />
      ))}
    </div>
  );
};

render(<App />, document.getElementById("root"));
