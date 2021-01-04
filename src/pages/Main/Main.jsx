import React, { useState } from "react";
import video from "../../assetes/img/video.mp4";
import Button from "react-bootstrap/Button";
import "../../components/Util/util.css";
import {
  MainContainer,
  MainBg,
  VideoBg,
  MainContent,
  MainH1,
  MainBtnWrapper,
  MainP,
  ArrowForward,
  ArrowRight,
} from "./MainStyle";

const Main = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div id="home">
      <MainContainer>
        <MainBg>
          <VideoBg autoPlay loop muted src={video} type="video/mp4" />
        </MainBg>
        <MainContent>
          <MainH1>Hello, my name is Gangalal Lama</MainH1>
          <MainP>I am Computer/Software Engineer</MainP>
          <MainBtnWrapper>
            {hover ? (
              <a href="#about">
                <Button
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  style={{
                    color: "#fff",
                    background: "#027947",
                    borderRadius: "50px",
                  }}
                  variant="outline-success"
                >
                  Get started <ArrowForward />
                </Button>
              </a>
            ) : (
              <a href="#about">
                <Button
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  variant="outline-success"
                >
                  Get started <ArrowRight />
                </Button>
              </a>
            )}
          </MainBtnWrapper>
        </MainContent>
      </MainContainer>
    </div>
  );
};

export default Main;
