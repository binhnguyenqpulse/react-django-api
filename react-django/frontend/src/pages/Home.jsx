import {useState, useEffect} from 'react'
import "../styles/Home.css"
import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'

function Home() {

  return (
    <div>
        <NavBar/>
        <div>
          <Sidebar/>
        </div>
    </div>
  )
}

export default Home
