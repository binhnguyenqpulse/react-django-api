import React from 'react'
import Form from '../components/Form'
import NavBar from '../components/NavBar'

function Login() {
  return (
    <>
    <NavBar/>
      <Form route = "api/token/" method = "login"/>
      </>
  )
}

export default Login
