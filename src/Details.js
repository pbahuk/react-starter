import React from "react";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  state = {
    loading: true,
    animal: {}
  };

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        loading: false,
        animal
      });
    });
  }

  render() {
    const { animal = {} } = this.state;

    let component = null;
    if (this.state.loading) {
      component = <div> Loading ...</div>;
    } else {
      component = (
        <div className="details">
          <h1> {animal.name} </h1>
          <h2> {animal.type} </h2>
          <h2> {animal.contact.address.city} </h2>
          <button> {`Adopt ${animal.name}`} </button>
          <p> {animal.description} </p>
        </div>
      );
    }
    return component;
  }
}

export default Details;
