import React from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar className="bg-primary sticky-top" data-bs-theme="dark">
        <Container>
          <NavbarBrand href="/" className="mx-auto logo">
            <i className="fa-solid fa-burger"></i> RestoHunt
          </NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
