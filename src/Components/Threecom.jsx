import React from 'react'
import img1 from "../assets/icon1.svg"
import img2 from "../assets/icon2.svg"
import img3 from "../assets/icon3.svg"
const Threecom = () => {
  return (
    <div className='threecom'>
        <h1 className='h'>We are At</h1>
        <div className='three3'>
            <div>
                <img src={img1} alt="img" />
                <h1>35480</h1>
                <h5>Satisfied Customers</h5>
            </div>
            <div>
                <img src={img3} alt="img" />
                <h1>39133</h1>
                <h5>Customer Jobs</h5>
            </div>
            <div>
                <img src={img2} alt="img" />
                <h1>25</h1>
                <h5>Years Of Collective Experience</h5>
            </div>
        </div>
    </div>
  )
}

export default Threecom