import React from "react";

import VehicleViewer from "../Components/VehicleViewer";

import { Container } from "react-bootstrap";

const Vehicles = () => {
  return (
    <Container>
      <h2 className="text-center mb-4">Star Wars Vehicles</h2>
      <VehicleViewer />
    </Container>
  );
};
export default Vehicles;
