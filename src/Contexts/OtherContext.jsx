import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const OtherContext=createContext()

const OtherProvider=({children})=>{
    const [popup,setpop]= useState(false)
    const [loader,setloader]=useState(false)
    const [authen,setauthen]=useState(false)
    const [searc,setsearc]=useState(false)
    const navigate=useNavigate()
    
    useEffect(()=>{
        const check=async()=>{
             const res=await axios.post("http://localhost:3000/user/check",{},{
                withCredentials:true
             })
            
             if(res.data==="valid"){
                setauthen(true)
                navigate("/")
             }else{
                setauthen(false)
                // navigate("/login")
             }
            
        }
        check()
    },[authen])

    return(
        <OtherContext.Provider value={{value:[popup,setpop],loaders:[loader,setloader],authentication:[authen,setauthen]
            ,searchpop:[searc,setsearc]
        }}>
            {
                children
            }
        </OtherContext.Provider>
    )
}
export default OtherProvider