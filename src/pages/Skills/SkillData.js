import css from "../../assetes/icons/css.png";
import angular from "../../assetes/icons/angular.png";
import bootstrap from "../../assetes/icons/bootstrap.png";
import c from "../../assetes/icons/c.png";
import cpp from "../../assetes/icons/cpp.png";
import cs from "../../assetes/icons/cs.png";
import php from "../../assetes/icons/php.png";
import html from "../../assetes/icons/html.png";
import java from "../../assetes/icons/java.png";
import python from "../../assetes/icons/python.png";
import react from "../../assetes/icons/react.png";
import flask from "../../assetes/icons/flask.png";
import spring from "../../assetes/icons/spring.png";
import azure from "../../assetes/icons/azure.png";
import mongo from "../../assetes/icons/mongodb.png";

export const skills = {
  backend: [
    {
      link:
        "https://en.wikipedia.org/wiki/C_(programming_language)#:~:text=C%20(%2Fsi%CB%90%2F%2C,efficiently%20to%20typical%20machine%20instructions.",
      imgSrc: c,
      skillName: "C",
    },
    {
      link: "https://en.wikipedia.org/wiki/C%2B%2B",
      imgSrc: cpp,
      skillName: "C++",
    },
    {
      link: "https://www.oracle.com/java/",
      imgSrc: java,
      skillName: "Java",
    },
    {
      link: "https://en.wikipedia.org/wiki/Python_(programming_language)",
      imgSrc: python,
      skillName: "Python",
    },
    {
      link: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
      imgSrc: cs,
      skillName: "C#",
    },
    {
      link: "https://en.wikipedia.org/wiki/PHP",
      imgSrc: php,
      skillName: "PHP",
    },
  ],

  frontend: [
    {
      link: "https://en.wikipedia.org/wiki/HTML5",
      imgSrc: html,
      skillName: "HTML5",
    },
    {
      link:
        "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
      imgSrc: css,
      skillName: "CSS3",
    },
    {
      link: "https://getbootstrap.com/",
      imgSrc: bootstrap,
      skillName: "Bootstrap",
    },
    {
      link: "https://reactjs.org/",
      imgSrc: react,
      skillName: "React JS",
    },
    {
      link: "https://reactjs.org/",
      imgSrc: angular,
      skillName: "Angular",
    },
  ],

  framework: [
    {
      link: "https://spring.io/guides/gs/spring-boot/",
      imgSrc: spring,
      skillName: "Spring Boot",
    },
    {
      link: "https://en.wikipedia.org/wiki/Flask_(web_framework)",
      imgSrc: flask,
      skillName: "Python Flask",
    },
  ],

  database: [
    {
      link: "https://en.wikipedia.org/wiki/Microsoft_Azure_SQL_Database",
      imgSrc: azure,
      skillName: "Azure SQL",
    },
    {
      link: "https://en.wikipedia.org/wiki/MongoDB",
      imgSrc: mongo,
      skillName: "MongoDB",
    },
  ],
};
