import React, { useState } from "react";

import VehicleComponent from "../Components/VehicleComponent";

import { Container, Form, FormControl } from "react-bootstrap";

const Vehicles = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Container>
      <h2 className="text-center mb-4">Star Wars Vehicles</h2>
      <Form className="d-flex mb-4">
        <FormControl
          type="search"
          placeholder="Search Vehicles"
          className="me-2"
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        ></FormControl>
      </Form>
      <VehicleComponent searchQuery={searchQuery} />
    </Container>
  );
};

export default Vehicles;
