import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import BMC from "../../Assets/BMC.jpeg";
import CADIQ from "../../Assets/CADIQ.jpeg";
import Daimani from "../../Assets/Daimani.jpeg";
import du from "../../Assets/du.jpeg";
import greythr from "../../Assets/Greythr.jpeg";
import SACO from "../../Assets/SACO.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SACO}
              isBlog={false}
              title="SACO"
              description="SACO is a provider of home improvement products in Saudi Arabia. Founded in 1984, SACO started out with one store in Riyadh. Over the next two decades, the company expanded its reach across the country and, to date, operates 34 stores in 18 cities,"
              demoLink="https://www.saco.sa/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Daimani}
              isBlog={false}
              title="Daimani"
              description="Discover the biggest choice of VIP Hospitality tickets for sporting, music and cultural events.
              VIP Booking Made Easy"
              demoLink="https://www.daimani.com/global/en"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CADIQ}
              isBlog={false}
              title="CADIQ"
              description="ITI is a world leader in Computer-Aided Design (CAD) and Product Lifecycle Management (PLM) interoperability software services. Through its key solutions for Model-Based Enterprise (MBE), data interoperability and data migration, ITI provides the building blocks for Industry 4.0, to help build ‘next generation’ digital enterprises."
              demoLink="https://www.iti-global.com/cadiq"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={du}
              isBlog={false}
              title="du telecom"
              description="main telecom operators in the United Arab Emirates. du offers fixed line, mobile telephony, internet and digital television services across the UAE. It also provides carrier services, a data hub, internet exchange facilities and satellite service for broadcasters."
              demoLink="https://www.du.ae/personal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={greythr}
              isBlog={false}
              title="greythr"
              description="greytHR provides one of the best HR and Payroll softwares for small and midsize businesses across various industries in India."
              demoLink="https://www.greythr.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BMC}
              isBlog={false}
              title="BMC"
              description="Benjamin Moore & Co., also known as Benjamin Moore, is an American manufacturer of commercial paints, stains, and other architectural coatings"
              demoLink="https://www.benjaminmoore.com/en-us"  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
