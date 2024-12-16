import React, { useEffect, useState } from "react";

import { GetFilms } from "../API/FilmsAPI";

import { Card, Stack, Container, Spinner } from "react-bootstrap";

import { Link } from "react-router-dom";

const FilmComponent = ({ searchQuery }) => {
  const [films, setFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([]);

  useEffect(() => {
    GetFilms().then((response) => {
      const films = response.data.result;
      setFilms(films);
      setFilteredFilms(films);
    });
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = films.filter((film) =>
        film.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredFilms(filtered);
    } else {
      setFilteredFilms(films);
    }
  }, [searchQuery, films]);

  return (
    <Container className="my-4">
      <Stack gap={3}>
        {filteredFilms ? (
          filteredFilms.map((film, index) => (
            <Card key={index} className="shadow-sm">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <Card.Title className="mb-0">
                    {film.properties.title}
                  </Card.Title>
                  <Card.Text className="text-muted">
                    Film ID: {film.uid}
                  </Card.Text>
                </div>
                <Link
                  to={`/ViewFilm/${film.uid}`}
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

export default FilmComponent;
