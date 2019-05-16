import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Nav className="mr-auto">
          <LinkContainer to='/'><Nav.Link>Developer</Nav.Link></LinkContainer>
          <LinkContainer to='/skills'><Nav.Link>Skills</Nav.Link></LinkContainer>
          <LinkContainer to='/assessments'><Nav.Link>Assessments</Nav.Link></LinkContainer>
          <LinkContainer to='/reports'><Nav.Link>Reporting Tool</Nav.Link></LinkContainer>
      </Nav>
    </Navbar>
    
  );
}

export default Header;