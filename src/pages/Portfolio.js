import React from "react";
// since not using Bootstrap, currently
// eslint-disable-next-line
import { Col, Row, Container } from "../components/Grid";
import Header from "../components/Header";
import { Projects, Project } from "../components/Project";
import Footer from "../components/Footer";
// Import the picture names from src/images subdirectory
// NB. the pictures in public/images are symlinked into src/images!
import VinylD_CWRUBCPrj02_NodeApp_preview from "../images/VinylD_CWRUBCPrj02_NodeApp_preview.png";
import Speech_Text_WebPagePreview from "../images/Speech-Text_WebPagePreview.png";
import WeatherDashboard_website_preview from "../images/WeatherDashboard_website_preview.png";
import NoteTaker_HerokuApp_preview from "../images/NoteTaker_HerokuApp_preview.png";
import CodeQuiz_website_preview from "../images/CodeQuiz_website_preview.png";
import Employee_Tracker_NodeApp_preview from "../images/Employee-Tracker_NodeApp_preview.png";
import Readme_Generator_NodeApp_preview from "../images/Readme-Generator_NodeApp_preview.png";

const Home = () => {
  return (
    <Container fluid>
      <Header />

      <main>

        <section id="left">

          <h2>
          John L. Spetz
          </h2>

          <h3>
          Projects and Assignments through CWRU Coding Boot Camp
          </h3>

          <Projects>

          <Project
            title="VinylD - Record Collection"
            desc="A web app to track one's record collection"
            github="https://github.com/johannsp/CWRUBC-Project-2-Team"
            link="https://project-2-cwrubc-summer2020.herokuapp.com/collection.html"
            image={VinylD_CWRUBCPrj02_NodeApp_preview}
            blank={true}
          />

          <Project
            title="Speech-Text"
            desc="A web app to record speech in English, transcribe it as text, and translate it to German"
            github="https://github.com/johannsp/CWRUBC-Project01"
            link="https://johannsp.github.io/CWRUBC-Project01/"
            image={Speech_Text_WebPagePreview}
            blank={true}
          />

          <Project
            title="Weather Dashboard"
            desc="A web app to check the weather forecast at various cities or places as preparation for travel."
            github="https://github.com/johannsp/CWRUBC-Weather-Dashboard"
            link="https://johannsp.github.io/CWRUBC-Weather-Dashboard/"
            image={WeatherDashboard_website_preview}
            blank={true}
          />

          <Project
            title="Note Taker"
            desc="A Node Express app to write, save, and delete notes in JSON format"
            github="https://github.com/johannsp/CWRUBC-Note-Taker"
            link=""
            image={NoteTaker_HerokuApp_preview}
            blank={true}
          />

          <Project
            title="Code Quiz"
            desc="A web app to administer a timed quiz on the Javascript web programming language."
            github="https://github.com/johannsp/CWRUBC-Code-Quiz"
            link="https://johannsp.github.io/CWRUBC-Code-Quiz/"
            image={CodeQuiz_website_preview}
            blank={true}
          />

          <Project
            title="Employee Tracker"
            desc="Node-based content management system (CMS) for employee information"
            github="https://github.com/johannsp/CWRUBC-Employee-Tracker"
            link=""
            image={Employee_Tracker_NodeApp_preview}
            blank={true}
          />

          <Project
            title="Readme Generator"
            desc="A Node command line app to generate the README.md for a new project"
            github="https://github.com/johannsp/CWRUBC-Readme-Generator"
            link=""
            image={Readme_Generator_NodeApp_preview}
            blank={true}
          />

          </Projects>

        </section>

      </main>

      <Footer />

    </Container>
  );
};

export default Home;
