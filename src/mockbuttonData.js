import React, { useEffect, useState } from 'react';
import { fetchButtonData } from './Api'; 

function App() {
  const [buttonData, setButtonData] = useState([]);

  useEffect(() => {

    fetchButtonData().then((data) => {
      setButtonData(data);
    });
  }, []);

  return (
    <div>
      <h1>Button List</h1>
      <ul>
        {buttonData.map((button) => (
          <li key={button.id}>
            <i className={`fa ${button.icon}`}></i> {button.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
