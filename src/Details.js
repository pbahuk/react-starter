import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

// Context
import ThemeContext from "./ThemeContext";

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
          <Carousel photos={animal.photos} />
          <h1> {animal.name} </h1>
          <h2> {animal.type} </h2>
          <h2> {animal.contact.address.city} </h2>
          <ThemeContext.Consumer>
            {themeHook => (
              <button style={{ backgroundColor: themeHook[0] }}>
                Adopt {animal.name}
              </button>
            )}
          </ThemeContext.Consumer>
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
