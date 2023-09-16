import React, { useState } from "react";
import { Nav, NavDropdown, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBuilding,
  faStore,
  faMapMarkerAlt,
  faCogs,
  faFileAlt,
  faClipboardList,
  faChevronDown,
  faMap,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div style={{ position: "sticky", top: "0" }}>
      <Card
        style={{ marginLeft: "-15px", height: "100%", position: "stickey" }}
      >
        :
        <Card.Body>
          <hr
            style={{
              marginTop: "26px",
              marginLeft: "-15px",
              marginRight: "-15px",
            }}
          ></hr>
          <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
            <div className="toggle-button" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faHome} />
            </div>
            <Nav className="flex-column">
              <Nav.Link href="#user" style={{ backgroundColor: " #ffe6e6" }}>
                <FontAwesomeIcon icon={faUser} /> User
              </Nav.Link>
              <Nav.Link href="#distributor">
                {" "}
                <FontAwesomeIcon icon={faBuilding} /> Distributor
              </Nav.Link>
              <Nav.Link href="#retailer">
                <FontAwesomeIcon icon={faStore} /> Retailer
              </Nav.Link>
              <Nav className="flex-column">
                <NavDropdown
                  title={
                    <>
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="dropdown-title-icon"
                      />{" "}
                      Location Master
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
                    />{" "}
                    Region
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <NavDropdown title="Product Master">
                <NavDropdown.Item href="#item8">
                  Classification
                </NavDropdown.Item>
                <NavDropdown.Item href="#item9">Category</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Report">
                <NavDropdown title="HR Management">
                  <NavDropdown.Item href="#subitem1">
                    Sub-Item 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#subitem2">
                    Sub-Item 2
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Item href="#item6">
                  Outlet Related
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Miscellaneous">
                <NavDropdown.Item href="#item5">Item 5</NavDropdown.Item>
                <NavDropdown.Item href="#item6">Item 6</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Settings">
                <NavDropdown.Item href="#item5">Item 5</NavDropdown.Item>
                <NavDropdown.Item href="#item6">Item 6</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Depo">
                <NavDropdown.Item href="#item5">Item 5</NavDropdown.Item>
                <NavDropdown.Item href="#item6">Item 6</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SideBar;
