import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends React.Component {
  state = {
    loading: true,
    animal: {}
  };

  componentDidMount() {
    throw new Error("Smaple Error");
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
          <Carousel photos={animal.photos} />
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

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
