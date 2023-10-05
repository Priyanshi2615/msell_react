import React, { useState } from "react";
import { Nav, NavDropdown, Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import {
  faHome,
  faUser,
  faBuilding,
  faStore,
  faMapMarkerAlt,
  faCogs,
  faFileAlt,
  faClipboardList,
  faMap,
  faGlobe,
  faCheckCircle,
  faCity,
} from "@fortawesome/free-solid-svg-icons";
import "./SideBar.css";
import UserForm from "./UserForm";

const SideBar = ({ isSideBarOpen }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleFormClick = () => {
    setShowForm(!showForm);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const containerStyle = {
    padding: "4px",
    margin: "3px 0",
    borderRadius: "5px",
  };

  const linkStyle = {
    color: "#4f5f69",
  };

  const handleDropdownToggle = (eventKey) => {
    const dropdown = document.getElementById(`custom-dropdown-${eventKey}`);
    if (dropdown) {
      dropdown.classList.toggle("show");
    }
  };

  return (
    <div id="mobileview" style={{ position: "sticky", top: "0" }}>
      <Card style={{ marginLeft: "-15px" }}>
        <div className="header">
          <img src="/images/mSELL_logo.png" alt="Logo" className="logo" />
        </div>
        <Card.Body>
          <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
            <Nav className="flex-column">
              <Container style={containerStyle}>
                <Nav.Link href="#Home" style={linkStyle}>
                  <FontAwesomeIcon icon={faHome} /> Dashboard
                </Nav.Link>
              </Container>
              <Container style={containerStyle}>
                <Nav.Link
                  href="#user"
                  style={linkStyle}
                  onClick={handleFormClick}>
                  <FontAwesomeIcon icon={faUser} /> User
                </Nav.Link>
              </Container>
              {showForm && <UserForm />}

              <Container style={containerStyle}>
                <Nav.Link href="#distributor" style={linkStyle}>
                  <FontAwesomeIcon icon={faBuilding} /> Distributor
                </Nav.Link>
              </Container>
              <Container style={containerStyle}>
                <Nav.Link href="#retailer" style={linkStyle}>
                  <FontAwesomeIcon icon={faStore} /> Retailer
                </Nav.Link>
              </Container>
              <Container style={containerStyle}>
                <Nav className="flex-column">
                  <NavDropdown
                    title={
                      <>
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          className="dropdown-title-icon"
                          style={linkStyle}
                        />{" "}
                        <span style={linkStyle}>Location Master</span>
                      </>
                    }
                    id="location-master-dropdown"
                    onMouseEnter={() => handleDropdownToggle("location-master")}
                    onMouseLeave={() => handleDropdownToggle("location-master")}
                    onClick={() => handleDropdownToggle("location-master")}
                  >
                    <NavDropdown.Item
                      href="#item1"
                      className="custom-dropdown"
                      id="custom-dropdown-location-master"
                    >
                      <FontAwesomeIcon
                        icon={faMap}
                        className="dropdown-item-icon"
                      />{" "}
                      Zone
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#item2"
                      id="custom-dropdown-location-master"
                    >
                      <FontAwesomeIcon
                        icon={faGlobe}
                        className="dropdown-item-icon"
                      />{" "}
                      Region
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#item2"
                      id="custom-dropdown-location-master"
                    >
                      <FontAwesomeIcon icon={faCheckCircle} /> State
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#item2"
                      id="custom-dropdown-location-master"
                    >
                      <FontAwesomeIcon icon={faMapMarker} /> Area
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#item2"
                      id="custom-dropdown-location-master"
                    >
                      <FontAwesomeIcon
                        icon={faBuilding}
                        className="dropdown-item-icon"
                      />{" "}
                      Head Quater
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#item2"
                      id="custom-dropdown-location-master"
                    >
                      <FontAwesomeIcon
                        icon={faCity}
                        className="dropdown-item-icon"
                      />{" "}
                      Town/city
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#item2"
                      id="custom-dropdown-location-master"
                    >
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="dropdown-item-icon"
                      />{" "}
                      Beat
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Container>
              <Container style={containerStyle}>
                <Nav className="flex-column">
                  <NavDropdown
                    title={
                      <>
                        <FontAwesomeIcon
                          icon={faFileAlt}
                          className="dropdown-title-icon"
                          style={{ color: "#4f5f69" }}
                        />{" "}
                        <span style={{ color: "#4f5f69" }}>Product Master</span>
                      </>
                    }
                    id="location-master-dropdown"
                  >
                    <NavDropdown.Item href="#item1">
                      Classification
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#item2">Category</NavDropdown.Item>
                    <NavDropdown.Item href="#item2">
                      Product Name
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#item2">SKU Name</NavDropdown.Item>
                    <NavDropdown.Item href="#item2">
                      SKU Rate List
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#item2">
                      Product Rate List Template
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#item2">
                      Product Scheme
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Container>
              <Container style={containerStyle}>
                <Nav className="flex-column">
                  <NavDropdown
                    title={
                      <>
                        <FontAwesomeIcon
                          icon={faClipboardList}
                          className="dropdown-title-icon"
                          style={{ color: "#4f5f69" }}
                        />{" "}
                        <span style={{ color: "#4f5f69" }}>Report</span>
                      </>
                    }
                    id="location-master-dropdown"
                  >
                    <NavDropdown.Item href="#item1">
                      HR Management
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#item2">
                      Outlet Related
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#item2">
                      Secondary Sale Related
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#item2">
                      Performance
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#item2">
                      General Reports
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#item2">
                      Stock/Inventary
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#item2">
                      Distributor Related
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#item2">
                      Target v/s Achievement
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Container>
              <Container style={containerStyle}>
                <Nav className="flex-column">
                  <NavDropdown
                    title={
                      <>
                        <FontAwesomeIcon
                          icon={faClipboardList}
                          className="dropdown-title-icon"
                          style={{ color: "#4f5f69" }}
                        />{" "}
                        <span style={{ color: "#4f5f69" }}>Miscellanious</span>
                      </>
                    }
                    id="location-master-dropdown"
                  >
                    <NavDropdown.Item href="#item1">
                      Export Dump
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#item1">Circular</NavDropdown.Item>
                    <NavDropdown.Item href="#item1">
                      Manual Attendance
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#item1">
                      Manual Tour Plan
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#item1">
                      Manual order Booking
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#item1">
                      User's Live Location
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#item1">
                      User Distance Report
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Container>
              <Container style={containerStyle}>
                <Nav className="flex-column">
                  <NavDropdown
                    title={
                      <>
                        <FontAwesomeIcon
                          icon={faCogs}
                          className="dropdown-title-icon"
                          style={{ color: "#4f5f69" }}
                        />{" "}
                        <span style={{ color: "#4f5f69" }}>setting</span>
                      </>
                    }
                    id="location-master-dropdown"
                  >
                    <NavDropdown.Item href="#item1">
                      <FontAwesomeIcon
                        icon={faMap}
                        className="dropdown-item-icon"
                      />{" "}
                      Zone
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#item2">
                      <FontAwesomeIcon
                        icon={faGlobe}
                        className="dropdown-item-icon"
                        style={{ color: "#4f5f69" }}
                      />{" "}
                      <span style={{ color: "#4f5f69" }}>Region</span>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Container>

              <Container style={containerStyle}>
                <NavDropdown
                  title={<span style={{ color: "#4f5f69" }}>Depo</span>}
                >
                  <NavDropdown.Item href="#item5">Item 5</NavDropdown.Item>
                  <NavDropdown.Item href="#item6">Item 6</NavDropdown.Item>
                </NavDropdown>
              </Container>
            </Nav>
          </div>
        </Card.Body>
        <div className="footer"></div>
      </Card>
    </div>
  );
};

export default SideBar;
