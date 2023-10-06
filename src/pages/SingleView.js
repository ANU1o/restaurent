import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordion, Button, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import OperatingHours from "../components/OperatingHours";
import Reviews from "../components/Reviews";

function SingleView() {
  const params = useParams();
  const { id } = params;
  const [restaurant, setRestaurant] = useState([]);

  const getAllRestaurent = async () => {
    const result = await axios.get("/restaurants.json");
    setRestaurant(result.data.restaurants);
  };

  useEffect(() => {
    getAllRestaurent();
  }, []);

  const singleRest = restaurant.find((i) => i.id == id);

  return (
    <div className="bg-primary">
      <Container>
        {singleRest ? (
          <Row className="gap-0">
            <Col sm="12" lg className="p-0">
              <Image src={singleRest.photograph} className="img-prev" />
            </Col>
            <Col sm="12" lg className="bg-primary p-5 ">
              <h1 className="text-white">{singleRest.name}</h1>
              <hr />
              <h5 className="text-white">
                <i className="fa-solid fa-location-pin"></i>{" "}
                {singleRest.neighborhood}, {singleRest.address}
              </h5>
              <p className="text-white">
                <i className="fa-solid fa-utensils me-1"></i>{" "}
                {singleRest.cuisine_type}
              </p>
              <hr />
              <OperatingHours opData={singleRest.operating_hours} />
              <hr />
              <Reviews reviewData={singleRest.reviews} />
            </Col>
          </Row>
        ) : (
          <Row className="gap-0">
            <Col sm="12" lg className="placeholder-glow p-0">
              <div
                className="placeholder col-12 h-100"
                style={{ minHeight: "55rem" }}
              />
            </Col>
            <Col sm="12" lg className="bg-primary p-5 ">
              <h1 className="text-white placeholder-glow">
                <span className="placeholder col-6"></span>
              </h1>
              <hr />
              <h5 className="text-white placeholder-glow">
                <i className="fa-solid fa-location-pin"></i>{" "}
                <span className="placeholder col-10"></span>
              </h5>
              <p className="text-white placeholder-glow">
                <i className="fa-solid fa-utensils"></i>{" "}
                <span className="placeholder col-2"></span>
              </p>
              <hr />
              <div className="placeholder-glow">
                <Button
                  variant="secondary"
                  className="placeholder text-secondary col-12"
                ></Button>
              </div>

              <hr />
              <Accordion flush data-bs-theme="dark">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h3 className="text-white">
                      <i className="fa-solid fa-comments"></i> Reviews
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h2 className="text-white placeholder-glow">
                      <span className="placeholder col-2"></span>
                    </h2>
                    <h5 className="text-white placeholder-glow">
                      <span className="placeholder col-5"></span>
                    </h5>
                    <h5 className="text-white placeholder-glow">
                      <i className="fa-solid fa-star"></i>{" "}
                      <span className="placeholder col-1"></span>
                    </h5>
                    <p className="text-light placeholder-glow">
                      <span className="placeholder col-12"></span>
                      <span className="placeholder col-12"></span>
                      <span className="placeholder col-12"></span>
                      <span className="placeholder col-8"></span>
                    </p>
                    <hr />
                    <h2 className="text-white placeholder-glow">
                      <span className="placeholder col-2"></span>
                    </h2>
                    <h5 className="text-white placeholder-glow">
                      <span className="placeholder col-5"></span>
                    </h5>
                    <h5 className="text-white placeholder-glow">
                      <i className="fa-solid fa-star"></i>{" "}
                      <span className="placeholder col-1"></span>
                    </h5>
                    <p className="text-light placeholder-glow">
                      <span className="placeholder col-12"></span>
                      <span className="placeholder col-12"></span>
                      <span className="placeholder col-12"></span>
                      <span className="placeholder col-8"></span>
                    </p>
                    <hr />
                    <h2 className="text-white placeholder-glow">
                      <span className="placeholder col-2"></span>
                    </h2>
                    <h5 className="text-white placeholder-glow">
                      <span className="placeholder col-5"></span>
                    </h5>
                    <h5 className="text-white placeholder-glow">
                      <i className="fa-solid fa-star"></i>{" "}
                      <span className="placeholder col-1"></span>
                    </h5>
                    <p className="text-light placeholder-glow">
                      <span className="placeholder col-12"></span>
                      <span className="placeholder col-12"></span>
                      <span className="placeholder col-12"></span>
                      <span className="placeholder col-8"></span>
                    </p>
                    <hr />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default SingleView;
