import React from 'react'
import Nav2 from '../Components/Nav2'
import Appointmentpopup1 from '../Components/Appointmentpopup1'
const data=[{username:"jnbjk"}]
const Vehiclehistory = () => {
  return (
    <div>
      <Appointmentpopup1/>
    <Nav2/>
    <h1 style={{color:"red",margin:"18px"}}>Vehicle-related Expenses :</h1>
    <div className='tab'>
    <table className='table table-striped table-custom'>
        <thead><tr>
            <td>No.</td><td>Username</td><td>Total Expenses as per the Service</td>
            </tr></thead>
            <tbody>{
                data.map((val,ind)=>(
                    <tr key={ind}>
                <td>{ind+1}</td><td>{val.username}</td><td>879</td></tr>
                ))
                }
                </tbody>
        </table> 
    </div>
</div>
  )
}

export default Vehiclehistory