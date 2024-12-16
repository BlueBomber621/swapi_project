import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { GetVehicleById } from "../API/VehiclesAPI";

import { Card, Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";

import { sentenceCase } from "change-case";

const VehicleViewer = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    GetVehicleById(id).then((res) => {
      setVehicle(res.data.result);
    });
  }, [id]);
  return (
    <>
      {vehicle ? (
        <Container fluid className="my-4">
          <Row>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title className="display-5 mb-3">
                    {vehicle.properties.name}
                  </Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Model:</strong> {vehicle.properties.model}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Class:</strong>{" "}
                        {sentenceCase(vehicle.properties.vehicle_class)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Manufacturer:</strong>{" "}
                        {vehicle.properties.manufacturer}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Cost:</strong>{" "}
                        {vehicle.properties.cost_in_credits} Credits
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Length:</strong> {vehicle.properties.length}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Crew Size:</strong>{" "}
                        {sentenceCase(vehicle.properties.crew)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Passengers:</strong>{" "}
                        {sentenceCase(vehicle.properties.passengers)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Max Atmosphering Speed:</strong>{" "}
                        {vehicle.properties.max_atmosphering_speed}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Cargo Capacity:</strong>{" "}
                        {vehicle.properties.cargo_capacity}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Consumables:</strong>{" "}
                        {sentenceCase(vehicle.properties.consumables)}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Description:</strong> {vehicle.description}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Spinner animation="grow"></Spinner>
        </Container>
      )}
    </>
  );
};
export default VehicleViewer;
