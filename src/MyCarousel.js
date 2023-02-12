import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./MyCarousel.css";

function MyCarousel(props) {
  console.log(props.city);
  return (
    <div className="MyCarousel-container">
      <Carousel className="MyCarousel-container">
        <Carousel.Item>
          <img
            style={{ minHeight: "700px !important" }}
            className="d-block w-100"
            src={`https://source.unsplash.com/1500x900/?${props.city}`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{props.country}</h3>
            <p>
              {props.desc.charAt(0).toUpperCase() + props.desc.slice(1)}.
              Suitable for travel
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://source.unsplash.com/1500x900/?${props.city} monument`}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>{props.city}</h3>
            {props.desc.charAt(0).toUpperCase() + props.desc.slice(1)}.
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MyCarousel;
