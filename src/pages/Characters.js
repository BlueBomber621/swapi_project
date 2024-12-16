import React, { useState } from "react";

import CharacterComponent from "../Components/CharacterComponent";

import { Container, Form, FormControl } from "react-bootstrap";

const Characters = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Container>
      <h2 className="text-center mb-4">Star Wars Characters</h2>
      <Form className="d-flex mb-4">
        <FormControl
          type="search"
          placeholder="Search Characters"
          className="me-2"
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        ></FormControl>
      </Form>
      <CharacterComponent searchQuery={searchQuery} />
    </Container>
  );
};

export default Characters;
