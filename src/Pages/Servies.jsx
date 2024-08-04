import React, { useContext } from 'react'
import Whyas from '../Components/Whyas'
import Working from '../Components/Working'
import Gallery from '../Components/Gallery'
import Brands from '../Components/Brands'
import Foot from '../Components/Foot'
import Common from '../Components/Common'
import Nav2 from '../Components/Nav2'
import { useParams } from 'react-router-dom'
import { DataContext } from '../Contexts/DataContext'
import { OtherContext } from '../Contexts/OtherContext'
import Appointmentpopup1 from '../Components/Appointmentpopup1'
import img from "../../public/Backgroundimg/p1.jpg"
const Servies = () => {
  const {value}= useContext(OtherContext)
 const [popup,setpop]=value
  const {service}=useParams()
 const data= useContext(DataContext)
 const para=data.find((val)=>val.head==service)
 
  // (para.img)
  return (
    <div>
      <Appointmentpopup1/>
    <div>
      <Nav2 name={service}/>
    </div>
    <div className='row row-cols-sm-1 row-cols-md-2 custom-des'>
      <div ><h1>{para.head}</h1>
      <h4>{para.para}</h4>
      <button onClick={()=>setpop(true)}>BOOK AN APPOINTMENT</button>
      </div>
      <div ><img src={img} alt="img" /></div>
    </div>
    <Whyas/>
    <Working/>
    <Gallery/>
    <Common/>
    <Brands/>
    <Foot/>
    </div>

  )
}

export default Servies