import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const OtherContext=createContext()

const OtherProvider=({children})=>{
    const [rating,setrating]=useState("")
  const [ratepop,setratepop]=useState(false)
    const [popup,setpop]= useState(false)
    const [loader,setloader]=useState(false)
    const [authen,setauthen]=useState(false)
    const [searc,setsearc]=useState(false)
    const [user,setuser]=useState("")
    const [review,setreview]=useState([])
    const navigate=useNavigate()
    const [userss,setusers]=useState([])
    useEffect(()=>{
        const datas=async()=>{
            const res=  await axios.post("http://localhost:3000/user/allreview",{},{withCredentials:true})
            
            setreview(res.data)
        }
     datas()
    },[loader])
    useEffect(()=>{
        const datas=async()=>{
            const res=  await axios.post("http://localhost:3000/user/allusers",{},{withCredentials:true})
            setusers(res.data)
            
        }
     datas()
    },[loader])


    useEffect(()=>{
        const check=async()=>{
             const res=await axios.post("https://projectbe-3-udjp.onrender.com/user/check",{},{
                withCredentials:true
             })
            
             if(res.data.user){
                setuser(res.data.user)
              
                setauthen(true)
              
                navigate("/")
             }else{
                // setauthen(false)
               
             }
         
        }
        check()
    },[])
   
    return(
        <OtherContext.Provider value={{value:[popup,setpop],loaders:[loader,setloader],authentication:[authen,setauthen]
            ,searchpop:[searc,setsearc],ratingpop:[ratepop,setratepop],ratei:[rating,setrating],users:[user,setuser],
            reviews:[review,setreview],useres:[userss,setusers]
        }}>
            {
                children
            }
        </OtherContext.Provider>
    )
}
export default OtherProvider