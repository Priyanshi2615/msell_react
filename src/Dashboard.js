import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "./SideBar";
import CardRow from "./CardRow";
import Form from "./Form";
import MapCointainer from "./MapCointainer";
import Navbar2 from "./Navbar2";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={3} md={2} className="bg-light">
          <SideBar />
        </Col>
        <Col sm={9} md={10} className="p-0">
        <Navbar2 />
       
          <Form />
          <CardRow />
          <MapCointainer />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
