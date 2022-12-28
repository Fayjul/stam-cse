import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      {/* <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>STAM:CSE</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto  w-100  justify-content-end">
              <Link className="nav-link" to="/signin">
                Sign In
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <Navbar bg="light" expand="lg">
        <Container align="center">
          <Navbar.Brand href="/">
            <img
              src="https://admission.sust.edu.bd/images/sust-logo.png"
              width="80"
              height="80"
              className="d-inline-block align-top img-container"
              alt="React Bootstrap logo"
            />{' '}
            <img
              src="https://admission.sust.edu.bd/images/sust_name_omegle.png"
              width="600"
              height="60"
              className="d-inline-block align-bottom margin-left"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
