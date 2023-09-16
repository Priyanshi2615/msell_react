import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "./style.css";


const Navbar2 = () => {
  return (
    <div style={{ position: "sticky", top: "0" }}>
    <Navbar expand="lg" className="custom-navbar" bg="light" variant="light">
      
      {/*<Navbar.Brand href="#home">
      <img
          src="/images/mSELL_logo.png"
          alt="Your Logo"
          height="30px"
          width="30px"
        /></Navbar.Brand>*/}

     

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{position:'absolute',marginLeft:'1050px',}}>
          <NavDropdown title="Admin" id="Admin-dropdown">
            <NavDropdown.Item href="#profile" className="user-link">
              <FontAwesomeIcon icon={faUser} /> Profile
            </NavDropdown.Item>
            <NavDropdown.Item href="#settings" className="user-link">
              <FontAwesomeIcon icon={faCog} /> Settings
            </NavDropdown.Item>
            <NavDropdown.Item href="#logout" className="user-link">
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

      
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{color:'lightgrey'}}/>
        </Form>
      ,</Navbar.Collapse>
    </Navbar>
    <hr style={{marginLeft:'-11px',}}></hr>
    </div>
  );
};

export default Navbar2;
