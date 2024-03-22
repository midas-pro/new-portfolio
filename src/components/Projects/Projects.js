// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// // import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";



// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
       


//         <div className="working-text">
//             Working on it
//         </div>
       
//       </Container>
//     </Container>
//   );
// }

// export default Projects;


import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
// import Footer from "../footer/Footer"; // Import your Footer component
import "../footer/footerstyle.css"; // Import your CSS file
import TextShadowComponent from "./cityNighteffect"

function Projects() {
  return (
    <div className="footer-wrapper">
      <Container fluid className="project-section">
        <Particle />
        <Container>
          {/* <div className="working-text">
            Working on it
          </div> */}
          <TextShadowComponent/>
        </Container>
      </Container>

    </div>
  );
}

export default Projects;
