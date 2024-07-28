import React, { useContext } from 'react'
import Home from "./Pages/Home"
import "./App.css"
import { Navigate, Route, Routes } from 'react-router-dom'
import Servies from './Pages/Servies'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Appointment from './Pages/Appointment'
import Users from './Pages/Users'
import Userhistory from './Pages/Userhistory'
import Vehiclehistory from './Pages/Vehiclehistory'
import Profile from './Pages/Profile'
import Aboutus from './Pages/Aboutus'
import Resetpass from './Pages/Resetpass'
import { OtherContext } from './Contexts/OtherContext'
const App = () => {
  const {authentication}=useContext(OtherContext)
  const [authen,setauthen]=authentication
  
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services/:service' element={authen?<Servies/>:<Navigate to="/login"/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/appointments' element={authen?<Appointment/>:<Navigate to="/login"/>}/>
        <Route path='/users' element={authen?<Users/>:<Navigate to="/login"/>}/>
        <Route path='/userhistory' element={authen?<Userhistory/>:<Navigate to="/login"/>}/>
        <Route path='/vehiclehistory' element={authen?<Vehiclehistory/>:<Navigate to="/login"/>}/>
        <Route path='/profile' element={authen?<Profile/>:<Navigate to="/login"/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/resetpassword' element={<Resetpass/>}/>
      </Routes>
      
    </div>
  )
}

export default App