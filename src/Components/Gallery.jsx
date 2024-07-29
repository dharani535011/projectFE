import React, { useContext } from 'react'
import { OtherContext } from '../Contexts/OtherContext'
import Appointmentpopup1 from './Appointmentpopup1'
import img  from "../../public/Backgroundimg/gall1.jpg"   
import img2 from "../../public/Backgroundimg/gall2.jpg" 
import img3 from "../../public/Backgroundimg/gall3.jpg" 
import img4 from "../../public/Backgroundimg/gall4.jpg"  
import img5 from "../../public/Backgroundimg/gall5.jpg" 
import img6 from "../../public/Backgroundimg/speedo.jpg" 



const Gallery = () => {
  const {value}= useContext(OtherContext)
 const [popup,setpop]=value
  return (
    <>
    <Appointmentpopup1/>
    <div className='gallery' ><h1>
     
        Gallery
        </h1>
        <div className='box'>
        <img src={img} alt="img" />
        <img src={img2} alt="img" />
        <img src={img3} alt="img" />
        <img src={img4} alt="img" />
        <img src={img5} alt="img" />
        <img src={img6} alt="img" />
        </div>
       <button className='button' onClick={()=>setpop(true)}>BOOK AN APPOINTMENT</button>
        </div></>
  )
}

export default Gallery