import React from 'react'
import "./header.css";
import { Navbar,Nav,Container } from 'react-bootstrap';
import logo from "../../assets/logo.png"


const Header = () => {
  return (
    <>
     <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home" className='nav-img'>
          <img src={logo} alt="" />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Service</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contacd</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>

    
    
    
  )
}

export default Header