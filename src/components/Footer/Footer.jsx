import React from "react";
import { animateScroll as scroll } from "react-scroll";
import "./FooterStyle.css";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <footer>
      {" "}
      <span className="center" to="/" onClick={toggleHome}>
        GL
      </span>
      &copy; {new Date().getFullYear()} All rights reserved.
    </footer>
  );
};

export default Footer;
