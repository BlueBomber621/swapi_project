import React from "react";

import FilmViewer from "../Components/FilmViewer";

import { Container } from "react-bootstrap";

const Films = () => {
  return (
    <Container>
      <h2 className="text-center mb-4">Star Wars Films</h2>
      <FilmViewer />
    </Container>
  );
};
export default Films;
