import React, { Component } from 'react';
import './style.css';
import { FaSearch } from 'react-icons/fa';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateRange: '',
      state: '',
      region: '',
      department: '',
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
      <div className="login-form" style={{marginTop:'10px'}}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dateRange">Date Range:</label>
              <input
                type="text"
                id="dateRange"
                name="dateRange"
                value={this.state.dateRange}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State:</label>
              <input
                type="text"
                id="state"
                name="state"
                value={this.state.state}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="region">Region:</label>
              <input
                type="text"
                id="region"
                name="region"
                value={this.state.region}
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
            <button type="submit" className="find-button">
              <FaSearch /> Find
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
