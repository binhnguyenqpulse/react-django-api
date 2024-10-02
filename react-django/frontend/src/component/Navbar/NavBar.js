import React from 'react'
import './NavBar.css'
import SearchBar from './NavbarComponents/SearchBar/SearchBar'
import DottedMenu from './NavbarComponents/DottedMenu/DottedMenu';
import Notification from './NavbarComponents/Notification/Notification.js';
import BackArrow from './NavbarComponents/BackArrow/BackArrow.js';
import Avatar from './NavbarComponents/Avatar/Avatar.js';
import Logo from './NavbarComponents/Logo/Logo.js';

export default function NavBar() {
  return (
    <div className='NavBar'>
      <Logo/>
      <div className='Nav'>
      <BackArrow />
      <SearchBar/>
      <DottedMenu/>
      <Notification/>
      <Avatar/>
      </div>
    </div>
  )
}

