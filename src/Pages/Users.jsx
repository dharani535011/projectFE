import React from 'react'
import Nav2 from '../Components/Nav2'

const data=[{
   
    vehicleno:"jhbj",
    username:"gvy",
    service:"hhh",
    appointmentdate:"867687"
},{
   
    vehicleno:"jhbj",
    username:"gvyjhvbjhb",
    service:"hhh",
    appointmentdate:"867687"
}]

const Users = () => {
  return (
    <div>
        <Nav2/>
        <div className='tab'>
        <table className='table table-striped'>
            <thead><tr>
                <td>No.</td><td>Username</td><td>Delete User</td>
                </tr></thead>
                <tbody>{
                    data.map((val,ind)=>(
                        <tr key={ind}>
                    <td>{ind+1}</td><td>{val.username}</td><td><button>DELETE</button></td></tr>
                    ))
                    }
                    </tbody>
            </table> 
        </div>
    </div>
  )
}

export default Users