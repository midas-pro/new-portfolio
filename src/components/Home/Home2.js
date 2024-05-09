import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import heyy from "../../Assets/dinh-avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row style={{justifyContent:"space-between"}}>
        <Col md={4} className="myAvtar">
            <Tilt>
              <img src={heyy} className="img-fluid my-avatar" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <span className="home-about-body-description">
            Seasoned and innovative Full stack developer with 7+ years of experience in designing and developing dynamic web applications.  🤷‍♂️
              <br />
              <br />Proficient in both front-end and back-end technologies and have much passion to learn and challenge new technology.
              <br />
              <br />Adept at creating responsive and intuitive user interfaces, optimizing application performance, and ensuring cross-browser compatibility.
              <br />Proven track record of delivering high-quality code on-time and within budget.
              <br />
              <br />Excellent problem-solving skills and ability to work effectively in both solo and team environments.
              <br />
              Committed to delivering robust and scalable web solutions that meet client needs and enhance user experiences.
            </span>
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
                  href="https://github.com/mister-pro1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/%C4%91inh-v%C4%83n-th%E1%BB%83-5593491aa/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="coderdinh@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGoogleCircle />
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
