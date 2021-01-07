import React from "react";
import ReactPlayer from "react-player";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import turtlebot from "../../assetes/video/turtlebot.mp4";
import electronics from "../../assetes/video/electronics.mp4";
import control from "../../assetes/video/control.mp4";
import "./ProjectStyle.css";

const ProjectElement = () => {
  return (
    <div id="project">
      <h1 className="me"> Projects </h1>
      <hr align="center" padding-top="0px" width="90%" color="green" />
      <Container>
        <Row className="justify-content-around d-flex">
          <Col md={4} d-flex>
            <ReactPlayer
              url={electronics}
              width="100%"
              height="60%"
              controls="true"
              muted="true"
              margin="10px 10px"
            />
            <div className="d-flex justify-content-around flex-column">
              This was the final project from my electronics lab class. Robots
              were built from scratch using electronics components such as
              MOSFET, BJT, Op-amps, 555-timers, and sensors. Also, we were not
              allowed to use any micro-controller.
            </div>
          </Col>
          <Col md={4} flex-column>
            <ReactPlayer
              url={control}
              width="100%"
              height="60%"
              controls="true"
              muted="true"
            />
            <div className="d-flex justify-content-around flex-column">
              These robots are from my Control System class. The goal of this
              class was to implement PID (proportional, Integration, and
              Derivative) controls.
            </div>
          </Col>
          <Col md={4} d-flex>
            <ReactPlayer
              url={turtlebot}
              width="100%"
              height="60%"
              controls="true"
              muted="true"
            />
            <div className="d-flex justify-content-around flex-column">
              This is a Turtlebot robot. It's from my Intelligent Robotics
              class. We used this robot to implement A*, D*, and Q-learning
              algorithms in ROS(Robot Operating System) and Gazebo world.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectElement;
