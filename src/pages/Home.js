import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [restaurant, setRestaurant] = useState([]);

  const getAllRestaurent = async () => {
    const result = await axios.get("/restaurants.json");
    setRestaurant(result.data.restaurants);
  };

  useEffect(() => {
    getAllRestaurent();
  }, []);

  return (
    <Container>
      <Hero />
      <h1 className="display-3 bg-primary text-white py-5 text-center">
        Explore
      </h1>
      <Row
        lg="5"
        md="3"
        xs="1"
        className="my-5 mx-1 gap-3 p-0 justify-content-center"
      >
        {restaurant.length > 0 ? (
          restaurant.map((i) => (
            <Col className="p-0">
              <Card
                bg="primary"
                key="Primary"
                text="white"
                className="shadow-sm h-100"
              >
                <Link to={`./Preview/${i.id}`} className="text-decoration-none">
                  <Row>
                    <Col lg="12" xs="4">
                      <Card.Img
                        src={i.photograph}
                        className="img-ar-1-1"
                      ></Card.Img>
                    </Col>
                    <Col className="ps-sm-0 ps-lg-3">
                      <Card.Body className="d-flex flex-column">
                        <h4 className="text-white card-title headhr">
                          {i.name}
                        </h4>
                        <hr className="my-3 mt-auto border-white" />
                        <h5 className="text-white mt-auto">
                          <i className="fa-solid fa-location-pin"></i>{" "}
                          {i.neighborhood}
                        </h5>
                        <Card.Text className="text-white">
                          <i className="fa-solid fa-utensils me-1"></i>{" "}
                          {i.cuisine_type}
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Link>
              </Card>
            </Col>
          ))
        ) : (
          <>
            <Col className="p-0">
              <Card
                bg="primary"
                key="Primary"
                text="white"
                className="shadow-sm h-100 "
              >
                <div className="placeholder-glow">
                  <Card.Img
                    className="placeholder col-12"
                    style={{ height: "25rem" }}
                  ></Card.Img>
                </div>
                <Card.Body className="d-flex flex-column">
                  <h4 className="card-title placeholder-glow">
                    <span className="placeholder col-5"></span>{" "}
                    <span className="placeholder col-3"></span>{" "}
                    <span className="placeholder col-6"></span>
                  </h4>
                  <hr className="mt-auto" />
                  <h5 className="placeholder-glow">
                    <i className="fa-solid fa-location-pin"></i>{" "}
                    <span className="placeholder col-5"></span>
                  </h5>
                  <Card.Text className="placeholder-glow">
                    <i className="fa-solid fa-utensils"></i>{" "}
                    <span className="placeholder col-4"></span>
                  </Card.Text>
                  <div className="placeholder-glow">
                    <Button
                      variant="secondary"
                      className="w-100 placeholder bg-light col-12"
                    ></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0">
              <Card
                bg="primary"
                key="Primary"
                text="white"
                className="shadow-sm h-100 "
              >
                <div className="placeholder-glow">
                  <Card.Img
                    className="placeholder col-12"
                    style={{ height: "25rem" }}
                  ></Card.Img>
                </div>
                <Card.Body className="d-flex flex-column">
                  <h4 className="card-title placeholder-glow">
                    <span className="placeholder col-5"></span>{" "}
                    <span className="placeholder col-3"></span>{" "}
                    <span className="placeholder col-6"></span>
                  </h4>
                  <hr className="mt-auto" />
                  <h5 className="placeholder-glow">
                    <i className="fa-solid fa-location-pin"></i>{" "}
                    <span className="placeholder col-5"></span>
                  </h5>
                  <Card.Text className="placeholder-glow">
                    <i className="fa-solid fa-utensils"></i>{" "}
                    <span className="placeholder col-4"></span>
                  </Card.Text>
                  <div className="placeholder-glow">
                    <Button
                      variant="secondary"
                      className="w-100 placeholder bg-light col-12"
                    ></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0">
              <Card
                bg="primary"
                key="Primary"
                text="white"
                className="shadow-sm h-100 "
              >
                <div className="placeholder-glow">
                  <Card.Img
                    className="placeholder col-12"
                    style={{ height: "25rem" }}
                  ></Card.Img>
                </div>
                <Card.Body className="d-flex flex-column">
                  <h4 className="card-title placeholder-glow">
                    <span className="placeholder col-5"></span>{" "}
                    <span className="placeholder col-3"></span>{" "}
                    <span className="placeholder col-6"></span>
                  </h4>
                  <hr className="mt-auto" />
                  <h5 className="placeholder-glow">
                    <i className="fa-solid fa-location-pin"></i>{" "}
                    <span className="placeholder col-5"></span>
                  </h5>
                  <Card.Text className="placeholder-glow">
                    <i className="fa-solid fa-utensils"></i>{" "}
                    <span className="placeholder col-4"></span>
                  </Card.Text>
                  <div className="placeholder-glow">
                    <Button
                      variant="secondary"
                      className="w-100 placeholder bg-light col-12"
                    ></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0">
              <Card
                bg="primary"
                key="Primary"
                text="white"
                className="shadow-sm h-100 "
              >
                <div className="placeholder-glow">
                  <Card.Img
                    className="placeholder col-12"
                    style={{ height: "25rem" }}
                  ></Card.Img>
                </div>
                <Card.Body className="d-flex flex-column">
                  <h4 className="card-title placeholder-glow">
                    <span className="placeholder col-5"></span>{" "}
                    <span className="placeholder col-3"></span>{" "}
                    <span className="placeholder col-6"></span>
                  </h4>
                  <hr className="mt-auto" />
                  <h5 className="placeholder-glow">
                    <i className="fa-solid fa-location-pin"></i>{" "}
                    <span className="placeholder col-5"></span>
                  </h5>
                  <Card.Text className="placeholder-glow">
                    <i className="fa-solid fa-utensils"></i>{" "}
                    <span className="placeholder col-4"></span>
                  </Card.Text>
                  <div className="placeholder-glow">
                    <Button
                      variant="secondary"
                      className="w-100 placeholder bg-light col-12"
                    ></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0">
              <Card
                bg="primary"
                key="Primary"
                text="white"
                className="shadow-sm h-100 "
              >
                <div className="placeholder-glow">
                  <Card.Img
                    className="placeholder col-12"
                    style={{ height: "25rem" }}
                  ></Card.Img>
                </div>
                <Card.Body className="d-flex flex-column">
                  <h4 className="card-title placeholder-glow">
                    <span className="placeholder col-5"></span>{" "}
                    <span className="placeholder col-3"></span>{" "}
                    <span className="placeholder col-6"></span>
                  </h4>
                  <hr className="mt-auto" />
                  <h5 className="placeholder-glow">
                    <i className="fa-solid fa-location-pin"></i>{" "}
                    <span className="placeholder col-5"></span>
                  </h5>
                  <Card.Text className="placeholder-glow">
                    <i className="fa-solid fa-utensils"></i>{" "}
                    <span className="placeholder col-4"></span>
                  </Card.Text>
                  <div className="placeholder-glow">
                    <Button
                      variant="secondary"
                      className="w-100 placeholder bg-light col-12"
                    ></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0">
              <Card
                bg="primary"
                key="Primary"
                text="white"
                className="shadow-sm h-100 "
              >
                <div className="placeholder-glow">
                  <Card.Img
                    className="placeholder col-12"
                    style={{ height: "25rem" }}
                  ></Card.Img>
                </div>
                <Card.Body className="d-flex flex-column">
                  <h4 className="card-title placeholder-glow">
                    <span className="placeholder col-5"></span>{" "}
                    <span className="placeholder col-3"></span>{" "}
                    <span className="placeholder col-6"></span>
                  </h4>
                  <hr className="mt-auto" />
                  <h5 className="placeholder-glow">
                    <i className="fa-solid fa-location-pin"></i>{" "}
                    <span className="placeholder col-5"></span>
                  </h5>
                  <Card.Text className="placeholder-glow">
                    <i className="fa-solid fa-utensils"></i>{" "}
                    <span className="placeholder col-4"></span>
                  </Card.Text>
                  <div className="placeholder-glow">
                    <Button
                      variant="secondary"
                      className="w-100 placeholder bg-light col-12"
                    ></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0">
              <Card
                bg="primary"
                key="Primary"
                text="white"
                className="shadow-sm h-100 "
              >
                <div className="placeholder-glow">
                  <Card.Img
                    className="placeholder col-12"
                    style={{ height: "25rem" }}
                  ></Card.Img>
                </div>
                <Card.Body className="d-flex flex-column">
                  <h4 className="card-title placeholder-glow">
                    <span className="placeholder col-5"></span>{" "}
                    <span className="placeholder col-3"></span>{" "}
                    <span className="placeholder col-6"></span>
                  </h4>
                  <hr className="mt-auto" />
                  <h5 className="placeholder-glow">
                    <i className="fa-solid fa-location-pin"></i>{" "}
                    <span className="placeholder col-5"></span>
                  </h5>
                  <Card.Text className="placeholder-glow">
                    <i className="fa-solid fa-utensils"></i>{" "}
                    <span className="placeholder col-4"></span>
                  </Card.Text>
                  <div className="placeholder-glow">
                    <Button
                      variant="secondary"
                      className="w-100 placeholder bg-light col-12"
                    ></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0">
              <Card
                bg="primary"
                key="Primary"
                text="white"
                className="shadow-sm h-100 "
              >
                <div className="placeholder-glow">
                  <Card.Img
                    className="placeholder col-12"
                    style={{ height: "25rem" }}
                  ></Card.Img>
                </div>
                <Card.Body className="d-flex flex-column">
                  <h4 className="card-title placeholder-glow">
                    <span className="placeholder col-5"></span>{" "}
                    <span className="placeholder col-3"></span>{" "}
                    <span className="placeholder col-6"></span>
                  </h4>
                  <hr className="mt-auto" />
                  <h5 className="placeholder-glow">
                    <i className="fa-solid fa-location-pin"></i>{" "}
                    <span className="placeholder col-5"></span>
                  </h5>
                  <Card.Text className="placeholder-glow">
                    <i className="fa-solid fa-utensils"></i>{" "}
                    <span className="placeholder col-4"></span>
                  </Card.Text>
                  <div className="placeholder-glow">
                    <Button
                      variant="secondary"
                      className="w-100 placeholder bg-light col-12"
                    ></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0">
              <Card
                bg="primary"
                key="Primary"
                text="white"
                className="shadow-sm h-100 "
              >
                <div className="placeholder-glow">
                  <Card.Img
                    className="placeholder col-12"
                    style={{ height: "25rem" }}
                  ></Card.Img>
                </div>
                <Card.Body className="d-flex flex-column">
                  <h4 className="card-title placeholder-glow">
                    <span className="placeholder col-5"></span>{" "}
                    <span className="placeholder col-3"></span>{" "}
                    <span className="placeholder col-6"></span>
                  </h4>
                  <hr className="mt-auto" />
                  <h5 className="placeholder-glow">
                    <i className="fa-solid fa-location-pin"></i>{" "}
                    <span className="placeholder col-5"></span>
                  </h5>
                  <Card.Text className="placeholder-glow">
                    <i className="fa-solid fa-utensils"></i>{" "}
                    <span className="placeholder col-4"></span>
                  </Card.Text>
                  <div className="placeholder-glow">
                    <Button
                      variant="secondary"
                      className="w-100 placeholder bg-light col-12"
                    ></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0">
              <Card
                bg="primary"
                key="Primary"
                text="white"
                className="shadow-sm h-100 "
              >
                <div className="placeholder-glow">
                  <Card.Img
                    className="placeholder col-12"
                    style={{ height: "25rem" }}
                  ></Card.Img>
                </div>
                <Card.Body className="d-flex flex-column">
                  <h4 className="card-title placeholder-glow">
                    <span className="placeholder col-5"></span>{" "}
                    <span className="placeholder col-3"></span>{" "}
                    <span className="placeholder col-6"></span>
                  </h4>
                  <hr className="mt-auto" />
                  <h5 className="placeholder-glow">
                    <i className="fa-solid fa-location-pin"></i>{" "}
                    <span className="placeholder col-5"></span>
                  </h5>
                  <Card.Text className="placeholder-glow">
                    <i className="fa-solid fa-utensils"></i>{" "}
                    <span className="placeholder col-4"></span>
                  </Card.Text>
                  <div className="placeholder-glow">
                    <Button
                      variant="secondary"
                      className="w-100 placeholder bg-light col-12"
                    ></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0">
              <Card
                bg="primary"
                key="Primary"
                text="white"
                className="shadow-sm h-100 "
              >
                <div className="placeholder-glow">
                  <Card.Img
                    className="placeholder col-12"
                    style={{ height: "25rem" }}
                  ></Card.Img>
                </div>
                <Card.Body className="d-flex flex-column">
                  <h4 className="card-title placeholder-glow">
                    <span className="placeholder col-5"></span>{" "}
                    <span className="placeholder col-3"></span>{" "}
                    <span className="placeholder col-6"></span>
                  </h4>
                  <hr className="mt-auto" />
                  <h5 className="placeholder-glow">
                    <i className="fa-solid fa-location-pin"></i>{" "}
                    <span className="placeholder col-5"></span>
                  </h5>
                  <Card.Text className="placeholder-glow">
                    <i className="fa-solid fa-utensils"></i>{" "}
                    <span className="placeholder col-4"></span>
                  </Card.Text>
                  <div className="placeholder-glow">
                    <Button
                      variant="secondary"
                      className="w-100 placeholder bg-light col-12"
                    ></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0">
              <Card
                bg="primary"
                key="Primary"
                text="white"
                className="shadow-sm h-100 "
              >
                <div className="placeholder-glow">
                  <Card.Img
                    className="placeholder col-12"
                    style={{ height: "25rem" }}
                  ></Card.Img>
                </div>
                <Card.Body className="d-flex flex-column">
                  <h4 className="card-title placeholder-glow">
                    <span className="placeholder col-5"></span>{" "}
                    <span className="placeholder col-3"></span>{" "}
                    <span className="placeholder col-6"></span>
                  </h4>
                  <hr className="mt-auto" />
                  <h5 className="placeholder-glow">
                    <i className="fa-solid fa-location-pin"></i>{" "}
                    <span className="placeholder col-5"></span>
                  </h5>
                  <Card.Text className="placeholder-glow">
                    <i className="fa-solid fa-utensils"></i>{" "}
                    <span className="placeholder col-4"></span>
                  </Card.Text>
                  <div className="placeholder-glow">
                    <Button
                      variant="secondary"
                      className="w-100 placeholder bg-light col-12"
                    ></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
}

export default Home;
