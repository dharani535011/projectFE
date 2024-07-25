import React, { useState, useEffect, useContext } from 'react'
import img from "../../public/Backgroundimg/bgcar1.jpg"
import img2 from "../../public/Backgroundimg/new1.jpg"
import img3 from "../../public/Backgroundimg/new2.jpg"
import img4 from "../../public/Backgroundimg/gall1.jpg"
import { OtherContext } from '../Contexts/OtherContext'
import { useNavigate } from 'react-router-dom'
const slides = [
    { url: img, alt: 'Slide 1',letter:"Professional Auto Repair & Maintenance" },
    { url: img2, alt: 'Slide 2',letter:"Luxury Car Care Delivered"  },
    { url: img3, alt: 'Slide 3' ,letter:"Performance Without Compromise" },
    { url: img4, alt: 'Slide 4' ,letter:"Prioritize Our Customer Satisfaction" },
  ]
const Slides = () => {
  const navigate=useNavigate()
  const {value ,authentication}= useContext(OtherContext)
  const [popup,setpop]=value
  const [authen,setauthen]=authentication
    const [currentSlide, setCurrentSlide] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 4000*2)
    
        return () => clearInterval(interval)
      }, [])
 
 const handlefun=()=>{
  if(authen){
    setpop(true)
  }else{
    navigate("/login")
  }
 }
    return (
        <div className='roo'>
        <div className="slideshow">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.url})` }}
          ><h1 className='letter'>{slide.letter}</h1>
          <button className='btn2' onClick={()=>handlefun()}>BOOK AN APPOINTMENT</button>
       
            <img src={slide.url} alt={slide.alt} style={{ display: 'none' }} />
          </div>
        ))}
        <div className="controls">
          {slides.map((_, index) => (
            <button
              key={index}
              className={index === currentSlide ? 'active' : ''}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div></div>
  )
}

export default Slides