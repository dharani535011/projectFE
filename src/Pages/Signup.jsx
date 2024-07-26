import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from '../Components/Loader'
import { OtherContext } from '../Contexts/OtherContext'
import axios from 'axios'

const validate=values=>{
    const error={}
    if(!values.name){
      error.name="required..."
    }
    if(!values.email){
        error.email="required..."
      }
    if(!values.password){
      error.password="required..."
    }
    if(!values.phone){
      error.phone="required..."
    }
    return error
  }
const Signup = () => {
  const {loaders}=useContext(OtherContext)
  const [loader,setloader]=loaders
    const navigate= useNavigate()
    const formik=useFormik({
      initialValues:{
        name:"",
        email:"",
        password:"",
        phone:""
      },
      validate,
      onSubmit:async(values)=>{
        try {
          setloader(true)
         const response=await axios.post("http://localhost:3000/user/register",values,{
            withCredentials:true
          })
          alert(response.data.message)
          navigate("/login")
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
          <h1>Signup</h1>
          <div>
            <input type="name"
            id='name'
            name='name'
            placeholder='Username'
            value={formik.values.name}
            onChange={formik.handleChange}
            />
          </div>
          <p>{formik.errors.name}</p>
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
            <input type="number"
            id='phone'
            name='phone'
            placeholder='Phone No.'
            minLength={10}
            maxLength={10}
            
            value={formik.values.phone}
            onChange={formik.handleChange}
            />
          </div>
          <p>{formik.errors.phone}</p>
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
          <button type='submit'>Signup</button>
          <h3 onClick={()=>{navigate("/login")
            formik.resetForm
          }}>Login</h3>
        </form></div>
      </>
    )
}

export default Signup