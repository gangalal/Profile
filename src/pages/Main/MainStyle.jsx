import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { Link } from "react-scroll";

export const MainContainer = styled.div`
    background: #000000; 
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0px;
    height: 800px
    position: relative;
    z-index: 1
`;

export const MainBg = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 70%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const MainContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainH1 = styled.h1`
  color: #ffff;
  font-size: 42px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 42px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const MainP = styled.p`
  margin-top: 0px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

export const MainBtnWrapper = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const btnColor = styled(Link)`
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
`;
