import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" className="shadow-sm py-3">
      <Container className="top-nav">
        <Container className="brand-hold">
          <Navbar.Brand href="/" className="fw-bold text-uppercase">
            SWAPI
          </Navbar.Brand>
        </Container>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/Characters" className="mx-2">
              Characters
            </Nav.Link>
            <Nav.Link href="/Planets" className="mx-2">
              Planets
            </Nav.Link>
            <Nav.Link href="/Starships" className="mx-2">
              Starships
            </Nav.Link>
            <Nav.Link href="/Vehicles" className="mx-2">
              Vehicles
            </Nav.Link>
            <Nav.Link href="/Species" className="mx-2">
              Species
            </Nav.Link>
            <Nav.Link href="/Films" className="mx-2">
              Films
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
