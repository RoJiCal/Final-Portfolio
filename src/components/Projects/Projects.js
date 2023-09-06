
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import braz from "../../Assets/braz.png";
import paper from "../../Assets/paper.png";
import glitz from "../../Assets/glitz.png";
import afiliate from "../../Assets/afiliate.png";
import machinesound from "../../Assets/machinesound.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a some small projects I´ve worked on recently during my training.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={afiliate}
              isBlog={false}
              title="Affiliate ecommerce"
              description="An advertiser (the ecommerce store owner) has products they want to sell, and a publisher (the affiliate) promotes these products on their own site and earns a commission on every sale. Relaized with ReactJs framwork, sasss, bootstrap and the payment method with stripe."
              ghLink="https://animated-rolypoly-c67a48.netlify.app"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={braz}
              isBlog={false}
              title="E-Comerce"
              description="A realistic example of how to make an e-commerce with ReactJs, is the clothing brand of a friend and was one of the projects that most excited me."
              ghLink="https://joyful-croquembouche-a50b43.netlify.app"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={machinesound}
              isBlog={false}
              title="Sound Machine"
              description="A sound machine where you can play your beats and it has a very cool style. I made it with HTML, CSS and JVS."
              ghLink="https://keen-selkie-1c9158.netlify.app"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={glitz}
              isBlog={false}
              title="Electronic Music comunity"
              description="Blog with music, news and festival information, one of my first projects made with: HTML, CSS"
              ghLink="https://whimsical-twilight-3dfff9.netlify.app/"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paper}
              isBlog={false}
              title="rock paper scissors"
              description="A game that we all know, fun and easy to play, with a vintage style and with the possibility to play on the smartphone made with: HTML, CSS, JVS and media query."
              ghLink="https://dashing-madeleine-82add0.netlify.app"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          </Row>
      </Container>
    </Container>
  );
}

export default Projects;
