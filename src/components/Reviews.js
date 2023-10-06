import React from "react";
import { Accordion } from "react-bootstrap";

const Reviews = ({ reviewData }) => {
  return (
    <Accordion flush data-bs-theme="dark">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h3 className="text-white">
            <i className="fa-solid fa-comments"></i> Reviews
          </h3>
        </Accordion.Header>
        <Accordion.Body>
          {reviewData.map((i) => (
            <div>
              <h2 className="text-white">{i.name}</h2>
              <h5 className="text-white">{i.date}</h5>
              <h5 className="text-white">
                <i className="fa-solid fa-star"></i> {i.rating}
              </h5>
              <p className="text-light">{i.comments}</p>
              <hr />
            </div>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Reviews;
