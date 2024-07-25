import React, { useContext } from 'react'
import { OtherContext } from '../Contexts/OtherContext'
import Appointmentpopup1 from './Appointmentpopup1'

const Gallery = () => {
  const {value}= useContext(OtherContext)
 const [popup,setpop]=value
  return (
    <>
    <Appointmentpopup1/>
    <div className='gallery'><h1>
     
        Gallery
        </h1>
        <div className='box'>
        <img src={`../../public/backgroundimg/gall1.jpg`} alt="img" />
        <img src={`../../public/backgroundimg/gall2.jpg`} alt="img" />
        <img src={`../../public/backgroundimg/gall3.jpg`} alt="img" />
        <img src={`../../public/backgroundimg/gall4.jpg`} alt="img" />
        <img src={`../../public/backgroundimg/gall5.jpg`} alt="img" />
        <img src={`../../public/backgroundimg/enginebg.webp`} alt="img" />
        </div>
       <button className='button' onClick={()=>setpop(true)}>BOOK AN APPOINTMENT</button>
        </div></>
  )
}

export default Gallery