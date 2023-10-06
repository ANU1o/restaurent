import React from "react";

function Footer() {
  return (
    <div className=" bg-secondary shadow mt-auto">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mx-5 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="text-body-secondary text-uppercase text-decoration-none"
          >
            <i className="fa-solid fa-burger"></i> RestoHunt{" "}
            <br className="d-lg-none d-sm-inline" />
            <span className="text-body-secondary text-capitalize">
              | Made by Anoof Abdul Kadar
            </span>
          </a>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="/">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="/">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="/">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
