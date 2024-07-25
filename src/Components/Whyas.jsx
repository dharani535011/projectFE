import React from 'react'
const data=[{
    head:"Warranty",
    letter:"Warranty for 6 Months"
},{
    head:"Quality",
    letter:"Best Quality Equipment & Tools for Dent Removal"
},{
    head:"Troubleshooting",
    letter:"Immediate Solutions Provided For All Troubleshooting"
},{
    head:"DoorStep Service",
    letter:"DoorStep Service Provided Along With Inspection"
},{
    head:"EMI Option",
    letter:"We provide a emi options for every services "
}]
const Whyas = () => {
  return (
    <div className='whyas'>
        <h1 className='h1'>Why Choose Us ?</h1>
        <div>
            {data.map((val,ind)=>(
                <div className='content' key={ind}> <h1 >{val.head}</h1>
                <h5>{val.letter}</h5>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Whyas