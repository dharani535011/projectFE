import React, { useState } from 'react';
import Nav2 from '../Components/Nav2';
import Appointmentpopup1 from '../Components/Appointmentpopup1';

const Profile = () => {
  const [but,setbut]=useState(true)
  return (
    <div className='pro'>
      <Appointmentpopup1/>
      <Nav2 />
      <h1 style={{ color: "red",padding:"20px"}}>Your Profile :</h1>
      <h1 className='imgh1'>Dharani</h1>
      <div className='profilemain'>
        <div>
          <img src="../../public/Backgroundimg/profile.webp" alt="" />
          
        </div>
       
        <div className='details'>
          <div className='d-flex justify-content-between'>
            <label htmlFor="">Your Mail :</label>
            <input type="email" value={"dharani535011@gmail.com"}/>
          </div>
          <div className='d-flex justify-content-between'>
            <label htmlFor="">Phone Number :</label>
            <input type="number" value={9798898897}/>
          </div>
          <div className='d-flex justify-content-between'>
            <label htmlFor="">Password :</label>
            <input type="password" value={"hgvhhjbj"} />
          </div>
        </div>
        {but?(<button onClick={()=>setbut(false)}>Edit</button>):(<button onClick={()=>setbut(true)}>Save</button>)}
        
      </div>
    </div>
  );
}

export default Profile;
