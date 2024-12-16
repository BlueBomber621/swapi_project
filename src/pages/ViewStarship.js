import React from "react";

import StarshipViewer from "../Components/StarshipViewer";

import { Container } from "react-bootstrap";

const Starships = () => {
  return (
    <Container>
      <h2 className="text-center mb-4">Star Wars Starships</h2>
      <StarshipViewer />
    </Container>
  );
};
export default Starships;
