import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              As a passionate technologist, I am deeply engaged in the ever-evolving fields of 
              <b className="purple"> Artificial Intelligence, Machine Learning,</b> and <b className="purple">Data Science.</b>
              <br />
              <br />
              With a solid foundation in programming languages such as 
              <i>
                <b className="purple"> Python, Java, C++,</b> and <b className="purple">JavaScript,</b>
              </i> 
              I continuously explore cutting-edge technologies and solutions.
              <br />
              <br />
              My core interests revolve around building intelligent, data-driven systems and 
              <i>
                <b className="purple"> AI-powered applications </b> 
              </i>
              that address complex challenges across industries. I also enjoy architecting 
              <b className="purple"> innovative web technologies</b> and contributing to the advancement of 
              <b className="purple"> deep learning</b> and <b className="purple">computer vision.</b>
              <br />
              <br />
              Leveraging frameworks such as <b className="purple">Node.js</b>, along with modern JavaScript libraries like 
              <b className="purple"> React.js</b> and <b className="purple">Django,</b> I am committed to developing scalable, high-performance solutions.
              <br />
              <br />
              In the realm of data science, I have hands-on experience with advanced tools like 
              <b className="purple"> Pandas, NumPy, TensorFlow,</b> and <b className="purple">PyTorch,</b> applying them to solve problems in predictive modeling, natural language processing, and beyond.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kknani24"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kausik-challapalli/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
