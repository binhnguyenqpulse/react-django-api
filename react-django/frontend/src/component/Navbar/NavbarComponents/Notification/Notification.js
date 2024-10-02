import React, { useState, useEffect, useRef  }  from 'react'
import './Notification.css'
import { GoBell } from "react-icons/go";

export default function Notification(){
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <div className="dropdown" ref = {dropdownRef}>
      <button className="dropdown-toggle" onClick={toggleMenu}>
      <GoBell />
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <a href="#" className="dropdown-item">Profile</a>
          <a href="#" className="dropdown-item">Settings</a>
          <a href="#" className="dropdown-item">Logout</a>
        </div>
      )}
    </div>
  );
};

