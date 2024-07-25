import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'

import Loader from '../Components/Loader'
import axios from 'axios'
import { OtherContext } from '../Contexts/OtherContext'

const validate=values=>{
  const error={}
  if(!values.otp){
    error.otp="required..."
  }
  if(!values.password){
    error.password="required..."
  }
  return error
}

const Resetpass = () => {
    const {loaders}=useContext(OtherContext)
    const [loader,setloader]=loaders


    
    const formik=useFormik({
      initialValues:{
        otp:"",
        password:""
      },
      validate,
      onSubmit:async(values)=>{
       try {
        setloader(true)
       const response=await axios.post("http://localhost:3000/user/ispassword",values,{
          withCredentials:true
        })
        alert(response.data.message)
       } catch (error) {
        alert(error.message)
       }
       finally{
         formik.resetForm()
         setloader(false)
       }
      }
  
    })

  return (
    <>
    <Loader/>
    <div className='loginbg'></div>
    <div className='loginback'>
    <form className='loginform' onSubmit={formik.handleSubmit}>
        <h1>LogIn</h1>
        <div>
          <input type="text"
          name='otp'
          id='otp'
          placeholder='otp'
          value={formik.values.otp}
          onChange={formik.handleChange}
          />
        </div>
        <p>{formik.errors.otp}</p>
        <div>
          <input type="password"
          id='password'
          name='password'
          placeholder='Password'
          value={formik.values.password}
          onChange={formik.handleChange}
          />
        </div>
        <p>{formik.errors.password}</p>
        <button type='submit'>Sumbit</button>
        
       
      </form>
     
      
      </div>
    </>
  )
}

export default Resetpass