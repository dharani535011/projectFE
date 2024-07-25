import React from 'react'
import Nav from '../Components/Nav'
import Slides from '../Components/Slides'
import Common from '../Components/Common'
import Twocom from '../Components/Twocom'
import Threecom from '../Components/Threecom'
import Brands from '../Components/Brands'
import Foot from '../Components/Foot'
import Appointmentpopup1 from '../Components/Appointmentpopup1'

const Home = () => {
  
  return (
    <div>
      <Appointmentpopup1/>
      <Nav/>
    <Slides/>
    <div className='empty'></div>
    <Common/>
    <Twocom/>
    <Threecom/>
    <Brands/>
    <Foot/>
    </div>
  )
}

export default Home