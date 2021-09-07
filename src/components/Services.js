import React from "react";
import { Container, Row,  Card } from "react-bootstrap";
// import CardService from "./CardService";

function Services() {
  return (
    <div className="py-3">
      <h2 className="text-center"> Our Services </h2>
      <Container>
        <Row>
          <div className="text-center col-md-4 mt-2 ">
            <Card.Img
              variant="thumbnail"
              style = {{height:"300px",width:"100%"}}
              src="/images/produce.jpg"/>
            <Card.Body>
              <Card.Title>Farm Equipment Supply</Card.Title>{" "}
              <Card.Text>
              Find high quality farm equipment at Agri Supply. Explore our catalogs of products such as our tractor parts, disc part, mower replacement parts, and more.
              </Card.Text>{" "}
              {/* <button className="btn btn-success"> more info </button>{" "} */}
            </Card.Body>{" "}
          </div>
          <div className="text-center col-md-4 mt-2 ">
            <Card.Img              
              variant="thumbnail"
              style = {{height:"300px",width:"100%"}}              
              src="/images/insect.jpg"/>
            <Card.Body>
              <Card.Title> Pesticide Supply </Card.Title>{" "}
              <Card.Text>
              A wide range of pest control products for use in agriculture, animal health
              </Card.Text>{" "}
              {/* <button className="btn btn-success"> more info </button>{" "} */}
            </Card.Body>{" "}
          </div>{" "}
          <div className="text-center col-md-4  mt-2">
            <Card.Img
              variant="thumbnail"
              // className= "card-img-top"
              style = {{height:"300px",width:"100%"}}  
              src="/images/feeds.jpg"/>
            <Card.Body>
              <Card.Title> Livestock feeds </Card.Title>{" "}
              <Card.Text>
              From foals to cow feeds, Farm Supply has a feed for your area of discipline
              </Card.Text>{" "}
              {/* <button className="btn btn-success"> more info </button>{" "} */}
            </Card.Body>{" "}
          </div>{" "}
        </Row>{" "}
      </Container>{" "}
    </div>
  );
}

export default Services;
