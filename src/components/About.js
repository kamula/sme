import React from "react";


import { Row,Col,Container } from 'react-bootstrap'
function about() {
  return (
    <div className="Card mt-5">      
      <div className="card-img-top d-flex align-items-center bg-light">        
        <Container>
            <Row>
                <Col className="text-center"><img src="https://www.seekpng.com/png/detail/370-3705813_farms-logo-farmers-logo.png" alt="logo" /></Col>
                
            </Row>   
                         
        </Container> 
               
      </div>    
      <div className="text-center mt-3">
                <h1>Mission</h1>
                <p>
                We Provide farm equipments, expert advice and services for tree, vine, grain, and specialty crops, at Farms we pride ourselves on customer service. Traditional or organic farming, wherever you may be, you can find one of our five store locations to help supply your farm or ranch needs
                </p>
            </div>  
      
    </div>
  );
}

export default about;
