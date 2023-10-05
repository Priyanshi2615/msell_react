import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCogs,
  faSignOutAlt,
  faBell,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Navbar2() {
  const [showForm, setShowForm] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3); 

  const handleBellClick = () => {
    setShowForm(!showForm);
    if (showForm) {
      setNotificationCount(0);
    }
  };

  return ( 
    <div
      style={{
        position: "sticky",
        top: "0",
        right: "0",
        left: "0",
        zIndex: "1",
      }}
    >
      <Navbar expand="lg" id="mobileview" className="custom-navbar" bg="dark" variant="dark ">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mr-auto"
            style={{ position: "absolute", right: "30px", }}
          >
          <Nav.Link
              href="#notifications"
              style={{ marginRight: "10px", color: "white" }}
            >
              <FontAwesomeIcon icon={faBell} onClick={handleBellClick} />
              {notificationCount > 0 && (
                <span className="notification-badge">{notificationCount}</span>
              )}
            </Nav.Link>

            {showForm && (
              <div className="notification-form">
                <div className="notification">
                  <p>This is a sample notification message.</p>
                </div>

                <div className="notification">
                  <p>Another notification goes here.</p>
                </div>

                <div className="notification">
                  <p>One more notification for demonstration purposes.</p>
                </div>
              </div>
            )}
            <NavDropdown
              title="Admin"
              id="Admin-dropdown"
              style={{
                color: "white",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <NavDropdown.Item href="#profile" className="user-link">
                <FontAwesomeIcon icon={faUser} /> Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#settings" className="user-link">
                <FontAwesomeIcon icon={faCogs} /> Settings
              </NavDropdown.Item>
              <NavDropdown.Item href="#logout" className="user-link">
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              icon={faSearch}
              className="mr-sm-2"
              style={{
                color: "lightgrey",
                marginBottom: "10px",
                marginLeft: "10px",
              }}
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar2;
