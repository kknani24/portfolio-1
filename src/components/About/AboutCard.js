import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kausik Challapalli</span> from <span className="purple">Guntur, India.</span>
            <br />
            I am currently pursuing my Bachelor of Technology in Computer Science Engineering, specializing in AI and Machine Learning.
            <br />
            My journey in tech has been enriched with hands-on experience in developing AI-driven solutions and participating in innovative research projects.
            <br />
            <br />
            Beyond coding, here are some of my passions:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Data Science and Machine Learning
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open Source Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Engaging in Tech Communities and Workshops
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Aim to develop cutting-edge solutions that create a meaningful impact!"{" "}
          </p>
          <footer className="blockquote-footer">Kausik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
