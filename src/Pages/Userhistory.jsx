import React from 'react'
import Nav2 from '../Components/Nav2'
import Appointmentpopup1 from '../Components/Appointmentpopup1'
const data=[{
   
  vehicleno:"jhbj",
  username:"gvy",
  service:"hhh",
  appointmentdate:"867687"
}]
const Userhistory = () => {
  return (
    <div>
      <Appointmentpopup1/>
      <Nav2/>
      <h1 style={{color:"red",margin:"18px"}}>User History :</h1>
        <div className='tab'>
        <table className='table table-striped'>
            <thead><tr>
                <td>No.</td><td>Username</td><td>VehicleNo.</td><td>Service</td><td>Date</td>
                </tr></thead>
                <tbody>{
                    data.map((val,ind)=>(
                        <tr key={ind}>
                    <td>{ind+1}</td><td>hgvh</td><td>hgvh</td><td>hgvh</td><td>hgvh</td></tr>
                    ))
                    }
                    </tbody>
            </table> 
        </div>
    </div>
  )
}

export default Userhistory