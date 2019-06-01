import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps(props) {
    let photos = ["http://placecorgi.com/600/600"];
    if (props.photos.length) {
      photos = props.photos.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick = e => {
    this.setState({
      active: parseInt(e.target.dataset.index, 10)
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              alt="smaller-animal"
              key={index}
              data-index={index}
              className={index === active ? "active" : ""}
              src={photo}
              onClick={this.handleIndexClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
