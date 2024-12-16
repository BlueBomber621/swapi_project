import React, { useState } from "react";

import FilmComponent from "../Components/FilmComponent";

import { Container, Form, FormControl } from "react-bootstrap";

const Films = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Container>
      <h2 className="text-center mb-4">Star Wars Films</h2>
      <Form className="d-flex mb-4">
        <FormControl
          type="search"
          placeholder="Search Films"
          className="me-2"
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        ></FormControl>
      </Form>
      <FilmComponent searchQuery={searchQuery} />
    </Container>
  );
};

export default Films;
