import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profilepc from "../../assetes/img/gangalal.jpg";
import "./AboutStyle.css";

const AboutElement = () => {
  return (
    <div classname="theme animate" id="about">
      <h1 className="me"> About Me</h1>
      <hr align="center" padding-top="0px" width="90%" color="green" />
      <Container className="about" fluid>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <Image src={profilepc} fluid padding="0 0px" />
          </Col>
          <Col xs={12} md={6}>
            <div>
              I graduated from the University of Oklahoma in Jan 2020 with a
              Computer Engineering major. Creating intelligent autonomous robots
              using electronics components, applying control theory, signal
              processing, reinforcement learning, and AI algorithm is my hobby.
              Outside of robotics, I am interested in web/mobile/desktop
              Application and firmware software development.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutElement;
