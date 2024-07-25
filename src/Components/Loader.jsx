import React, { useContext, useState } from 'react'
import { OtherContext } from '../Contexts/OtherContext'

const Loader = () => {
    const {loaders}=useContext(OtherContext)
    const [loader,setloader]=loaders
  return (
    <div >
        {loader?(<> <div className='popbg1'></div>
        <div className="spinner-border text-danger custom-loader" role="status">
  <span className="visually-hidden">Loading...</span>
</div></>):(null)}
       
    </div>
  )
}

export default Loader