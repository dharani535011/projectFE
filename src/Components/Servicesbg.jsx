import React, { useContext } from 'react'
import { OtherContext } from '../Contexts/OtherContext'
import { useNavigate } from 'react-router-dom'
import img from "../../public/Backgroundimg/servicesbg.jpg"
const Servicesbg = ({name}) => {
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
    
    <div className='servicesbg' style={{backgroundColor:"black"}}>
        <img src={img} alt="" />
        <h1>{name}</h1>
        <button onClick={()=>handlefun()}>BOOK AN APPOINTMENT</button>
    </div>
  )
}

export default Servicesbg