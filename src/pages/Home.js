import React from "react";
// since not using Bootstrap, currently
// eslint-disable-next-line
import { Col, Row, Container } from "../components/Grid";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Container fluid>
      <Header />

      <main>

        <section id="left">

          <h2>
          John L. Spetz
          </h2>

          <p>
          I am a programmer and web designer living in Willoughby Hills, Ohio on
          the North Coast, who enjoys both computer and human languages.  I have a
          strong background in traditional, procedural computer programming, which
          provides me with a strong grounding foundation to understanding the
          rapidly shifting and evolving, objected-oriented technologies that are
          transforming the Internet-connected world of today.
          </p>

          <p>
          I graduated from Case Western Reserve University in May 1992 with a
          Bachelor of Arts (BA) in Computer Science and a background in Borland's
          Turbo Pascal and C/C++ languages.  I learned to program both in the
          Integrated Development Environment (IDE) and at the command line using
          traditional make files.  The ability to work outside the IDE proved
          invaluable for working with software with a very large source base which
          had outgrown the conventional IDE and was divided into many independent
          modules.  This code base required more flexible, stand-alone trouble
          shooting approaches and testing methods.  It was critical both to test
          modules in isolation and do proper integration testing to ensure the
          overall system would function as expected with new changes.
          </p>

          <p>
          For many years, I was the lead programmer maintaining insurance policy
          processing software used by small insurance companies to rate premiums,
          issue transactions, and accumulate statistical information for bureau
          reporting purposes.  Our insurer accounts relied long-term upon stable
          software systems that allowed for regular rate updates and rule changes
          with absolute backward compatibility across decades of data, while
          allowing for the seamless addition of new lines of business or new state
          offerings as requested.  Over the course of my work, I learned to read
          insurance bureau manuals from outfits like ISO with comprehension as a
          part of writing specifications and coding required functionality.  Also
          as a part of work, I took a number of AICPCU insurance courses through
          The Institute and received high marks.
          </p>

          <p>
          I am working my way through the Summer 2020 session of the Case Western
          Reserve University (CWRU) Coding Boot Camp to expand my command of the
          latest web technologies.  In addition to deeper immersion into the world
          of HTML with CSS and Javascript programming, our class gains real world
          experience on both the browser front end and the server back end.  I gain
          new web-enabled ways of using my existing SQL database background
          knowledge.
          </p>

        </section>

      </main>

      <Footer />

    </Container>
  );
};

export default Home;
