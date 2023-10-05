import React, { useState } from "react";
import { Col,Card, Button } from "react-bootstrap";
import {
  faUser,
  faUsers,
  faWarehouse,
  faLocationDot,
  faPhone,
  faClipboardUser,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import CardTables from "./CardTables";


function CardRow() {
  const [showTable, setShowTable] = useState(false);

  const handleMoreButtonClick = () => {
    setShowTable(!showTable);
  };
  return (
    <div className="container" style={{marginRight:'-100px',}}>
     <Col sm={9} md={10} className="p-0">
      <div className="row">
        <div className="col-md-3 mb-4">
          <Card
            className="custom-card"
            id="mobilecard"
            style={{
              backgroundImage:
                " linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)",
              boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.2)",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 transparent";
              e.currentTarget.style.backgroundImage =
                " linear-gradient(to bottom, #67a6e4 0%, #67a6e4 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0px 4px 8px rgba(0, 0, 0, 0.2)";
              e.currentTarget.style.backgroundImage =
                "linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)";
            }}
          >
            <Card.Body>
              <div className="d-flex align-items-center">
                {" "}
                <div>
                  <FontAwesomeIcon icon={faUsers} size="2x" />
                </div>
                <div className="ml-3">
                  {" "}
                  <Card.Title
                    style={{
                      color: "#212529",
                      fontSize: "15px",
                    }}
                  >
                    Total Active Users
                  </Card.Title>
                  <Card.Text style={{ marginLeft: "20px", fontSize: "20px" }}>
                    337
                  </Card.Text>
                </div>
              </div>
            </Card.Body>

            <Button
              variant="secondary"
              className="more-button btn-sm"
              style={{
                border: "none",
                backgroundColor: "#ffff",
                color: "black",
              }}
              onClick={handleMoreButtonClick}
            >
              More
            </Button>
          </Card>
          {showTable && <CardTables />}
        </div>
        <div className="col-md-3 mb-4">
          <Card
            className="custom-card"
            id="mobilecard"
            style={{
              backgroundImage:
                " linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)",
              boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.2)",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 transparent";
              e.currentTarget.style.backgroundImage =
                " linear-gradient(to bottom, #67a6e4 0%, #67a6e4 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0px 4px 8px rgba(0, 0, 0, 0.2)";
              e.currentTarget.style.backgroundImage =
                "linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)";
            }}
          >
            <Card.Body>
              <div className="d-flex align-items-center">
                {" "}
                <div>
                  <FontAwesomeIcon icon={faWarehouse} size="2x" />
                </div>
                <div className="ml-3">
                  {" "}
                  <Card.Title
                    style={{
                      color: "#212529",
                      fontSize: "15px",
                      marginLeft: "20px",
                    }}
                  >
                    Total Depot
                  </Card.Title>
                  <Card.Text style={{ marginLeft: "20px", fontSize: "20px" }}>
                    337
                  </Card.Text>
                </div>
              </div>
            </Card.Body>

            <Button
              variant="secondary"
              className="more-button btn-sm"
              style={{
                border: "none",
                backgroundColor: "#ffff",
                color: "black",
              }}
            >
              More
            </Button>
          </Card>
        </div>

        <div className="col-md-3 mb-4">
          <Card
            className="custom-card"
            id="mobilecard"
            style={{
              backgroundImage:
                " linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)",
              boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.2)",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 transparent";
              e.currentTarget.style.backgroundImage =
                " linear-gradient(to bottom, #67a6e4 0%, #67a6e4 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0px 4px 8px rgba(0, 0, 0, 0.2)";
              e.currentTarget.style.backgroundImage =
                "linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)";
            }}
          >
            <Card.Body>
              <div className="d-flex align-items-center">
                {" "}
                <div>
                  <FontAwesomeIcon icon={faUsers} size="2x" />
                </div>
                <div className="ml-3">
                  {" "}
                  <Card.Title
                    style={{
                      color: "#212529",
                      fontSize: "15px",
                      marginLeft: "20px",
                    }}
                  >
                    Total Distributor
                  </Card.Title>
                  <Card.Text style={{ marginLeft: "20px", fontSize: "20px" }}>
                    337
                  </Card.Text>
                </div>
              </div>
            </Card.Body>

            <Button
              variant="secondary"
              className="more-button btn-sm"
              style={{
                border: "none",
                backgroundColor: "#ffff",
                color: "black",
              }}
            >
              More
            </Button>
          </Card>
        </div>
        <div className="col-md-3 mb-4">
          <Card
            className="custom-card"
            id="mobilecardrow"
            style={{
              backgroundImage:
                " linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)",
              boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.2)",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 transparent";
              e.currentTarget.style.backgroundImage =
                " linear-gradient(to bottom, #67a6e4 0%, #67a6e4 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0px 4px 8px rgba(0, 0, 0, 0.2)";
              e.currentTarget.style.backgroundImage =
                "linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)";
            }}
          >
            <Card.Body>
              <div className="d-flex align-items-center">
                {" "}
                <div>
                  <FontAwesomeIcon icon={faUsers} size="2x" />
                </div>
                <div className="ml-3">
                  {" "}
                  <Card.Title
                    style={{
                      color: "#212529",
                      fontSize: "15px",
                    }}
                  >
                    Total Active Users
                  </Card.Title>
                  <Card.Text style={{ marginLeft: "20px", fontSize: "20px" }}>
                    337
                  </Card.Text>
                </div>
              </div>
            </Card.Body>

            <Button
              variant="secondary"
              className="more-button btn-sm"
              style={{
                border: "none",
                backgroundColor: "#ffff",
                color: "black",
              }}
            >
              More
            </Button>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 mb-4">
          <Card
            className="custom-card"
            id="mobilecard"
            style={{
              backgroundImage:
                " linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)",
              boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.2)",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 transparent";
              e.currentTarget.style.backgroundImage =
                " linear-gradient(to bottom, #67a6e4 0%, #67a6e4 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0px 4px 8px rgba(0, 0, 0, 0.2)";
              e.currentTarget.style.backgroundImage =
                "linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)";
            }}
          >
            <Card.Body>
              <div className="d-flex align-items-center">
                {" "}
                <div>
                  <FontAwesomeIcon icon={faLocationDot} size="2x" />
                </div>
                <div className="ml-3">
                  {" "}
                  <Card.Title
                    style={{
                      color: "#212529",
                      fontSize: "15px",
                      marginLeft: "20px",
                    }}
                  >
                    Total Beat
                  </Card.Title>
                  <Card.Text style={{ marginLeft: "20px", fontSize: "20px" }}>
                    337
                  </Card.Text>
                </div>
              </div>
            </Card.Body>

            <Button
              variant="secondary"
              className="more-button btn-sm"
              style={{
                border: "none",
                backgroundColor: "#ffff",
                color: "black",
              }}
            >
              More
            </Button>
          </Card>
        </div>
        <div className="col-md-3 mb-4">
          <Card
            className="custom-card"
            id="mobilecard"
            style={{
              backgroundImage:
                " linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)",
              boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.2)",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 transparent";
              e.currentTarget.style.backgroundImage =
                " linear-gradient(to bottom, #67a6e4 0%, #67a6e4 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0px 4px 8px rgba(0, 0, 0, 0.2)";
              e.currentTarget.style.backgroundImage =
                "linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)";
            }}
          >
            <Card.Body>
              <div className="d-flex align-items-center">
                {" "}
                <div>
                  <FontAwesomeIcon icon={faPhone} size="2x" />
                </div>
                <div className="ml-3">
                  {" "}
                  <Card.Title
                    style={{
                      color: "#212529",
                      fontSize: "15px",
                      marginLeft: "20px",
                    }}
                  >
                    Total call
                  </Card.Title>
                  <Card.Text style={{ marginLeft: "20px", fontSize: "20px" }}>
                    4587
                  </Card.Text>
                </div>
              </div>
            </Card.Body>

            <Button
              variant="secondary"
              className="more-button btn-sm"
              style={{
                border: "none",
                backgroundColor: "#ffff",
                color: "black",
              }}
            >
              More
            </Button>
          </Card>
        </div>
        <div className="col-md-3 mb-4">
          <Card
            className="custom-card"
            id="mobilecard"
            style={{
              backgroundImage:
                " linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)",
              boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.2)",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 transparent";
              e.currentTarget.style.backgroundImage =
                " linear-gradient(to bottom, #67a6e4 0%, #67a6e4 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0px 4px 8px rgba(0, 0, 0, 0.2)";
              e.currentTarget.style.backgroundImage =
                "linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)";
            }}
          >
            <Card.Body>
              <div className="d-flex align-items-center">
                {" "}
                <div>
                  <FontAwesomeIcon icon={faUser} size="2x" />
                </div>
                <div className="ml-3">
                  {" "}
                  <Card.Title
                    style={{
                      color: "#212529",
                      fontSize: "15px",
                      marginLeft: "20px",
                    }}
                  >
                    Total Beat
                  </Card.Title>
                  <Card.Text style={{ marginLeft: "20px", fontSize: "20px" }}>
                    337
                  </Card.Text>
                </div>
              </div>
            </Card.Body>

            <Button
              variant="secondary"
              className="more-button btn-sm"
              style={{
                border: "none",
                backgroundColor: "#ffff",
                color: "black",
              }}
            >
              More
            </Button>
          </Card>
        </div>
        <div className="col-md-3 mb-4">
          <Card
            className="custom-card"
            id="mobilecardrow"
            style={{
              backgroundImage:
                " linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)",
              boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.2)",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 transparent";
              e.currentTarget.style.backgroundImage =
                " linear-gradient(to bottom, #67a6e4 0%, #67a6e4 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0px 4px 8px rgba(0, 0, 0, 0.2)";
              e.currentTarget.style.backgroundImage =
                "linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)";
            }}
          >
            <Card.Body>
              <div className="d-flex align-items-center">
                {" "}
                <div>
                  <FontAwesomeIcon icon={faClipboardUser} size="2x" />
                </div>
                <div className="ml-3">
                  {" "}
                  <Card.Title
                    style={{
                      color: "#212529",
                      fontSize: "15px",
                    }}
                  >
                    Today's Attendance
                  </Card.Title>
                  <Card.Text style={{ marginLeft: "20px", fontSize: "20px" }}>
                    337
                  </Card.Text>
                </div>
              </div>
            </Card.Body>

            <Button
              variant="secondary"
              className="more-button btn-sm"
              style={{
                border: "none",
                backgroundColor: "#ffff",
                color: "black",
              }}
            >
              More
            </Button>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 mb-4">
          <Card
            className="custom-card"
            id="mobilecard"
            style={{
              backgroundImage:
                " linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)",
              boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.2)",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 transparent";
              e.currentTarget.style.backgroundImage =
                " linear-gradient(to bottom, #67a6e4 0%, #67a6e4 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0px 4px 8px rgba(0, 0, 0, 0.2)";
              e.currentTarget.style.backgroundImage =
                "linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)";
            }}
          >
            <Card.Body>
              <div className="d-flex align-items-center">
                {" "}
                <div>
                  <FontAwesomeIcon icon={faMobileScreen} size="2x" />
                </div>
                <div className="ml-3">
                  {" "}
                  <Card.Title
                    style={{
                      color: "#212529",
                      fontSize: "15px",
                    }}
                  >
                    Distributor Coverage
                  </Card.Title>
                  <Card.Text style={{ marginLeft: "20px", fontSize: "20px" }}>
                    337
                  </Card.Text>
                </div>
              </div>
            </Card.Body>

            <Button
              variant="secondary"
              className="more-button btn-sm"
              style={{
                border: "none",
                backgroundColor: "#ffff",
                color: "black",
              }}
            >
              More
            </Button>
          </Card>
        </div>
        <div className="col-md-3 mb-4">
          <Card
            className="custom-card"
            id="mobilecard"
            style={{
              backgroundImage:
                " linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)",
              boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.2)",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 transparent";
              e.currentTarget.style.backgroundImage =
                " linear-gradient(to bottom, #67a6e4 0%, #67a6e4 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0px 4px 8px rgba(0, 0, 0, 0.2)";
              e.currentTarget.style.backgroundImage =
                "linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)";
            }}
          >
            <Card.Body>
              <div className="d-flex align-items-center">
                {" "}
                <div>
                  <FontAwesomeIcon icon={faMobileScreen} size="2x" />
                </div>
                <div className="ml-3">
                  {" "}
                  <Card.Title
                    style={{
                      color: "#212529",
                      fontSize: "15px",
                      marginLeft: "20px",
                    }}
                  >
                    Retailer Coverage
                  </Card.Title>
                  <Card.Text style={{ marginLeft: "20px", fontSize: "20px" }}>
                    337
                  </Card.Text>
                </div>
              </div>
            </Card.Body>

            <Button
              variant="secondary"
              className="more-button btn-sm"
              style={{
                border: "none",
                backgroundColor: "#ffff",
                color: "black",
              }}
            >
              More
            </Button>
          </Card>
        </div>
        <div className="col-md-3 mb-4">
          <Card
            className="custom-card"
            id="mobilecard"
            style={{
              backgroundImage:
                " linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)",
              boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.2)",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 transparent";
              e.currentTarget.style.backgroundImage =
                " linear-gradient(to bottom, #67a6e4 0%, #67a6e4 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0px 4px 8px rgba(0, 0, 0, 0.2)";
              e.currentTarget.style.backgroundImage =
                "linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)";
            }}
          >
            <Card.Body>
              <div className="d-flex align-items-center">
                {" "}
                <div>
                  <FontAwesomeIcon icon={faMobileScreen} size="2x" />
                </div>
                <div className="ml-3">
                  {" "}
                  <Card.Title
                    style={{
                      color: "#212529",
                      fontSize: "15px",
                      marginLeft: "20px",
                    }}
                  >
                    Beat Coverage
                  </Card.Title>
                  <Card.Text style={{ marginLeft: "20px", fontSize: "20px" }}>
                    337
                  </Card.Text>
                </div>
              </div>
            </Card.Body>

            <Button
              variant="secondary"
              className="more-button btn-sm"
              style={{
                border: "none",
                backgroundColor: "#ffff",
                color: "black",
              }}
            >
              More
            </Button>
          </Card>
        </div>

        <div className="col-md-3 mb-4">
          <Card
            className="custom-card"
            id="mobilecardrow"
            style={{
              backgroundImage:
                " linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)",
              boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.2)",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 transparent";
              e.currentTarget.style.backgroundImage =
                " linear-gradient(to bottom, #67a6e4 0%, #67a6e4 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0px 4px 8px rgba(0, 0, 0, 0.2)";
              e.currentTarget.style.backgroundImage =
                "linear-gradient(to bottom, #67a6e4 0%, #d4e6f7 100%)";
            }}
          >
            <Card.Body>
              <div className="d-flex align-items-center">
                {" "}
                <div>
                  <FontAwesomeIcon icon={faPhone} size="2x" />
                </div>
                <div className="ml-3">
                  {" "}
                  <Card.Title
                    style={{
                      color: "#212529",
                      fontSize: "15px",
                      marginLeft: "20px",
                    }}
                  >
                    Productive Call
                  </Card.Title>
                  <Card.Text style={{ marginLeft: "20px", fontSize: "20px" }}>
                    337
                  </Card.Text>
                </div>
              </div>
            </Card.Body>

            <Button
              variant="secondary"
              className="more-button btn-sm"
              style={{
                border: "none",
                backgroundColor: "#ffff",
                color: "black",
              }}
            >
              More
            </Button>
          </Card>
        </div>
      </div>
      </Col>
    </div>
  );
};

export default CardRow;
