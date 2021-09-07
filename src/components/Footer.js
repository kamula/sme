import React from "react";
import { Container, Row, Col,ListGroup } from "react-bootstrap";

function Footer() {
  return (
    <footer className="font-small pt-4 mt-4" style={{"background-color":"black"}}>
      <Container>
        <Row>
          <Col className="text-center" md="6">     
          <h5 className="title" style={{"color":"white"}}>Farms</h5>  
          <p className="text-secondary"> 
          We Provide farm equipments, expert advice and services for tree, vine, grain, and specialty crops, at Farms we pride ourselves on customer service. Traditional or organic farming, wherever you may be, you can find one of our five store locations to help supply your farm or ranch needs</p> 
          </Col>
          <Col >            
          <h5 className="title text-center" style={{"color":"white"}}>CONTACT US</h5>
            <ListGroup >
              <ListGroup.Item className="list-unstyled" >
                <a href="#!" style={{ textDecoration: 'none' }}> <i class="fa fa-map-marker"></i>   Nairobi</a>
              </ListGroup.Item>
              <ListGroup.Item className="list-unstyled">
                <a href="mailto:farms@mail.com" style={{ textDecoration: 'none' }}><i class="fas fa-envelope-square"></i> farms@mail.com</a>
              </ListGroup.Item>
              <ListGroup.Item className="list-unstyled">
                <a href="#!" style={{ textDecoration: 'none' }}><i class="fas fa-phone-alt"></i> 123456</a>
              </ListGroup.Item>
              
            </ListGroup>
          </Col>
        </Row>
        <Row className="mt-3">
        <Col className="text-center text-secondary" >            
             © {(new Date().getFullYear())} farms
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
