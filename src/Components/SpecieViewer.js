import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { GetSpecieById } from "../API/SpeciesAPI";

import { Card, Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";

import { sentenceCase } from "change-case";

const SpecieViewer = () => {
  const { id } = useParams();
  const [specie, setSpecie] = useState(null);

  useEffect(() => {
    GetSpecieById(id).then((res) => {
      setSpecie(res.data.result);
    });
  }, [id]);
  return (
    <>
      {specie ? (
        <Container fluid className="my-4">
          <Row>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title className="display-5 mb-3">
                    {specie.properties.name}
                  </Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Classification:</strong>{" "}
                        {sentenceCase(specie.properties.classification)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Designation:</strong>{" "}
                        {sentenceCase(specie.properties.designation)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Avg Height:</strong>{" "}
                        {sentenceCase(specie.properties.average_height)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Avg Lifespan:</strong>{" "}
                        {sentenceCase(specie.properties.average_lifespan)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Hair Colors:</strong>{" "}
                        {specie.properties.hair_colors}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Skin Colors:</strong>{" "}
                        {specie.properties.skin_colors}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Eye Colors:</strong>{" "}
                        {specie.properties.eye_colors}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Homeworld:</strong>{" "}
                        {specie.properties.homeworld}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Language:</strong>{" "}
                        {sentenceCase(specie.properties.language)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Specie Characters:</strong>{" "}
                        {specie.properties.people}
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
                        <strong>Description:</strong> {specie.description}
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
export default SpecieViewer;
