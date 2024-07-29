import React, { useContext, useEffect, useState } from 'react'
import Nav2 from '../Components/Nav2'
import Appointmentpopup1 from '../Components/Appointmentpopup1'
import axios from 'axios'
import { OtherContext } from '../Contexts/OtherContext'



const Appointment = () => {
    const {users}=useContext(OtherContext)
    const [user,setuser]=users
    const [datas,setdatas]=useState([])

    useEffect(()=>{
        const check=async()=>{
          const res=  await axios.post("http://localhost:3000/service/appointment",{id:user._id},{
                withCredentials:true
            })
            setdatas(res.data.message)
        }
        check()
    },[])
    // const dat=!datas?datas:[]
    // console.log(dat)
   const filters=datas.map((val)=>{
   return {...val,
    appointmentdate: val.appointmentdate.split("T")[0]}})
//    console.log(filters)
  return (
    <div>
        <Appointmentpopup1/>
        <Nav2/>
        <h1 style={{color:"red",margin:"18px"}}>Upcoming Appointments :</h1>
        <div className='tab'>
        <table className='table table-striped'>
            <thead><tr>
                <td>No.</td><td>VehicleNo.</td><td>Service</td><td>AppointmentDate</td>
                </tr></thead>
                <tbody>{
                    filters.map((val,ind)=>(
                        <tr key={ind}>
                    <td>{ind+1}</td><td>{val.vehicleno}</td><td>{val.service}</td><td>{val.appointmentdate}</td></tr>
                    ))
                    }
                    </tbody>
            </table> 
        </div>
    </div>
  )
}

export default Appointment