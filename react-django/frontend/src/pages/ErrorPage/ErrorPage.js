import React from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import './ErrorPage.css';
import NavBar from '../../component/Navbar/NavBar';

function ErrorPage() {
  return (
    <div className="container1">
      <NavBar/>
      <div className="container2">
        <div className="container21"><Sidebar/></div>
        <div className="container22">
          Page doesn't Exist!!!
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
