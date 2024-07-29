import React, { useContext } from 'react'
import Nav2 from '../Components/Nav2'
import img from "../../public/Backgroundimg/gall3.jpg"
import Foot from '../Components/Foot'
import Appointmentpopup1 from '../Components/Appointmentpopup1'
import { OtherContext } from '../Contexts/OtherContext'
import { useNavigate } from 'react-router-dom'
import SF from '../Components/SF'
const Aboutus = () => {
  const navigate=useNavigate()
 const {value,authentication}= useContext(OtherContext)
 const [popup,setpop]=value
 const [authen,setauthen]=authentication

 const handlefun=()=>{
  if(authen){
    setpop(true)
  }else{
    navigate("/login")
  }
 }
  return (
    <div>
      <SF/>
      <Appointmentpopup1/>
        <Nav2 name={"About Us"}/>
        <div className='row row-cols-sm-1 row-cols-md-1 row-cols-xl-2 about'>
            <div>
            <h1>A Reputation of 25 Years in the Making</h1>
            <p>  DD’s mission is to enable premium quality care for your luxury car service at affordable pricing . We ensure real time updates for complete car care needs with a fair and transparent pricing mechanism. Skilled technicians, working at our state of the art German technology workshop further ensure that only genuine OEM parts are used for your car care needs.

Customer satisfaction is the core of all initiatives at DD. Online appointment scheduling with door-step, same day pick-up and drop anywhere in Pune is our constant endeavor to maximize customer convenience. Our commitment stands for reliability and unequalled professionalism to provide dealer quality auto-service at a fair price.

This website is owned and operated by DD CAR CARE LLP. DD CAR CARE LLP is a legal name & DD is a brand name.

</p>        
            <button className='button' onClick={()=>handlefun()}>BOOK AN APPOINTMENT</button>
            </div>
            
           <div><img src={img} alt="img" /></div>
             
        </div>
        <Foot/>
    </div>
  )
}

export default Aboutus