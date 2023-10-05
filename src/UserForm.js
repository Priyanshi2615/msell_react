import React, { Component } from 'react';
import './style.css';
import { FaSearch } from 'react-icons/fa';
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "./SideBar";
import Navbar2 from "./Navbar2";


class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchbyname: '',
      region: '',
      state: '',
      headquater: '',
      towncity: '',
      user: '',
      role: '',
      userappversion: '',
      depaertment: '',
      status:'',

    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
        <Container fluid style={{marginTop:'-175px', width:'1527px'}}>
        <Row>
          <Col sm={3} md={2} style={{padding:'0px',}}>
            <SideBar />
          </Col>
          <Col sm={9} md={10} className="p-0">
            <div className="content-cointainer" style={{marginBottom:'70px'}}>
              <Navbar2 />
              <div className="login-form" id="login" style={{ marginTop: '10px' }}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row" id="logininput">
            <div className="form-group" style={{ overflowX: 'auto' }}>
              <label htmlFor="dateRange">Search by name:</label>
              <input
                type="text"
                id="dateRange"
                name="dateRange"
                value={this.state.dateRange}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">Region:</label>
              <input
                type="text"
                id="state"
                name="state"
                value={this.state.state}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="region">State:</label>
              <input
                type="text"
                id="region"
                name="region"
                value={this.state.region}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">Head Quater:</label>
              <input
                type="text"
                id="department"
                name="department"
                value={this.state.department}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">Town/City:</label>
              <input
                type="text"
                id="department"
                name="department"
                value={this.state.department}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">User:</label>
              <input
                type="text"
                id="department"
                name="department"
                value={this.state.department}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">Role:</label>
              <input
                type="text"
                id="department"
                name="department"
                value={this.state.department}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">User App Version:</label>
              <input
                type="text"
                id="department"
                name="department"
                value={this.state.department}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">Department:</label>
              <input
                type="text"
                id="department"
                name="department"
                value={this.state.department}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">Status:</label>
              <input
                type="text"
                id="department"
                name="department"
                value={this.state.department}
                onChange={this.handleInputChange}
              />
            </div>
            <button type="submit" className="find-button">
              <FaSearch /> Find
            </button>
          </div>
        </form>
      </div>
            </div>
          </Col>
        </Row>
      </Container>
      
    );
  }
}

export default UserForm;
