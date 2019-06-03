import React, { lazy } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

// Portals. Changing Modals to lazily loaded.
import Modal from "./Modal";
import { connect } from "react-redux";

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
    console.log("Coming in");

    let component = null;
    if (this.state.loading) {
      component = <div> Loading ...........</div>;
    } else {
      component = (
        <div className="details">
          <Carousel photos={animal.photos} />
          <h1> {animal.name} </h1>
          <h2> {animal.type} </h2>
          <h2> {animal.contact.address.city} </h2>
          <button
            onClick={this.toggleModal}
            style={{ backgroundColor: this.props.theme }}
          >
            Adopt {animal.name}
          </button>
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

const mapStateToProps = ({ theme }) => ({ theme });

const WrappedDetails = connect(mapStateToProps)(Details);

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <WrappedDetails {...props} />
    </ErrorBoundary>
  );
}
