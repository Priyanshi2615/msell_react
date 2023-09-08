import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import './style.css'; 

const CustomCard = () => {
  return (
    <Card className="custom-card">
    <Card.Body>
      <FontAwesomeIcon icon={faUser} size="2x" />
        <Card.Title></Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>

      <Button variant="secondary" className="more-button btn-sm">
        More
      </Button>
    </Card>
  );
};

export default CustomCard;
