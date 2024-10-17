import React from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Notfound from "./pages/Notfound"
import ProtectedRoute from "./components/ProtectedRoute"
import MyDashBoard from "./pages/MyDashBoard"
import CreateProject from "./pages/CreateProject"


function Logout(){
  localStorage.clear()
  return <Navigate to = "/login"/>
}

function RegisterAndLogout(){
  localStorage.clear()
  return <Register/>
}


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route
      path = "/"
      element = {
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
      }
      />
      {/* <Route
      path = "/dashboard"
      element = {
        <ProtectedRoute>
          <MyDashBoard/>
        </ProtectedRoute>
      }
      />
      <Route
      path = "/createproject"
      element = {
        <ProtectedRoute>
          <CreateProject/>
        </ProtectedRoute>
      }
      /> */}
            <Route
      path = "/dashboard"
      element = {
          <MyDashBoard/>
      }
      />
      <Route
      path = "/createproject"
      element = {
          <CreateProject/>
      }
      />
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/logout" element = {<Logout/>}/>
      <Route path = "/register" element = {<Register/>}/>
      <Route path = "*" element = {<Notfound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
