import React, { useEffect, useState } from 'react'
import Nav2 from '../Components/Nav2'
import Appointmentpopup1 from '../Components/Appointmentpopup1'
import axios from 'axios'
const data=[{
   
  vehicleno:"jhbj",
  username:"gvy",
  service:"hhh",
  appointmentdate:"867687"
}]
const Userhistory = () => {
 const [history,sethistory]=useState([])

 useEffect(()=>{
  const datas=async()=>{
      const res=  await axios.post("http://localhost:3000/service/history",{},{withCredentials:true})
      sethistory(res.data.message)
     
  }
datas()
},[])
// console.log(history)


  return (

    <div>
      <Appointmentpopup1/>
      <Nav2/>
      <h1 style={{color:"red",margin:"18px"}}>User History :</h1>
        <div className='tab'>
        <table className='table table-striped'>
            <thead><tr>
                <td>No.</td><td>Phone No.</td><td>VehicleNo.</td><td>Service</td><td>Date</td>
                </tr></thead>
                <tbody>{
                    history.map((val,ind)=>(
                        <tr key={ind}>
                    <td>{ind+1}</td><td>{val.phone}</td><td>{val.vehicleno}</td><td>{val.service}</td><td>{val.appointmentdate}</td></tr>
                    ))
                    }
                    </tbody>
            </table> 
        </div>
    </div>
  )
}

export default Userhistory