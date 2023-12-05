import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dishant Sahu </span>
            from <span className="purple"> Sambalpur, India.</span>
            <br />
            I am Aspiring Fullstack Developer
            <br />
            I have completed Bachelor of Technology (B.Tech) in Electronics and
            Telecommunications at VSSUT Burla.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Business Case Studies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Trading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learn something about everything , Everything about something!"{" "}
          </p>
          <footer className="blockquote-footer">Dishant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
