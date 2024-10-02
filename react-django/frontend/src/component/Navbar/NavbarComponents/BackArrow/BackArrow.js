import React from 'react'
import './BackArrow.css'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function BackArrow() {
  const history = useNavigate ();

  return (
    <div className='BackArrow' onClick = {() => history(-1)}>
      <IoMdArrowRoundBack />
    </div>
  )
}

export default BackArrow
