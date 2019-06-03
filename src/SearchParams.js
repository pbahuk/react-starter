import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";

// Redux
import { connect } from "react-redux";
import changeTheme from "./actions/changeTheme";
import changeLocation from "./actions/changeLocation";

const SearchParams = props => {
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animals", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  /**
   * Requesting the data for pets.
   */
  const [pets, setPets] = useState([]);
  async function requestPets() {
    const { animals } = await pet.animals({
      location: props.location,
      breed,
      type: animal
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(breed => breed.name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={props.location}
            placeholder="Location"
            onChange={e => props.changeLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          Theme
          <select
            id="theme"
            value={props.theme}
            onChange={e => props.changeTheme(e.target.value)}
            onBlur={e => props.changeTheme(e.target.value)}
          >
            {["peru", "darkblue", "mediumorchid", "chartreuse"].map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <button style={{ backgroundColor: props.theme }}> Submit </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

const mapStateToProps = ({ location, theme }) => ({
  location,
  theme
});

const mapDispatchToProps = dispatch => ({
  changeTheme: theme => dispatch(changeTheme(theme)),
  changeLocation: location => dispatch(changeLocation(location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchParams);
