import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, animateScroll as scroll } from "react-scroll";
import "./NavbarStyle.css";

const NavbarElement = () => {
  const [navbar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 77) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  // window.addEventListener("scroll", changeBackground);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        variant="dark"
        expand="lg"
        className={navbar ? "navbarStyle activeNav" : "navbarStyle"}
      >
        <Navbar.Brand to="/" onClick={toggleHome} className="pointer">
          GL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-50}
              activeClass="active"
              className="navLinks"
            >
              About
            </Link>
            <Link
              to="skill"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-50}
              activeClass="active"
              className="navLinks"
            >
              Skills
            </Link>
            <Link
              to="project"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-50}
              activeClass="active"
              className="navLinks"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-400}
              activeClass="active"
              className="navLinks"
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarElement;
