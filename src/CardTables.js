import React from 'react';
import { Card } from 'react-bootstrap';
import './table.css';

function CardTables({ onClose }) {
  const handleCloseClick = () => {
    console.log(23445);
    window.history.back();
  };

  return (
    <div className="table-overlay" id="cardtable">
      <Card className="table-card">
        <Card.Header className="table-header">Sales Team Details</Card.Header>
        <Card.Body>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>User Name</th>
                  <th>Mobile No.</th>
                  <th>Role</th>
                  <th>State</th>
                  <th>Created on</th>
                  <th>De-Activated Date</th>
                  <th>Attendance Count</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>123-456-7890</td>
                  <td>Sales Rep</td>
                  <td>New York</td>
                  <td>2023-09-21</td>
                  <td>2023-09-25</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card.Body>
        <Card.Footer>
          <button className="btn btn-primary" type="button" onClick={handleCloseClick}>
            Close
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default CardTables;
