import React from "react";
// since not using Bootstrap, currently
// eslint-disable-next-line
import { Col, Row, Container } from "../components/Grid";

const Home = () => {
  return (
    <Container fluid>
      <header className="heading">
        <h1>
        John L. Spetz
        </h1>
      </header>

      <aside className="flex-container">

        <div className="avatar">
          <img src="../images/JohnLSpetz_avatar.jpg" alt="John L Spetz" />
        </div>

        <address id="right">

          <h2>
          Contact Info
          </h2>

          <table>

          <tr>
            <td>
            <i className="fa fa-envelope"></i>
            </td>
            <td>
            Email: 
            </td>
            <td>
            <a target="_blank" rel="noopener noreferrer" href="mailto:JohnLSpetz@zoho.com">
            JohnLSpetz@zoho.com
            </a>
            </td>
          </tr>

          <tr>
            <td>
            <i className="fa fa-linkedin"></i>
            </td>
            <td>
            LinkedIn: 
            </td>
            <td>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/john-l-spetz/">
            www.linkedin.com/in/john-l-spetz/
            </a>
            </td>
          </tr>

          <tr>
            <td>
            <i className="fa fa-github"></i>
            </td>
            <td>
            GitHub:
            </td>
            <td>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/johannsp">
            github.com/johannsp
            </a>
            </td>
          </tr>

          <tr>
            <td>
            <i className="fa fa-file-pdf-o"></i>
            </td>
            <td>
            Resume:
            </td>
            <td>
            <a target="_blank" rel="noopener noreferrer" href="resume_JSpetz.pdf">Resume as PDF</a><br />
            </td>
          </tr>

          <tr>
            <td>
            <i className="fa fa-home"></i>
            </td>
            <td>
            Go Back:
            </td>
            <td>
            <a href="/home">Profile Page</a><br />
            </td>
          </tr>
          </table>

        </address>

      </aside>

      <main>

        <section id="left">

          <h2>
          John L. Spetz
          </h2>

          <h3>
          Projects and Assignments through CWRU Coding Boot Camp
          </h3>

          <dl>

            <dt>
            Project: VinylD - Record Collection
            </dt>
            <dd>
            A web app to track one's record collection
            </dd>
            <dd>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/johannsp/CWRUBC-Project-2-Team">
            GitHub Repository
            </a>
            </dd>
            <dd>
            <a target="_blank" rel="noopener noreferrer" href="https://project-2-cwrubc-summer2020.herokuapp.com/collection.html">
            Visit the Web Page
            </a>
            </dd>
            <dd>
            <img src="./images/VinylD_CWRUBCPrj02_NodeApp_preview.png" width="300px" /><br />
            </dd>

            <dt>
            Project: Speech-Text
            </dt>
            <dd>
            A web app to record speech in English, transcribe it as text, and translate it to German
            </dd>
            <dd>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/johannsp/CWRUBC-Project01">
            GitHub Repository
            </a>
            </dd>
            <dd>
            <a target="_blank" rel="noopener noreferrer" href="https://johannsp.github.io/CWRUBC-Project01/">
            Visit the Web Page
            </a>
            </dd>
            <dd>
            <img src="./images/Speech-Text_WebPagePreview.png" width="300px" /><br />
            </dd>

            <dt>
            Assignment: Weather Dashboard
            </dt>
            <dd>
            A web app to check the weather forecast at various cities or places as
            preparation for travel.
            </dd>
            <dd>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/johannsp/CWRUBC-Weather-Dashboard">
            GitHub Repository
            </a>
            </dd>
            <dd>
            <a target="_blank" rel="noopener noreferrer" href="https://johannsp.github.io/CWRUBC-Weather-Dashboard/">
            Visit the Web Page
            </a>
            </dd>
            <dd>
            <img src="./images/WeatherDashboard_website_preview.png" width="300px" /><br />
            </dd>

            <dt>
            Assignment: Note Taker
            </dt>
            <dd>
            A Node Express app to write, save, and delete notes in JSON format
            </dd>
            <dd>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/johannsp/CWRUBC-Note-Taker">
            GitHub Repository
            </a>
            </dd>
            <dd>
            <img src="./images/NoteTaker_HerokuApp_preview.png" width="300px" /><br />
            </dd>

            <dt>
            Assignment: Code Quiz
            </dt>
            <dd>
            A web app to administer a timed quiz on the Javascript web programming language.
            </dd>
            <dd>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/johannsp/CWRUBC-Code-Quiz">
            GitHub Repository
            </a>
            </dd>
            <dd>
            <a target="_blank" rel="noopener noreferrer" href="https://johannsp.github.io/CWRUBC-Code-Quiz/">
            Visit the Web Page
            </a>
            </dd>
            <dd>
            <img src="../images/CodeQuiz_website_preview.png" width="300px" /><br />
            </dd>

            <dt>
            Assignment: Employee Tracker
            </dt>
            <dd>
            Node-based content management system (CMS) for employee information
            </dd>
            <dd>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/johannsp/CWRUBC-Employee-Tracker">
            GitHub Repository
            </a>
            </dd>
            <dd>
            <img src="./images/Employee-Tracker_NodeApp_preview.png" width="300px" /><br />
            </dd>

            <dt>
            Assignment: Readme Generator
            </dt>
            <dd>
            A Node command line app to generate the README.md for a new project
            </dd>
            <dd>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/johannsp/CWRUBC-Readme-Generator">
            GitHub Repository
            </a>
            </dd>
            <dd>
            <img src="./images/Readme-Generator_NodeApp_preview.png" width="300px" /><br />
            </dd>

          </dl>

        </section>

      </main>

    </Container>
  );
};

export default Home;
