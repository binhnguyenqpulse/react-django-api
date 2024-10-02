import React from 'react'
import KymaniLogo from './KymaniLogo.jpg';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className='logo'>
      <Link to = "/">
      <img src= {KymaniLogo} height={90} width={330}/>
      </Link>
    </div>
  )
}

export default Logo
