import React from 'react';
import './style.css'; 
import Navbar2 from './Navbar2'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './MenuBar';
import CardRow from './CardRow';


function App() {
  return (
    <div className="App">
      <Navbar2 />
      <MenuBar />
      <CardRow />
      <div className="container">
       
      </div>
    </div>
  );
}

export default App;
