import React, { useEffect } from 'react'
import img1 from "../assets/common1.svg"
import img2 from "../assets/common2.svg"
import img3 from "../assets/common3.svg"
import img4 from "../assets/common4.svg"
import img5 from "../assets/common5.svg"
import img6 from "../assets/common6.svg"
import { useNavigate } from 'react-router-dom'
const Common = () => {
   
   const navigate= useNavigate()
//    useEffect(()=>{
//     window.location.reload()
// },[])
  return (
    <div className='row row-cols-xs-1 row-cols-md-3 row-cols-lg-6 com'>
        <div onClick={()=>{navigate("/services/Troubleshooting and System Errors")
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }}>
            <img src={img6} alt="" />
            <h3>
            Diagnostics</h3>
            <p>If your car needs a mobile diagnostic check done at your home or office, let DD come to you.</p>
        </div>
        <div onClick={()=>{navigate("/services/Dent & Paint")
       window.scrollTo({ top: 0, behavior: 'smooth' })
       }}>
            <img src={img2} alt="" />
            <h3>

Dent & Paint</h3>
            <p>DD specializes in car dent repair and car painting services for a range of models.</p>
        </div>
        <div onClick={()=>{navigate("/services/Periodic Maintenance Service")
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }}>
            <img src={img4} alt="" />
            <h3>

Oil / Lube / Filters</h3>
            <p>DD proudly serves the Lube, Oil & Filter change needs of customers' vehicle performance while extending the life of your vehicle.</p>
        </div>
        <div onClick={()=>{navigate("/services/Brake Repairs")
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }}>
            <img src={img5} alt="" />
            <h3>

Brakes</h3>
            <p>The brake system consists of different parts that can be fixed individually. A detailed quote is given to you after we perform our systematic brake evaluation.</p>
        </div>
        <div onClick={()=>{navigate("/services/Suspension Repairs")
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }}>
            <img src={img3} alt="" />
            <h3>

Suspension</h3>
            <p>The suspension system of your vehicle protects you from bouncing up and down due to the bad road conditions and bumps in the road.</p>
        </div>
        <div onClick={()=>{navigate("/services/Rubbing, Waxing and Polishing")
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }}>
            <img src={img1} alt="" />
            <h3>

Detailing</h3>
            <p>DD offers professional car detail services at an affordable price. Our interior cleaning, detailing, and restoration services can help you recapture that new car look and smell.</p>
        </div>
    </div>
  )
}

export default Common