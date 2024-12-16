import React, { useEffect, useState } from "react";

import { GetSpecies } from "../API/SpeciesAPI";

import { Card, Stack, Container, Spinner } from "react-bootstrap";

import { Link } from "react-router-dom";

const SpecieComponent = ({ searchQuery }) => {
  const [species, setSpecies] = useState([]);
  const [filteredSpecies, setFilteredSpecies] = useState([]);

  useEffect(() => {
    GetSpecies().then((response) => {
      const species = response.data.results;
      setSpecies(species);
      setFilteredSpecies(species);
    });
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = species.filter((specie) =>
        specie.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredSpecies(filtered);
    } else {
      setFilteredSpecies(species);
    }
  }, [searchQuery, species]);

  return (
    <Container className="my-4">
      <Stack gap={3}>
        {filteredSpecies ? (
          filteredSpecies.map((specie, index) => (
            <Card key={index} className="shadow-sm">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <Card.Title className="mb-0">{specie.name}</Card.Title>
                  <Card.Text className="text-muted">
                    Specie ID: {specie.uid}
                  </Card.Text>
                </div>
                <Link
                  to={`/ViewSpecie/${specie.uid}`}
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

export default SpecieComponent;
