import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey Guys I'm  <span className="purple">B Nitesh </span>
            from <span className="purple"> AndhraPradesh , India.</span>
            <br />
            <br />
            I am currently pursuing my Bachelor of Techonolgy at
            <br />
            Aditya College of Engineering & Techonolgy , AP
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket , Kabadi
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card> 
  );
}

export default AboutCard;
