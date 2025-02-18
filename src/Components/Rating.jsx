import { useContext, useState } from "react"
import { OtherContext } from "../Contexts/OtherContext"
import Loader from "./Loader"
import axios from "axios"


const Rating = () => {
const [text,settext]=useState("")
const {ratei,ratingpop,loaders,users}=useContext(OtherContext)
  const [rating,setrating]=ratei
  const [loader,setloader]=loaders
  const [ratepop,setratepop]=ratingpop
  const [user,setuser]=users
  const handlecancel=()=>{
          setratepop(false)
          setrating("")
          settext("")
  }     
  const handlesubmit=async()=>{
    setloader(true)
    try {
     const res=await axios.post("https://projectbe-3-udjp.onrender.com/user/review",{
      rating,review:text,userid:user._id
     },{withCredentials:true})
      alert(res.data.message)
      setratepop(false)
    } catch (error) {
      alert(error.message)
    }finally{
      setloader(false)
    }
}
  return (
    <>
    <Loader/>
    <div className='rating1' style={{display:ratepop?"flex":"none"}}>
      <div className='rating2'>
          <div className='ratei'>
            <h4>Rating</h4>
            <span className='d-flex'>
            <i className="fa-solid fa-star" style={{color:(rating===1)||(rating===2)||(rating===3)||(rating===4)||(rating===5)?"red":""}} onClick={()=>setrating(1)}></i>
            <i className="fa-solid fa-star" style={{color:(rating===2)||(rating===3)||(rating===4)||(rating===5)?"red":""}} onClick={()=>setrating(2)}></i>
            <i className="fa-solid fa-star" style={{color:(rating===3)||(rating===4)||(rating===5)?"red":""}} onClick={()=>setrating(3)}></i>
            <i className="fa-solid fa-star" style={{color:(rating===4)||(rating===5)?"red":""}} onClick={()=>setrating(4)}></i>
            <i className="fa-solid fa-star" style={{color:rating===5?"red":""}} onClick={()=>setrating(5)}></i>
          
            </span>
          </div>
           <div className='ratet'>
            <h4>Write Your Review</h4>
            <textarea maxLength={300} minLength={10} value={text} onChange={(e)=>settext(e.target.value)} name="rating" id="rating"></textarea>
           </div>
           <div className='rateb'>
            <button onClick={handlesubmit}>Submit</button>
            <button onClick={handlecancel}>Cancel</button>
           </div>
      </div>
    </div>
    </>
  )
}

export default Rating