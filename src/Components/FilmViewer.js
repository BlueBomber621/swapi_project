import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { GetFilmById } from "../API/FilmsAPI";

import { Card, Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";

const FilmViewer = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    GetFilmById(id).then((res) => {
      setFilm(res.data.result);
    });
  }, [id]);

  function SpaceArray(entryArray) {
    let entry = "";

    entryArray.forEach((item) => {
      if (item) {
        entry += item + " ";
      }
    });

    return entry;
  }

  return (
    <>
      {film ? (
        <Container fluid className="my-4">
          <Row>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title className="display-5 mb-3">
                    {film.properties.title}
                  </Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Producer:</strong> {film.properties.producer}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Director:</strong> {film.properties.director}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Episode:</strong> {film.properties.episode_id}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Released:</strong>{" "}
                        {film.properties.release_date}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Film Characters:</strong>{" "}
                        {SpaceArray(film.properties.characters)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Film Planets:</strong>{" "}
                        {SpaceArray(film.properties.planets)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Film Starships:</strong>{" "}
                        {SpaceArray(film.properties.starships)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Film Vehicles:</strong>{" "}
                        {SpaceArray(film.properties.vehicles)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Film Species:</strong>{" "}
                        {SpaceArray(film.properties.species)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Opening:</strong>{" "}
                        {film.properties.opening_crawl}
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
                        <strong>Description:</strong> {film.description}
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
export default FilmViewer;
