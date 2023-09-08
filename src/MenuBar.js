import React from 'react';
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartBar } from "@fortawesome/free-solid-svg-icons";

const MenuBar = () => {
  return (
    <Navbar expand="lg" variant="light">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand href="#home" style={{ marginLeft: "10px" }}>
          <FontAwesomeIcon icon={faHome} />
        </Navbar.Brand>
        <Nav.Link href="#dashboard" className="dashboard-link" style={{ marginLeft: '20px' }}>
          <FontAwesomeIcon icon={faChartBar} /> Dashboard
        </Nav.Link>
        <Nav className="mr-auto" style={{ marginLeft: '20px' }}>
          <Nav.Link href="#user" style={{ marginLeft: '20px' }}>User</Nav.Link>
          <Nav.Link href="#distributor" style={{ marginLeft: '20px' }}>Distributor</Nav.Link>
          <Nav.Link href="#retailer" style={{ marginLeft: '20px' }}>Retailer</Nav.Link>
          <NavDropdown title="Location Master" id="location-master-dropdown" style={{ marginLeft: '20px' }}>
            <NavDropdown.Item href="#item1" className="custom-dropdown-item">zone</NavDropdown.Item>
            <NavDropdown.Item href="#item2" className="custom-dropdown-item">Region</NavDropdown.Item>
            <NavDropdown.Item href="#item3" className="custom-dropdown-item">State</NavDropdown.Item>
            <NavDropdown.Item href="#item4" className="custom-dropdown-item">Area</NavDropdown.Item>
            <NavDropdown.Item href="#item5" className="custom-dropdown-item">Head Quater</NavDropdown.Item>
            <NavDropdown.Item href="#item6" className="custom-dropdown-item">Town/City</NavDropdown.Item>
            <NavDropdown.Item href="#item7" className="custom-dropdown-item">Beat</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Product Master" id="product-master-dropdown"style={{marginLeft:'20px',}}>
            <NavDropdown.Item href="#item8">Classification</NavDropdown.Item>
            <NavDropdown.Item href="#item9">Category</NavDropdown.Item>
            <NavDropdown.Item href="#item10">Product Name</NavDropdown.Item>
            <NavDropdown.Item href="#item11">SKU Name</NavDropdown.Item>
            <NavDropdown.Item href="#item12">SKU Rate List</NavDropdown.Item>
            <NavDropdown.Item href="#item13">Product Rate List</NavDropdown.Item>
            <NavDropdown.Item href="#item14">Template</NavDropdown.Item>
            <NavDropdown.Item href="#item15">Product Scheme</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Report" id="report-dropdown" style={{ marginLeft: '20px' }}>
            <NavDropdown title="HR Management" className="nested-dropdown" id="hr-management-dropdown">
           
              <NavDropdown.Item href="#subitem1">Sub-Item 1</NavDropdown.Item>
              <NavDropdown.Item href="#subitem2">Sub-Item 2</NavDropdown.Item>
            
            </NavDropdown>
            <NavDropdown.Item href="#item6">Outlet Related</NavDropdown.Item>
            <NavDropdown.Item href="#item6">Secondary Sale Related</NavDropdown.Item>
            <NavDropdown.Item href="#item6">Performance</NavDropdown.Item>
            <NavDropdown.Item href="#item6">General Reports</NavDropdown.Item>
            <NavDropdown.Item href="#item6">Stock/Inventory</NavDropdown.Item>
            <NavDropdown.Item href="#item6">Distributor Related </NavDropdown.Item>
            <NavDropdown.Item href="#item6">Target v/s Achievement</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Miscellaneous" id="Miscellaneous" style={{ marginLeft: '20px' }}>
            <NavDropdown.Item href="#item5">Item 5</NavDropdown.Item>
            <NavDropdown.Item href="#item6">Item 6</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Settings" id="Settings" style={{ marginLeft: '20px' }}>
            <NavDropdown.Item href="#item5">Item 5</NavDropdown.Item>
            <NavDropdown.Item href="#item6">Item 6</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Depo" id="Depo" style={{ marginLeft: '20px' }} >
            <NavDropdown.Item href="#item5">Item 5</NavDropdown.Item>
            <NavDropdown.Item href="#item6">Item 6</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MenuBar;
