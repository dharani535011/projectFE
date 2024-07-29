import img1 from "../../public/Backgroundimg/p1.jpg"
import img2 from "../../public/Backgroundimg/o1.jpg"
import img3 from "../../public/Backgroundimg/o2.jpg"
import img4 from "../../public/Backgroundimg/o3.jpg"
import img5 from "../../public/Backgroundimg/o4.jpg"
import img6 from "../../public/Backgroundimg/t1.jpg"
import img7 from "../../public/Backgroundimg/t2.jpg"
import img8 from "../../public/Backgroundimg/t3.jpg"
import img9 from "../../public/Backgroundimg/t4.jpg"
import img10 from "../../public/Backgroundimg/fo1.jpg"
import img11 from "../../public/Backgroundimg/fo2.jpg"
import img12 from "../../public/Backgroundimg/fo3.jpg"
import img13 from "../../public/Backgroundimg/fo4.jpg"
import img14 from "../../public/Backgroundimg/fo5.jpg"
import img15 from "../../public/Backgroundimg/f2.jpg"
import img16 from "../../public/Backgroundimg/f1.jpg"
import img17 from "../../public/Backgroundimg/s1.jpg"
import img18 from "../../public/Backgroundimg/s2.jpg"
import img19 from "../../public/Backgroundimg/s3.jpg"


import { createContext } from "react";
const data=[{
    head:"Periodic Maintenance Service",
    para:"Wear and tear in your vehicle is unavoidable, and it would usually have a finite life span before eventually being retired from operations. The good news is, your vehicle doesn’t just go end-of-life overnight.Periodic maintenance requires maintenance tasks to be performed at set time intervals while your vehicle is operational. Periodic maintenance services are planned ahead of time and are performed regardless of whether signs of deterioration show up or not.",
    img:img1,
    price:2000
    },
    {
    head:"Dent & Paint",
    para:"Our technicians at DD take immense pride in the quality of our work and in caring for your vehicle. All products and services used at our service center are of the highest quality to ensure the proper paint texture, gloss, and finish is rendered to your car. We go out of our way to make sure the process is smooth and hassle-free, keeping your satisfaction as our top priority.",
    img:img2,
    price:3000
    },
    {
    head:"Bumper Repair",
    para:"Plastic bumpers don’t always need replacement when damage happens. Instead, they can be saved and even retrieved with innovative auto reconditioning techniques. Our expert technicians can repair scuffed, scratched, dented, detached, and torn bumpers for much less than the cost of replacement. We offer same-day service, and we guarantee your satisfaction!DD uses only the highest quality paints and sealants available in the market to keep your car looking like new, and we guarantee the quality of our paintwork.",
    img:img3,
    price:1500
    },
    {
    head:"Accidental Repair",
    para:"DD is an expert in car body repair and collision repair for all types of cars. Our body shop guarantees the best professional services in town. We have established a reputation, and many insurers respect us. Call or visit our service center at DD for a free estimate on any accident repair or auto body repair.",
    img:img4,
    price:5000
    },
    {
    head:"Scratch Removal",
    para:"Our technicians at DD take immense pride in the quality of our work and in caring for your vehicle. All products and services used at our service center are of the highest quality to ensure the proper paint texture, gloss, and finish is rendered to your car. We go out of our way to make sure the process is smooth and hassle-free, keeping your satisfaction as our top priority.",
    img:img5,
    price:3000
    },
    {
    head:"9H Ceramic Coating",
    para:"Ceramic coating act as a protective layer on your paint and add shine, and makes it a lot easier to wash and clean your car. 9H ceramic coating lends your car unmatched gloss that’ll last for years and will make your car cleaning a breeze.",
    img:img6,
    price:2000
    },
    {
    head:"Rubbing, Waxing and Polishing",
    para:"Rubbing, waxing, and polishing are almost a necessity to keep your car looking great week in and week out. Our technicians have undergone the most extensive and stringent car detail training program. And the only car that matters is yours because we will detail it to your complete satisfaction. Each time!",
    img:img7,
    price:300
    },
    {
    head:"Exterior Cleaning",
    para:"We restore your car’s look and condition with our professionally curated cleaning services. We provide top-of-the-line customer service to our clients.",
    img:img8,
    price:150
    },
    {
    head:"Paint Enhancement",
    para:"Designed for vehicles that don’t require full paint correction, a one-stage machine polish gives that excellent gloss and shine to the paint-job without breaking your bank.Using only the mild abrasives, DD’s paint enhancement aims to remove any swirling scratches and gives your car a glossier, sharper finish.",
    img:img9,
    price:900
    },
    {
    head:"Engine Repairs",
    para:"Your engine light is an indication that something on your car needs attention. Your car may have some issues, and it’s time to take it to a service center.",
    img:img10,
    price:5000
    },
    {
    head:"Brake Repairs",
    para:"We all know why brake work is important, especially because the majority of car accidents are caused by failure to stop.Get your brake pads replaced, which naturally wears down as you use them, and aren’t too costly to fix. At DD, this type of repair may also cover brake lines, discs, drums, and rotor repair.",
    img:img11,
    price:200
    },
    {
    head:"Suspension Repairs",
    para:"The suspension system of your vehicle protects you from bouncing up and down due to the bad road conditions and bumps in the road. More importantly, it affects your steering ability, and that can mean the difference between life and death.That’s why, at DD, we specialize in suspension repair and replacement. Our technicians are some of the best in the business.",
    img:img12,
    price:2500
    },
    {
    head:"AC Repairs",
    para:"Our AC service begins with an expert diagnosis to make sure we have identified the true cause of your air conditioning problem. DD has the equipment and trained technicians to ensure your car’s AC system functions properly and efficiently with our air conditioning service.",
    img:img13,
    price:800
    },
    {
    head:"Electrical Repairs",
    para:"It’s extremely important to get your car’s electrical problem professionally diagnosed to avoid causing any electrical problems.Whether it’s your car’s built-in electrical system warning light, or if you have noticed problems like smoke, or any of your vehicle’s lights stopped working we can help. At DD, we can diagnose what the problem is and offer electrical repair solutions.",
    img:img14,
    price:600
    },
    {
    head:"Troubleshooting and System Errors",
    para:"There is no reason to freeze if your car starts acting abnormally. Like any normal human being, vehicles now and then experience breakdown and need maintenance. Regardless of whether your vehicle is new, knowing how to troubleshoot basic car problems, we at DD guarantee you help in averting these common vehicle issues in no time.",
    img:img15,
    price:1400
    },
    {
    head:"79 Points Inspection",
    para:"We at DD provide a comprehensive 79 point automotive inspection- covering everything from brakes and batteries to transmission and tyres. This inspection gives you a complete idea of whats going on with your vehicle. It’s your car’s most critical safety component.",
    img:img16,
    price:1200
    },
    {
    head:"Battery Replacement",
    para:"A dead car battery is a result of failing to turn off electrical accessories in your vehicle, or if its old and needs a replacement Our technicians are trained to replace the battery within minutes. They are fast and professional experts.Call us if you need a professional car battery replacement service in the Pune area.",
    img:img17,
    price:2000
    },
    {
    head:"Tyre Replacement",
    para:"We are committed to providing top-quality auto repairs and services. If you want the best deal on tyres, DD is the place to come. We offer the best prices in town on tyres, brakes, wheel alignment, and balancing, suspension, tune-ups, and all other auto services.",
    img:img18,
    price:1000
    },
    {
    head:"Insurance Renewal",
    para:"We provide a variety of options like comprehensive insurance with add-on covers, which includes zero depreciation cover, engine protect cover and return to invoice cover.",
    img:img19,
    price:200
    },
]

export const DataContext=createContext()


const DataProvider=({children})=>{
    return(
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider