import React from 'react'
const data=[{
    icon:"fa-solid fa-phone",
    head:"INSPECTION",
    letter:"Advisors conduct detailed inspection to diagnose the issues you may be facing with the suspension of your car."
},{
    icon:"fa-regular fa-file",
    head:"DIAGNOSIS REPORT",
    letter:"Once we are done with the inspection, we will share the details of the required work to be performed on your car’s diagnosis along with the best quotes."
},{
    icon:"fa-solid fa-truck-fast",
    head:"PICKUP AND DROP",
    letter:"Understands the value of your convenience and provides pick-up and drop the facility of your car."
},]

const Working = () => {
  return (
    <div className='working'>
        <h1 id='h1'>How It Works</h1>
        <div className='row row-cols-sm-1 row-cols-md-3 work2'>{data.map((val,ind)=>(
            <div className='topic' key={ind}>
                <h1 className='num'>{ind+1}</h1>
                <h1><i className={`${val.icon}`}></i></h1>
                <h3>{val.head}</h3>
                <h5>{val.letter}</h5>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Working
