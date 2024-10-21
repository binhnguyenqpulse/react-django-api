import React from 'react'
import Form from '../components/Form'
import NavBar from '../components/NavBar'

function Register() {
  return (
    <>
    <NavBar/>
    <Form route = "user-accounts/" method = "register"/>
    </>
  )
}

export default Register
