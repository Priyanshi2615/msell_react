import React from 'react';
import CustomCard from './CustomCard'; // Import your CustomCard component
import './style.css'; // Import your custom CSS for the card row

const CardRow = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <CustomCard />
        </div>
        <div className="col-md-4">
          <CustomCard />
        </div>
        <div className="col-md-4">
          <CustomCard />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <CustomCard />
        </div>
        <div className="col-md-4">
          <CustomCard />
        </div>
        <div className="col-md-4">
          <CustomCard />
        </div>
      </div>
    </div>
  );
};

export default CardRow;
