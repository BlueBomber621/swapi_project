import React, { useState } from "react";

import SpecieComponent from "../Components/SpecieComponent";

import { Container, Form, FormControl } from "react-bootstrap";

const Species = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Container>
      <h2 className="text-center mb-4">Star Wars Species</h2>
      <Form className="d-flex mb-4">
        <FormControl
          type="search"
          placeholder="Search Species"
          className="me-2"
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        ></FormControl>
      </Form>
      <SpecieComponent searchQuery={searchQuery} />
    </Container>
  );
};

export default Species;
