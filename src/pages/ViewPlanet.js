import React from "react";

import PlanetViewer from "../Components/PlanetViewer";

import { Container } from "react-bootstrap";

const Planets = () => {
  return (
    <Container>
      <h2 className="text-center mb-4">Star Wars Planets</h2>
      <PlanetViewer />
    </Container>
  );
};
export default Planets;
