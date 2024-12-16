import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { GetPlanetById } from "../API/PlanetsAPI";

import { Card, Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";

import { sentenceCase } from "change-case";

const PlanetViewer = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    GetPlanetById(id).then((res) => {
      setPlanet(res.data.result);
    });
  }, [id]);
  return (
    <>
      {planet ? (
        <Container fluid className="my-4">
          <Row>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title className="display-5 mb-3">
                    {planet.properties.name}
                  </Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Diameter:</strong>{" "}
                        {sentenceCase(planet.properties.diameter)} km
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Rotation Period:</strong>{" "}
                        {sentenceCase(planet.properties.rotation_period)} hr
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Orbit:</strong>{" "}
                        {sentenceCase(planet.properties.orbital_period)} days
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Gravity:</strong> {planet.properties.gravity}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Population:</strong>{" "}
                        {sentenceCase(planet.properties.population)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Climate:</strong>{" "}
                        {sentenceCase(planet.properties.climate)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Terrain:</strong> {planet.properties.terrain}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Surface Water:</strong>{" "}
                        {sentenceCase(planet.properties.surface_water)}
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
                        <strong>Description:</strong> {planet.description}
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
export default PlanetViewer;
