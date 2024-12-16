import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { GetStarshipById } from "../API/StarshipsAPI";

import { Card, Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";

import { sentenceCase } from "change-case";

const StarshipViewer = () => {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    GetStarshipById(id).then((res) => {
      setStarship(res.data.result);
    });
  }, [id]);
  return (
    <>
      {starship ? (
        <Container fluid className="my-4">
          <Row>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title className="display-5 mb-3">
                    {starship.properties.name}
                  </Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Model:</strong> {starship.properties.model}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Class:</strong>{" "}
                        {sentenceCase(starship.properties.starship_class)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Manufacturer:</strong>{" "}
                        {starship.properties.manufacturer}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Cost:</strong>{" "}
                        {starship.properties.cost_in_credits} Credits
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Length:</strong> {starship.properties.length}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Crew Size:</strong>{" "}
                        {sentenceCase(starship.properties.crew)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Passengers:</strong>{" "}
                        {sentenceCase(starship.properties.passengers)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Max Atmosphering Speed:</strong>{" "}
                        {starship.properties.max_atmosphering_speed}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Hyperdrive Rating:</strong>{" "}
                        {starship.properties.hyperdrive_rating}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>MGLT:</strong> {starship.properties.MGLT}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Cargo Capacity:</strong>{" "}
                        {sentenceCase(starship.properties.cargo_capacity)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Consumables:</strong>{" "}
                        {sentenceCase(starship.properties.consumables)}
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
                        <strong>Description:</strong> {starship.description}
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
export default StarshipViewer;
