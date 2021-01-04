import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import "./ContactStyle.css";

const ContactComponent = () => {
  return (
    <div id="contact">
      <Jumbotron fluid className="jumbotronColor">
        <h1 className="heading"> Contact Me!</h1>
        <br />
        <Container>
          <Row>
            <Col>
              <div className="m-2">
                <a href="mailto:gangalallama@gmail.com" title="E-mail me">
                  <Button variant="outline-info">
                    <FaPaperPlane /> Email
                  </Button>
                </a>
              </div>
            </Col>
            <Col>
              <div className="m-2">
                <a
                  href="https://www.linkedin.com/in/gangalallamadong"
                  title="Visit my Linkedin"
                >
                  <Button variant="outline-primary">
                    <FaLinkedin /> LinkedIn
                  </Button>
                </a>
              </div>
            </Col>
            <Col>
              <div className="m-2">
                <a href="https://github.com/gangalal" title="Visit my GitHub">
                  <Button variant="outline-dark">
                    <FaGithub /> GitHub
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default ContactComponent;
