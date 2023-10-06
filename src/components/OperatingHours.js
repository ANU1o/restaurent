import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";

const OperatingHours = ({ opData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="secondary"
        size="lg"
        className="w-100 fs-4"
        onClick={handleShow}
      >
        <i className="fa-solid fa-door-open"></i> Operating Hours
      </Button>

      <Modal
        data-bs-theme="dark"
        size="lg"
        onHide={handleClose}
        show={show}
        centered
      >
        <Modal.Header className="bg-primary border-primary" closeButton>
          <Modal.Title className="text-white">
            <i className="fa-solid fa-door-open"></i> Operating Hours
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-primary d-flex flex-column justify-content-center">
          <div className="mx-5">
            <Row>
              <Col lg="4" className="align-self-center">
                <h4 className="text-white fw-bold">Monday</h4>
              </Col>
              <Col className="align-self-center">
                <p className="text-white text-lg-end text-sm-start">
                  {opData.Monday}
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="4" className="align-self-center">
                <h4 className="text-white fw-bold">Tuesday</h4>
              </Col>
              <Col className="align-self-center">
                <p className="text-white text-lg-end text-sm-start">
                  {opData.Tuesday}
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="4" className="align-self-center">
                <h4 className="text-white fw-bold">Wednesday</h4>
              </Col>
              <Col className="align-self-center">
                <p className="text-white text-lg-end text-sm-start">
                  {opData.Wednesday}
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="4" className="align-self-center">
                <h4 className="text-white fw-bold">Thursday</h4>
              </Col>
              <Col className="align-self-center">
                <p className="text-white text-lg-end text-sm-start">
                  {opData.Thursday}
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="4" className="align-self-center">
                <h4 className="text-white fw-bold">Friday</h4>
              </Col>
              <Col className="align-self-center">
                <p className="text-white text-lg-end text-sm-start">
                  {opData.Friday}
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="4" className="align-self-center">
                <h4 className="text-white fw-bold">Saturday</h4>
              </Col>
              <Col className="align-self-center">
                <p className="text-white text-lg-end text-sm-start">
                  {opData.Saturday}
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="4" className="align-self-center">
                <h4 className="text-white fw-bold">Sunday</h4>
              </Col>
              <Col className="align-self-center">
                <p className="text-white text-lg-end text-sm-start">
                  {opData.Sunday}
                </p>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OperatingHours;
