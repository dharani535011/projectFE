import React, { useContext, useState } from 'react';
import Nav2 from '../Components/Nav2';
import Appointmentpopup1 from '../Components/Appointmentpopup1';
import { OtherContext } from '../Contexts/OtherContext';
import axios from 'axios';
import Loader from '../Components/Loader';

const Profile = () => {
  const {users,loaders}=useContext(OtherContext)
  const [but,setbut]=useState(true)
  const [input,setinput]=useState(false)
  

  const [profile,setprofile]=useState(null)
  const [user,setuser]=users
  const [loader,setloader]=loaders
  const [email,setemail]=useState(user.email)
  const [phone,setphone]=useState(user.phone)
  const handleprofile=(e)=>{
       setprofile(e.target.files[0])

  }
  const handlesave= async(e)=>{
   
    
    try {
      setloader(true)
      const formData = new FormData();
      if (profile) {
        formData.append("file", profile);
        formData.append("id", user._id);

        
        const uploadResponse = await axios.post("http://localhost:3000/upload", formData, {
          // headers: { 'Content-Type': 'multipart/form-data' },
          withCredentials: true,
        });
        alert(uploadResponse.data.message);
      }
      
     const res= await axios.post("http://localhost:3000/user/edit",{
          email,phone,userid:user._id
      },{
        withCredentials:true
      })
     
      alert(res.data.message)
     
    } catch (error) {
      
    }finally{
      
        setloader(false)
        setbut(true)
  setinput(false)
    }
}
const handlecancel=(e)=>{
  setbut(true)
  setinput(false)
}

const image=user.image?`http://localhost:3000/${user.image}`: "../../public/Backgroundimg/profile.webp"
  return (
    <div className='pro'>
      <Appointmentpopup1/>
      <Loader/>
      <Nav2 />
      <h1 style={{ color: "red",padding:"20px"}}>Your Profile :</h1>
      <h1 className='imgh1'>{user.name}</h1>
      <div className='profilemain'>
        <div>
          <img src={image} alt="" />
          {input?( <input type="file" className='d-flex suc-inp' onChange={handleprofile} />):(null)}
         
        </div>
       
        <div className='details'>
          <div className='d-flex justify-content-between'>
            <label htmlFor="">Email :</label>
            
            {input?(<input type="email" value={email} onChange={(e)=>setemail(e.target.value)} />):(<input type="email" value={user.email}/>)}
          </div>
          <div className='d-flex justify-content-between'>
            <label htmlFor="">Phone Number :</label>
            
            {input?(<input type="number" value={phone} onChange={(e)=>setphone(e.target.value)} />):(<input type="number" value={user.phone}/>)}
          </div>
          {/* <div className='d-flex justify-content-between'>
            <label htmlFor="">Password :</label>
            <input type="password" value={user.password} />
          </div> */}
        </div>
        
        {but?(<button onClick={()=>{setbut(false)
          setinput(true)
        }}>Edit</button>):(<><button onClick={handlesave}>Save</button><button onClick={handlecancel}>Cancel</button></>)}
        
      </div>
    </div>
  );
}

export default Profile;
