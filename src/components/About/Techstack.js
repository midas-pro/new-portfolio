import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAndroid,
  DiVisualstudio,
  DiAngularSimple,
  DiLaravel,
  DiHtml5,
  DiGo,
  DiDjango,
  DiDocker,
  DiCss3,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiMysql,
  SiPocketbase,
  SiNextdotjs,
  SiSolidity,
   SiPostgresql,
  SiVuetify,
  SiSvelte,
  SiTypescript,
  SiNestjs,
  SiRemix,
} from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";
// import { Tooltip } from 'react-tooltip'

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
       <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiVuetify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiSvelte />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <DiAngularSimple/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRemix />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNestjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <DiLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <DiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <DiGo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>    
      <Col xs={4} md={2} className="tech-icons">
        <SiPocketbase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
