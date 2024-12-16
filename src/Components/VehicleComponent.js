import React, { useEffect, useState } from "react";

import { GetVehicles } from "../API/VehiclesAPI";

import { Card, Stack, Container, Spinner } from "react-bootstrap";

import { Link } from "react-router-dom";

const VehicleComponent = ({ searchQuery }) => {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  useEffect(() => {
    GetVehicles().then((response) => {
      const vehicles = response.data.results;
      setVehicles(vehicles);
      setFilteredVehicles(vehicles);
    });
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = vehicles.filter((vehicle) =>
        vehicle.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredVehicles(filtered);
    } else {
      setFilteredVehicles(vehicles);
    }
  }, [searchQuery, vehicles]);

  return (
    <Container className="my-4">
      <Stack gap={3}>
        {filteredVehicles ? (
          filteredVehicles.map((vehicle, index) => (
            <Card key={index} className="shadow-sm">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <Card.Title className="mb-0">{vehicle.name}</Card.Title>
                  <Card.Text className="text-muted">
                    Vehicle ID: {vehicle.uid}
                  </Card.Text>
                </div>
                <Link
                  to={`/ViewVehicle/${vehicle.uid}`}
                  className="btn btn-outline-primary"
                >
                  View Details
                </Link>
              </Card.Body>
            </Card>
          ))
        ) : (
          <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <Spinner animation="grow" />
          </Container>
        )}
      </Stack>
    </Container>
  );
};

export default VehicleComponent;
