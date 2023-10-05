import React from "react";
import CardRow from "./CardRow";
import Form from "./Form";
import MapCointainer from "./MapCointainer";


const DashboardComponent = () => {
  return (
          <div>
            <Form />
            <CardRow />
            <MapCointainer />
          </div>
  );
};

export default DashboardComponent;
