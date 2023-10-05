import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBell,
  faBars,
  faSignOutAlt,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";
import { Dropdown } from "react-bootstrap";

function CustomNavbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSideBar, setShowSideBar] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleBellClick = () => {
    setShowForm(!showForm);
    if (showForm) {
      setNotificationCount(0);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  const handleMenuClick = () => {
    setShowSideBar(!showSideBar);
    console.log('true');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const renderMobileNavbar = () => {
    return (
      <Navbar bg="dark" variant="dark" style={{overFlowX:'hidden',}}>
        <div className="header">
          <div className="logo-dropdown">
            <Dropdown>
              <Dropdown.Toggle
                variant="dark"
                id="dropdown-basic"
                onClick={toggleDropdown}
              >
                <img
                  src="/images/mSELL_logo.png"
                  alt="Logo"
                  style={{ width: "40px", cursor: "pointer" }}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu show={isDropdownOpen}>
                <Dropdown.Item href="#/profile">
                  <FontAwesomeIcon icon={faUser} /> Profile
                </Dropdown.Item>
                <Dropdown.Item href="#/settings">
                  <FontAwesomeIcon icon={faCog} /> Settings
                </Dropdown.Item>
                <Dropdown.Item href="#/logout">
                  <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <Nav className="mr-auto">
          <Nav.Link href="#search" style={{ color: "white" }}>
            <input
              type="text"
              placeholder="Search..."
              style={{ padding: "3px" }}
            />
          </Nav.Link>
          <Nav.Link
            href="#notifications"
            style={{ color: "white", padding: "10px" }}
          >
            <FontAwesomeIcon icon={faBell} onClick={handleBellClick} />
            {notificationCount > 0 && (
              <span className="notification-badge">{notificationCount}</span>
            )}
          </Nav.Link>

          {showForm && (
            <div
              className="notification-form"
              style={{ marginTop: "15px", marginLeft: "330px" }}
            >
              <div className="notification">
                <p>This is a sample notification message.</p>
              </div>

              <div className="notification">
                <p>Another notification goes here.</p>
              </div>

              <div className="notification">
                <p>One more notification.</p>
              </div>
            </div>
          )}
          <Nav.Link style={{ padding: "10px" }}>
            <FontAwesomeIcon
              icon={faBars}
              onClick={handleMenuClick}
              className="icon"
            />
          
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  };

  return (
    <div>
      {windowWidth <= 768 ? (
        <>
          {renderMobileNavbar()}
          {showSideBar && <SideBar />}
        </>
      ) : null}
    </div>
  );
}

export default CustomNavbar;
