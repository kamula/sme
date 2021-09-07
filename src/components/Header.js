import React from "react";
import { Navbar, Nav,Container } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg"   collapseOnSelect>
        <Container>
          <LinkContainer to ="/">
          <Navbar.Brand  >
            <img
              alt=""
            //   src="../logo.png"
            src="https://www.seekpng.com/png/detail/370-3705813_farms-logo-farmers-logo.png"
              width="110"
              height="40"
              className="rounded"
            />
            {/* Farms */}
          </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="mr-auto">

              <LinkContainer to="/" style={{ textDecoration: 'none' }}>
                <Nav.Link>
                   Home
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/services" style={{ textDecoration: 'none' }}>
                <Nav.Link>
                 Services
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about" style={{ textDecoration: 'none' }}>
                <Nav.Link>
                 About us
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
