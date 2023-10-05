import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "./SideBar";
import DashboardComponent from "./DashboardComponent";
import Navbar2 from "./Navbar2";
import CustomNavbar from "./CustomNavbar";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={3} md={2} style={{padding:'0px',}}>
          <SideBar />
        </Col>
        <Col sm={9} md={10} className="p-0">
          <div className="content-cointainer" style={{marginBottom:'70px'}}>
            <Navbar2 />
            <CustomNavbar />
            <DashboardComponent />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
