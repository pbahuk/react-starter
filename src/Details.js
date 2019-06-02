import React, { lazy } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

// Context
import ThemeContext from "./ThemeContext";

// Portals. Changing Modals to lazily loaded.
// import Modal from "./Modal";
const Modal = lazy(() => import("./Modal"));

class Details extends React.Component {
  state = {
    loading: true,
    animal: {},
    showModal: false
  };

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        loading: false,
        animal
      });
    });
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

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
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: themeHook[0] }}
              >
                Adopt {animal.name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p> {animal.description} </p>
          {this.state.showModal ? (
            <Modal>
              <h1> Would you like to adopt {animal.name} </h1>
              <div className="buttons">
                <button> Yes </button>
                <button onClick={this.toggleModal}> No</button>
              </div>
            </Modal>
          ) : null}
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
