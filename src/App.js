import React from 'react';
import './App.css';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousel from "./components/my-carousel/my-carousel.component";
import MyTitle from "./components/my-title/my-title.component";
import About from "./pages/about/about.component";
import image from "./assets/img/parallax/white.png";
import Skills from "./pages/skills/skills.component";
import Experience from "./pages/experience/experience.component";
import Projects from "./components/projects-timeline/projects-timeline.component";
import Contact from "./pages/contact/contact.component";
import Footer from "./components/footer/footer.component";
import Particles from "react-particles-js";
import { ParticlesOptions } from "./ParticlesOptions";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousel />
      <MyTitle />
      <Particles
        className="particles particles-box"
        params={ParticlesOptions}
      />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={ image }
          bgImageAlt="background"
          strength={-200}
        >
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
        </Parallax>
      </div>
      <div>
       <Container className="container-box rounded">
        <Slide bottom duration={500}>  
          <hr />
          <Skills />
            </Slide>
        </Container>
      </div>
      <div>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <hr />
              <Experience />
            </Fade>
          </Container>
      </div>
      <div>
       <Container className="container-box rounded">
        <Slide bottom duration={200}>  
          <hr />
          <Projects />
            </Slide>
        </Container>
      </div>
      <div>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <hr />
              <Contact />
            </Fade>
          </Container>
      </div>
      <hr />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
