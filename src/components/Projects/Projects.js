import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/commerce.jpeg";
import weather from "../../Assets/Projects/Weather.png";
import universal from "../../Assets/Projects/Universal.png";

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
  
              isBlog={false}
              title="Machine Learning Lead Conversion Prediction"
              description="A machine learning solution designed to predict lead conversions for car dealerships.Built and optimized multiple models like Random Forest, XGBoost, and SVM to enable data-driven decisions and improve performance on imbalanced data."
              ghLink="https://github.com/Thama-Mabatha/Machine-Learning"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={universal}
              isBlog={false}
              title="Universal Admin Platform"
              description="A flexible, web-based admin system that allows multiple clients to manage their own apps, users, and content independently.Features a reusable interface and multi-tenant functionality, built with C#, JavaScript, and MongoDB."
              ghLink="https://github.com/masindithe/universal-admin"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce Store"
            description="A full-stack web application that simulates a functional online store.Includes a product catalog, shopping cart, checkout process, and an admin dashboard.Built using C#, ASP.NET,React.js and Javascript and MySQL to ensure a robust and scalable solution."
              ghLink="https://github.com/TebohoMajake/QuickKart_Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Basic Weather App"
               description="A frontend web application that displays real-time, location-based weather data.Integrates external weather APIs and uses asynchronous JavaScript to provide accurate and responsive information in a clean user interface"
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