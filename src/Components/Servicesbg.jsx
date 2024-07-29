import React, { useContext } from 'react'
import { OtherContext } from '../Contexts/OtherContext'
import { useNavigate } from 'react-router-dom'
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
    
    <div className='servicesbg'>
        <img src="../../public/Backgroundimg/bgcar1.jpg" alt="" />
        <h1>{name}</h1>
        <button onClick={()=>handlefun()}>BOOK AN APPOINTMENT</button>
    </div>
  )
}

export default Servicesbg