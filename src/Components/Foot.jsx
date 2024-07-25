import React from 'react'
import logo from "../assets/logo.svg"
import { Link, useNavigate } from 'react-router-dom';
const Foot = () => {
   const navigate= useNavigate()
    const currentYear = new Date().getFullYear();
  return (
    <div className='mainbody'><div className='row row-cols-xs-1 row-cols-md-3  head'>
        <div className='div1'>
        <img onClick={()=>{
            navigate("/")
            window.scrollTo({top:0,behavior:"smooth"})
        }} src={logo} alt="logo" className='logoimg' />
        <h3 
        onClick={()=>{
            navigate("/")
            window.scrollTo({top:0,behavior:"smooth"})
        }}
        >DD Services</h3>
        <p>DD’s mission is to enable premium quality care for your luxury car service at affordable pricing . We ensure real-time updates for complete car care needs with a fair and transparent pricing mechanism.</p>
        <span className='i' style={{paddingBottom:"5px"}}>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-instagram"></i>
        </span>
        <p><span><i className="fa-solid fa-map-location-dot"></i></span>Unit no.4, Reality Warehousing Pvt. Ltd., Behind Reliance Smart, Wagholi, Pune, Maharastra – 412207</p>
        <p><span><i className="fa-solid fa-envelope"></i></span>contact@ddservices.com</p>
        <p><span><i className="fa-solid fa-phone"></i></span>9878678689</p>
        </div>
        <div className='div2'>
            <h3>Services</h3>
            <ul>
            <li onClick={()=>{
            navigate("/services/Periodic Maintenance Service")
            window.scrollTo({top:0,behavior:"smooth"})
        }}><Link className='link'>Periodic Maintenance Service</Link></li>
            <li onClick={()=>{
            navigate("/services/Dent & Paint")
            window.scrollTo({top:0,behavior:"smooth"})
        }}><Link className='link'>Dent & Paint</Link></li>
            <li onClick={()=>{
            navigate("/services/Bumper Repair")
            window.scrollTo({top:0,behavior:"smooth"})
        }}><Link className='link'>Bumper Repair</Link></li>
            <li onClick={()=>{
            navigate("/services/Accidental Repair")
            window.scrollTo({top:0,behavior:"smooth"})
        }}><Link className='link'>Accidental Repair</Link></li>
            <li onClick={()=>{
            navigate("/services/Scratch Removal")
            window.scrollTo({top:0,behavior:"smooth"})
        }}><Link className='link'>Scratch Removal</Link></li>
            </ul>
        </div>
        <div className='div3'>
            <h3>Links</h3>
            <ul>
                <li onClick={()=>{
            navigate("/")
            window.scrollTo({top:0,behavior:"smooth"})
        }}><Link className='link'>Home</Link></li>
                <li onClick={()=>{
            navigate("/aboutus")
            window.scrollTo({top:0,behavior:"smooth"})
        }}><Link className='link'>About</Link></li>
                <li ><Link className='link'>FAQ</Link></li>
                <li><Link className='link'>Blog</Link></li>
                <li><Link className='link'>DD Select</Link></li>
                <li><Link className='link'>Contact Us</Link></li>
                <li><Link className='link'>Privacy Policy</Link></li>
            </ul>
        </div>
        </div><div className='foot'>
            <h1>DD GROUPS</h1>
            <p><small>Copyright &copy; {currentYear} DD services.All rights reserved</small></p>
        </div>
        </div>
  )
}

export default Foot