import React, { useState, useEffect, useRef   }  from 'react'
import './DottedMenu.css'
import { HiDotsVertical } from "react-icons/hi";

const DottedMenu = () => {
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
      <div className="dropdown-toggle" onClick={toggleMenu}>
        <HiDotsVertical/>
      </div >
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

export default DottedMenu;

