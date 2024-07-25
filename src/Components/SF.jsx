import React, { useContext, useState } from 'react'
import { DataContext } from '../Contexts/DataContext'
import { useNavigate } from 'react-router-dom'
import { OtherContext } from '../Contexts/OtherContext'

const SF = () => {
    const [filter,setfilter]=useState(false)
    const [radio,setradio]=useState("")
    const data=useContext(DataContext)
    const{searchpop}=useContext(OtherContext)
    const [searc,setsearc]=searchpop
   const navigate=useNavigate()
    const [search,setsearch]=useState("")
    
    const filteredData = data.filter(val => 
        val.head.toLowerCase().includes(search.toLowerCase())
    );
    const common=radio>0?radio:10000
    const Filtervals=common===10000?(filteredData.filter((val)=>val.price<=common)):(filteredData.filter((val)=>val.price<=common && val.price>=common-500))
   
  return (
    <>
    {searc?(<> <div className='sfbg'></div>
    <div className='sfmain'>
        <div className='sf'>
              <input type="text" placeholder='Search' value={search} onChange={(e)=>setsearch(e.target.value)}/>
              <button onMouseEnter={()=>setfilter(true)}
               
                >Filter</button>
              <button type="button" className="close" onClick={()=>setsearc(false)} >Cancel</button>
              
        </div>
        <div className='fbox'  onMouseLeave={()=>setfilter(false)} style={{display:filter?"flex":"none"}}>
            <h5>Price</h5>
            <span><input type="radio" value={500} onChange={(e)=>setradio(e.target.value)} name='price'/>0-500</span>
            <span><input type="radio" value={1000} onChange={(e)=>setradio(e.target.value)} name='price'/>500-1000</span>
            <span><input type="radio" value={1500} onChange={(e)=>setradio(e.target.value)}   name='price'/>1000-1500</span>
            <span><input type="radio" value={2000} onChange={(e)=>setradio(e.target.value)}  name='price'/>1500-2000</span>
            <span><input type="radio" value={10000} onChange={(e)=>setradio(e.target.value)}  name='price'/>above 2500</span>
        </div>
        <div className='search'>
         {search.length>0 && Filtervals.map((val,i)=>(
            
            <p key={i} onClick={()=>{navigate(`/services/${val.head}`)
             setsearc(false)
            setsearch("")
            }}>{val.head}</p>
         ))}
        </div>
    </div></>):(null)}
   </>
  )
}

export default SF