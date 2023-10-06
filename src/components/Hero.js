import React from "react";
import { Col, Image, Row } from "react-bootstrap";

function Hero() {
  return (
    <div className="bg-secondary shadow-sm p-5 my-5">
      <Row>
        <Col sm="12" lg className="align-self-center">
          <h1 className="my-5">Find Best Restaurant in Your Locality</h1>
          <p className="fs-4">
            <span className="h5">
              <i className="fa-solid fa-burger"></i> RestoHunt
            </span>{" "}
            is your ultimate companion for finding the perfect restaurant.
            Whether you're looking for a cozy cafe, a family-friendly eatery, or
            a romantic fine dining experience,{" "}
            <span className="h5">
              <i className="fa-solid fa-burger"></i> RestoHunt
            </span>{" "}
            has the features and resources to cater to your preferences.
          </p>
        </Col>
        <Col sm="12" lg>
          <Image src="/hero.svg" />
        </Col>
      </Row>
    </div>
  );
}

export default Hero;
