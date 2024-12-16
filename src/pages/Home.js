import React from "react";

import { Container, Card } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center all-hold">
      <Card className="p-4 shadow-lg" style={{ maxHeight: "600px" }}>
        <Card.Body>
          <Card.Title className="mb-4 text-center display-6">
            Welcome to SWAPI
          </Card.Title>
          <Card.Text className="text-muted home-card-text">
            The Star Wars API, or "swapi" (Swah-pee)
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
