import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { skills } from "../Skills/SkillData";
import "./SkillStyle.css";

const SkillComponent = () => {
  return (
    <div id="skill">
      <h1 className="skill">Skills</h1>
      <hr align="center" width="90%" color="green" />
      <Container>
        <CardDeck fluid>
          <Row className="d-flex justify-content-around">
            <Col md={3}>
              <Card
                className="focus mt-3 mb-3"
                // style={{
                //   color: "#FFFFFF",
                //   background: "#000000",
                // }}
              >
                <Card.Body>
                  <Card.Title className="text-center  cardTitle">
                    Programing Languages
                  </Card.Title>
                  <hr align="center" width="90%" color="green" />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.backend.map((key, value) => (
                      <span className="p-2">
                        <a
                          className="text-dark text-decoration-none"
                          href={key.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={key.imgSrc}
                            rounded
                            className="imageStyle m-1"
                          ></Image>
                          {key.skillName}
                        </a>
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="focus mt-3 mb-3">
                <Card.Body>
                  <Card.Title className="text-center  cardTitle">
                    Frontend
                  </Card.Title>
                  <hr align="center" width="90%" color="green" />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.frontend.map((key, value) => (
                      <span className="p-2">
                        <a
                          className="text-dark text-decoration-none"
                          href={key.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={key.imgSrc}
                            rounded
                            className="imageStyle m-1"
                          ></Image>
                          {key.skillName}
                        </a>
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="focus mt-3 mb-3">
                <Card.Body>
                  <Card.Title className="text-center  cardTitle">
                    Frameworks
                  </Card.Title>
                  <hr align="center" width="90%" color="green" />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.framework.map((key, value) => (
                      <span className="p-2">
                        <a
                          className="text-dark text-decoration-none"
                          href={key.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={key.imgSrc}
                            rounded
                            className="imageStyle m-1"
                          ></Image>
                          {key.skillName}
                        </a>
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="focus mt-3 mb-3">
                <Card.Body>
                  <Card.Title className="text-center  cardTitle">
                    Databases
                  </Card.Title>
                  <hr align="center" width="90%" color="green" />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.database.map((key, value) => (
                      <span className="p-2">
                        <a
                          className="text-dark text-decoration-none"
                          href={key.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={key.imgSrc}
                            rounded
                            className="imageStyle m-1"
                          ></Image>
                          {key.skillName}
                        </a>
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </CardDeck>
      </Container>
    </div>
  );
};

export default SkillComponent;
