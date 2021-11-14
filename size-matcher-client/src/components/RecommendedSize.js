import React from "react";
import { ProgressBar, Container, Row, Col } from "react-bootstrap";

export const RecommendedSize = () => {
  const recommendedSize = 60; //todo - get from server
  return (
    <div>
      <Container
        fluid
        className="w-50 p-2 mt-3 mb-2 border border-primary rounded"
      >
        <h2> We think the best size for you is: </h2>
        <Row>
          <Col> XS </Col>
          <Col> S </Col>
          <Col> M </Col>
          <Col> L </Col>
          <Col> XL </Col>
        </Row>
        <Row>
          <Col>
            <ProgressBar now={recommendedSize} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
