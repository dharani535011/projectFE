import React, { useContext, useEffect, useState } from 'react'
import Nav2 from '../Components/Nav2'
import axios from 'axios'
import Appointmentpopup1 from '../Components/Appointmentpopup1'
import { DataContext } from '../Contexts/DataContext'

const Vehiclehistory = () => {
  const data=useContext(DataContext)
  const [history,sethistory]=useState([])

  useEffect(()=>{
   const datas=async()=>{
       const res=  await axios.post("http://localhost:3000/service/vehiclehistory",{},{withCredentials:true})
       sethistory(res.data.message)
      // console.log(res.data.message)
   }
 datas()
 },[])
 const datas = history.map((val) => {
  const foundItem = data.find((item) => item.head === val._id)

  if (foundItem) {
    return {
      total: val.count * foundItem.price,
      service: val._id
    };
  }

  return null;
}).filter(item => item !== null)
// console.log(datas)
const Total=datas.reduce((acc,val)=>{
      acc+=val.total
      return acc
},0)
console.log(Total)

  return (
    <div>
      <Appointmentpopup1/>
    <Nav2/>
    <h1 style={{color:"red",margin:"18px"}}>Vehicle-related Expenses :</h1>
    <div className='tab'>
    <table className='table table-striped table-custom'>
        <thead><tr>
            <td>No.</td><td>Service</td><td>Total Expenses as per the Service</td>
            </tr></thead>
            <tbody>{
                datas.map((val,ind)=>(
                    <tr key={ind}>
                <td>{ind+1}</td><td>{val.service}</td><td>{val.total}</td></tr>
                ))
                }
                </tbody>
                <tfoot style={{fontWeight:"bolder",color:"red",textAlign:"center"}}><tr>
            <td>-</td><td>Total</td><td>{Total}</td>
            </tr></tfoot>
        </table> 
    </div>
</div>
  )
}

export default Vehiclehistory