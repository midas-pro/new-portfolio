
import React from "react";
import { Container,Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../footer/footerstyle.css"; // Import your CSS file
import TextShadowComponent from "./cityNighteffect"
import ProjectCards from './ProjectCards'
import etek from '../../Assets/Projects/e-tek.jpg'
import vipkid from '../../Assets/Projects/vipkid.jpg' 
import coffeelab from '../../Assets/Projects/coffeeshop.jpg'
import farm from '../../Assets/Projects/farm4sale.jpg'
import coinfarm from '../../Assets/Projects/coinFarm.jpg'
import elfontheshelf from '../../Assets/Projects/threeJS.jpg'
import simplebits from '../../Assets/Projects/simplebits.jpg'
import sallybeauty from '../../Assets/Projects/Sallybeauty.jpg'
function Projects() {

  const projects = [
    {
      imgPath:etek,
      url:'https://e-tek.vn/',
      tech:'Jqery, Bootstrap',
      Des:'Eletronic Store website'
    },
    {
      imgPath:vipkid,
      url:'https://www.vipkid.com.cn/',
      tech:'Vue.js',
      Des:' Chinese Online Children Education website'
    },
    {
      imgPath:coffeelab,
      url:'https://takecoffeelab.net/',
      tech:'Shopify',
      Des:'CoffeeShop website'
    },
    {
      imgPath:farm,
      url:'https://farms4sale.eu/',
      tech:'Jqery, Bootstrap 4, Python/Django',
      Des:'Farm Sales website'
    },
    {
      imgPath:coinfarm,
      url:'https://coinfarm.online/',
      tech:' Next.js, web3.js, Node.js',
      Des:'Sound coinfarm website'
    },
    {
      imgPath:elfontheshelf,
      url:'https://elfontheshelf.com/',
      tech:'React, Gatsby, Three.js',
      Des:''
    },
    {
      imgPath:simplebits,
      url:'https://simplebits.io/',
      tech:'sveltekit, Howler.js, Node.js',
      Des:''
    },
    {
      imgPath:sallybeauty,
      url:'https://sallybeauty.com/',
      tech:'Vue, Java',
      Des:''
    },
  ]
  return (
    <div className="footer-wrapper">
      <Container fluid className="project-section">
        <Particle />
        <Container>
        <Row className="justify-content-center">
          {projects && projects.map((item,index) =>{
            return(    
                <Col md={5} key={index} className="m-3">     
                  <ProjectCards imgPath={item.imgPath} tech={item.tech} Des = {item.Des} url={item.url} />
                </Col>
            )
          })}
        </Row>
          {/* <TextShadowComponent/> */}
        </Container>
      </Container>

    </div>
  );
}

export default Projects;
