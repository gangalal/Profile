import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarElement from "./components/navbar/NavbarElement";
import AboutElement from "./pages/about/AboutElement";
import Main from "./pages/Main/Main";
import SkillComponent from "./pages/Skills/SkillComponent";
import ContactComponent from "./pages/Contact/ContactComponent";
import Footer from "./components/Footer/Footer";
import ProjectElement from "./pages/Project/ProjectElement";

const App = () => {
  return (
    <div className="content">
      <NavbarElement />
      <Main />
      <AboutElement />
      <SkillComponent />
      <ProjectElement />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default App;
