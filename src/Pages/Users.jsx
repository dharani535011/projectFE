import React, { useContext, useEffect, useState } from 'react'
import Nav2 from '../Components/Nav2'
import axios from 'axios'
import Appointmentpopup1 from '../Components/Appointmentpopup1'
import Loader from '../Components/Loader'
import { OtherContext } from '../Contexts/OtherContext'



const Users = () => {
   
   const{loaders,users,reviews,useres}=useContext(OtherContext)
   const [loader,setloader]=loaders
   const [user,setuser]=users
   const [userss,setusers]=useres
   const [review,setreview]=reviews
    useEffect(()=>{
        const datas=async()=>{
            const res=  await axios.post("http://localhost:3000/user/allusers",{},{withCredentials:true})
            setusers(res.data)
            setreview(res.data)
        }
     datas()
    },[loader])
    const filters=userss.filter((val)=>val._id!==user._id)
    const handledelete=async(id)=>{
        try {
            setloader(true)
            const res=  await axios.post("http://localhost:3000/user/delete",{id},{
                withCredentials:true
            })
            alert(res.data.message)
            
        } catch (error) {
            alert(error.message)
        }
        finally{
            setloader(false)
        }
       
    }
  
    
  return (
    <div>
        <Loader/>
        <Appointmentpopup1/>
        <Nav2/>
        <div className='tab'>
        <table className='table table-striped'>
            <thead><tr>
                <td>No.</td><td>Username</td><td>Delete User</td>
                </tr></thead>
                <tbody>{
                    filters.map((val,ind)=>(
                        <tr key={ind}>
                    <td>{ind+1}</td><td>{val.name}</td><td><button onClick={()=>handledelete(val._id)}>DELETE</button></td></tr>
                    ))
                    }
                    </tbody>
            </table> 
        </div>
    </div>
  )
}

export default Users