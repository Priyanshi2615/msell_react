import React, { Component } from "react";
import "./style.css";
import { FaSearch } from "react-icons/fa";
import { Table } from "react-bootstrap";


class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchbyname: "",
      region: "",
      state: "",
      headquater: "",
      towncity: "",
      user: "",
      role: "",
      userappversion: "",
      depaertment: "",
      status: "",
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
      <div className="login-form" id="login" style={{ marginTop: "10px" }}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row" id="logininput">
            <div className="form-group" style={{ overflowX: "auto" }}>
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Image</th>
              <th>State</th>
              <th>Headquarter</th>
              <th>Town/City</th>
              <th>Department</th>
              <th>Emp code</th>
              <th>User Name</th>
              <th>Details</th>
              <th>Username</th>
              <th>Password</th>
              <th>Role</th>
              <th>Senior Name</th>
              <th>Mobile No.</th>
              <th>Residential Address</th>
              <th>Email</th>
              <th>Created Date</th>
              <th>Date of Joining</th>
              <th>De-Activated Date</th>
              <th>Last Sync Date</th>
              <th>App Version</th>
              <th>Imei</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>East</td>
              <td>New York</td>
              <td>HQ1</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default UserForm;
