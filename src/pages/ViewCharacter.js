import React from "react";

import ChraracterViewer from "../Components/CharacterViewer";

import { Container } from "react-bootstrap";

const Characters = () => {
  return (
    <Container>
      <h2 className="text-center mb-4">Star Wars Characters</h2>
      <ChraracterViewer />
    </Container>
  );
};
export default Characters;
