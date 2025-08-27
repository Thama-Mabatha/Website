import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Machine Learning Lead Conversion Prediction"
              description="A machine learning solution designed to predict lead conversions for car dealerships[cite: 43]. [cite_start]Built and optimized multiple models like Random Forest, XGBoost, and SVM to enable data-driven decisions and improve performance on imbalanced data[cite: 44]."
              ghLink="https://github.com/Thama-Mabatha/Machine-Learning"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Universal Admin Platform"
              description="A flexible, web-based admin system that allows multiple clients to manage their own apps, users, and content independently[cite: 49]. [cite_start]Features a reusable interface and multi-tenant functionality, built with C#, JavaScript, and MongoDB[cite: 50, 52]."
              ghLink="https://github.com/masindithe/universal-admin"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="E-Commerce Store"
            description="A full-stack web application that simulates a functional online store[cite: 55]. [cite_start]Includes a product catalog, shopping cart, checkout process, and an admin dashboard[cite: 55]. [cite_start]Built using C#, ASP.NET, and MySQL to ensure a robust and scalable solution[cite: 58]."
              ghLink="https://github.com/TebohoMajake/QuickKart"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Basic Weather App"
               description="A frontend web application that displays real-time, location-based weather data[cite: 61]. [cite_start]Integrates external weather APIs and uses asynchronous JavaScript to provide accurate and responsive information in a clean user interface[cite: 62]."
              ghLink="https://github.com/Thama-Mabatha/react-weather-app"
              demoLink="https://animated-elf-5a235f.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;