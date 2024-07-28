
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from '../Components/Loader'
import axios from 'axios'
import { OtherContext } from '../Contexts/OtherContext'

const validate=values=>{
  const error={}
  if(!values.email){
    error.email="required..."
  }
  if(!values.password){
    error.password="required..."
  }
  return error
}

const Login = () => {
  const [pass,setpass]=useState("")
  const {loaders,authentication}=useContext(OtherContext)
    const [loader,setloader]=loaders
    const [authen,setauthen]=authentication
  const [forget,setforget]=useState(true)
 const navigate= useNavigate()
  const formik=useFormik({
    initialValues:{
      email:"",
      password:""
    },
    validate,
    onSubmit:async(values)=>{
     try {
      setloader(true)
     const response=await axios.post("http://localhost:3000/user/login",values,{
        withCredentials:true
      })
      if(response.data.message==="login successfully"){
          navigate("/")
          setauthen(true)
          localStorage.setItem("auth",true)
      }
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

const handlechangepass= async(e)=>{
       e.preventDefault()
       console.log(pass)
  try {
    setloader(true)
   const response=await axios.post("http://localhost:3000/user/forgetpassword",{email:pass},{
      withCredentials:true
    })
    alert(response.data.message)
   } catch (error) {
    alert(error.message)
   }
   finally{
     formik.resetForm()
     setpass("")
     setloader(false)
   }
}


  return (
    <>
    <Loader/>
    <div className='loginbg'></div>
    <div className='loginback'>
    {forget?( <form className='loginform' onSubmit={formik.handleSubmit}>
        <h1>LogIn</h1>
        <div>
          <input type="text"
          name='email'
          id='email'
          placeholder='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          />
        </div>
        <p>{formik.errors.email}</p>
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
        <button type='submit'>Login</button>
        <h3 onClick={()=>navigate("/signup")}>Signup</h3>
        <h6 onClick={()=>setforget(false)}>forget password?</h6>
      </form>):(<form className='loginform'>
        <h1 >Forget Password</h1>
        <div>
          <input type="text"
          name='email'
          id='email'
          placeholder='email'
          value={pass}
          onChange={(e)=>setpass(e.target.value)}
          />
        </div>
        <p></p>
       
        <button type='submit' onClick={handlechangepass}>Submit</button>
        <h3 onClick={()=>setforget(true)}>Login</h3>
        
      </form>)}
     
      
      </div>
      
    </>
  )
}

export default Login