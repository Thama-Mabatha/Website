import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Thama Mabatha </span>
            from <span className="purple">  Thohoyandou, South Africa currently based in Johannesburg.</span> 
            <br />
          I am a final year BSc Information Technology student at the University of Johannesburg. 
            <br />
            When I'm not focused on my studies, I love to step away from the keyboard and explore other passions. Here are a few things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight />  Cooking and trying new recipes
            </li>
            <li className="about-activity">
              <ImPointRight />  Going on new adventures Anything thrill-seeking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always seeking the next adventure, whether in code or in life!"{" "}
          </p>
          <footer className="blockquote-footer">Thama</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;