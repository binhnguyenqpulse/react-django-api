import React from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import './BasePage.css';
import NavBar from '../../component/Navbar/NavBar';

function BasePage() {
  return (
    <div className="container1">
      <NavBar/>
      <div className="container2">
        <div className="container21"><Sidebar/></div>
        <div className="container22">
        </div>
      </div>
    </div>
  );
}

export default BasePage;
