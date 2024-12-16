import React from "react";

import SpecieViewer from "../Components/SpecieViewer";

import { Container } from "react-bootstrap";

const Species = () => {
  return (
    <Container>
      <h2 className="text-center mb-4">Star Wars Species</h2>
      <SpecieViewer />
    </Container>
  );
};
export default Species;
