// import { useFormik } from 'formik';
// import React, { useContext, useState } from 'react';
// import { OtherContext } from '../Contexts/OtherContext';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const validate = values => {
//     const errors = {};
//     if (!values.carmodel) {
//         errors.carmodel = "Required";
//     }
//     if (!values.vehicleno) {
//         errors.vehicleno = "Required";
//     }
//     if (!values.phoneno) {
//         errors.phoneno = "Required";
//     }
//     if (!values.services) {
//         errors.services = "Required";
//     }
//     if (!values.email) {
//         errors.email = "Required";
//     }
//     return errors;
// };

// const Appointmentpopup1 = () => {
//   const {value,ratingpop,loaders,users}= useContext(OtherContext)
//   const [ratepop,setratepop]=ratingpop
//   const [loader,setloader]=loaders
//   const [user,setuser]=users
// //   (user.rating)
// const navigate=useNavigate()
//   const [popup,setpop]=value
//     const formik = useFormik({
//         initialValues: {
//             carmodel: "",
//             vehicleno: "",
//             phoneno: "",
//             services: "",
//             email:""
//         },
//         validate,
//         onSubmit: async(values) => {
           
//             setloader(true)
//             try {

                

//               const res=  await axios.post("https://projectbe-3-udjp.onrender.com/service/book",{
//                     carmodel:values.carmodel,
//                     vehicleno:values.vehicleno,
//                     service:values.services,
//                     phone:values.phoneno,
//                     email:values.email,
//                     user:user._id
//                 },{withCredentials:true})
//                 if(parseInt(user.rating)===0){
//                     setratepop(true)
//                 }
               
//                 alert(res.data.message)
//                 formik.resetForm()
//                 setpop(false)
//                 setTimeout(()=>{
//                     navigate("/appointments")
//                 },500)
                
//             } catch (error) {
//                 alert(error.message)
//             }finally{
//                 setloader(false)
                
//             }
//         }
//     });

    


//     return (
//         <div>
//             <div className='popbg' style={{display:popup?"block":"none"}}></div>
//             <div className='app1' style={{display:popup?"block":"none"}}>
//                 <form className='appform' onSubmit={formik.handleSubmit}>
//                     <h1>Appointment Form</h1>
//                     <div>
//                         <label htmlFor="carmodel">Car Model</label>
//                         <input
//                             type='text'
//                             placeholder='BMW A1'
//                             name='carmodel'
//                             id='carmodel'
//                             value={formik.values.carmodel}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                         />
//                         {formik.touched.carmodel && formik.errors.carmodel ? (
//                             <p>{formik.errors.carmodel}</p>
//                         ) : null}
//                     </div>
//                     <div>
//                         <label htmlFor="vehicleno">Vehicle No.</label>
//                         <input
//                             type='text'
//                             name='vehicleno'
//                              placeholder='TN 03 W 5362'
//                             id='vehicleno'
//                             value={formik.values.vehicleno}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                         />
//                         {formik.touched.vehicleno && formik.errors.vehicleno ? (
//                             <p>{formik.errors.vehicleno}</p>
//                         ) : null}
//                     </div>
//                     <div>
//                         <label htmlFor="email">Email</label>
//                         <input
//                             type='email'
//                             name='email'
//                             id='email'
//                              placeholder='example@gmail.com'
//                             value={formik.values.email}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                         />
//                         {formik.touched.email && formik.errors.email ? (
//                             <p>{formik.errors.email}</p>
//                         ) : null}
//                     </div>
//                     <div>
//                         <label htmlFor="phoneno">Phone No.</label>
//                         <input
//                             type='number'
//                             name='phoneno'
//                             id='phoneno'
//                              placeholder='8225851886'
//                             minLength={10}
//                             maxLength={10}
//                             value={formik.values.phoneno}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                         />
//                         {formik.touched.phoneno && formik.errors.phoneno ? (
//                             <p>{formik.errors.phoneno}</p>
//                         ) : null}
//                     </div>
//                     <div>
//                         <label htmlFor="services">Select Services</label>
//                         <select
//                             name="services"
//                             id="services"
//                             value={formik.values.services}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                         >
//                             <option value="" label="Select an option" />
//                             <option value="Periodic Maintenance Service" label="Periodic Maintenance Service" />
//                             <option value="Dent & Paint" label="Dent & Paint" />
//                             <option value="Bumper Repair" label="Bumper Repair" />
//                             <option value="Accidental Repair" label="Accidental Repair" />
//                             <option value="Scratch Removal" label="Scratch Removal" />
//                             <option value="9H Ceramic Coating" label="9H Ceramic Coating" />
//                             <option value="Rubbing, Waxing and Polishing" label="Rubbing, Waxing and Polishing" />
//                             <option value="Exterior Cleaning" label="Exterior Cleaning" />
//                             <option value="Paint Enhancement" label="Paint Enhancement" />
//                             <option value="Engine Repairs" label="Engine Repairs" />
//                             <option value="Brake Repairs" label="Brake Repairs" />
//                             <option value="Suspension Repairs" label="Suspension Repairs" />
//                             <option value="AC Repairs" label="AC Repairs" />
//                             <option value="Electrical Repairs" label="Electrical Repairs" />
//                             <option value="Troubleshooting and System Errors" label="Troubleshooting and System Errors" />
//                             <option value="Battery Replacement" label="Battery Replacement" />
//                             <option value="Tyre Replacement" label="Tyre Replacement" />
//                             <option value="Insurance Renewal" label="Insurance Renewal" />
//                             <option value="79 Points Inspection" label="79 Points Inspection" />
//                             {/* <option value="Others" label="Others" /> */}
//                         </select>
//                         {formik.touched.services && formik.errors.services ? (
//                             <p>{formik.errors.services}</p>
//                         ) : null}
//                     </div>
//                     <button type='submit' >BOOK</button>
//                     <button type='button' className='btn btn-danger' onClick={()=>{setpop(false)
//                        formik.resetForm();
//                     }}>cancel</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Appointmentpopup1;
import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import { OtherContext } from '../Contexts/OtherContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51PhWvWRxhLuw1R0izvBVoOFL7aPg29FC5ND8zMSzsnExM2TrvcO8IG5V4mjNgmcGXGAabrCaLfwSrqYqdJf017sC00ZUIGKbVJ'); // Replace with your actual Stripe public key

const validate = values => {
    const errors = {};
    if (!values.carmodel) {
        errors.carmodel = "Required";
    }
    if (!values.vehicleno) {
        errors.vehicleno = "Required";
    }
    if (!values.phoneno) {
        errors.phoneno = "Required";
    }
    if (!values.services) {
        errors.services = "Required";
    }
    if (!values.email) {
        errors.email = "Required";
    }
    return errors;
};

const Appointmentpopup1 = () => {
  const { value, ratingpop, loaders, users } = useContext(OtherContext);
  const [ratepop, setratepop] = ratingpop;
  const [loader, setloader] = loaders;
  const [user, setuser] = users;
  const navigate = useNavigate();
  const [popup, setpop] = value;
  const [amount, setAmount] = useState(0); // State to hold the amount

  const stripe = useStripe();
  const elements = useElements();

  const formik = useFormik({
    initialValues: {
      carmodel: "",
      vehicleno: "",
      phoneno: "",
      services: "",
      email: ""
    },
    validate,
    onSubmit: async (values) => {
      if (!stripe || !elements) {
        return;
      }

      setloader(true);
      try {
        // Call backend to create a payment intent
        const { data: { clientSecret } } = await axios.post("https://projectbe-3-udjp.onrender.com/create-payment-intent", {
          amount: amount * 100,
          currency: 'inr',
        });

        const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        });

        if (result.error) {
          alert(result.error.message);
        } else {
          if (result.paymentIntent.status === 'succeeded') {
            // Simulate booking service call
            const res = await axios.post("https://projectbe-3-udjp.onrender.com/service/book", {
              carmodel: values.carmodel,
              vehicleno: values.vehicleno,
              service: values.services,
              phone: values.phoneno,
              email: values.email,
              user: user._id
            }, { withCredentials: true });

            if (parseInt(user.rating) === 0) {
              setratepop(true);
            }

            alert(res.data.message);
            formik.resetForm();
            setpop(false);
            setTimeout(() => {
              navigate("/appointments");
            }, 1000);
          }
        }
      } catch (error) {
        console.error("Error during submission:", error);
        alert(error.message);
      } finally {
        setloader(false);
      }
    }
  });

  return (
    <div>
      <div className='popbg' style={{ display: popup ? "block" : "none" }}></div>
      <div className='app1' style={{ display: popup ? "block" : "none" }}>
        <form className='appform' onSubmit={formik.handleSubmit}>
          <h1>Appointment Form</h1>
          <div>
            <label htmlFor="carmodel">Car Model</label>
            <input
              type='text'
              placeholder='BMW A1'
              name='carmodel'
              id='carmodel'
              value={formik.values.carmodel}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.carmodel && formik.errors.carmodel ? (
              <p>{formik.errors.carmodel}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="vehicleno">Vehicle No.</label>
            <input
              type='text'
              name='vehicleno'
              placeholder='TN 03 W 5362'
              id='vehicleno'
              value={formik.values.vehicleno}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.vehicleno && formik.errors.vehicleno ? (
              <p>{formik.errors.vehicleno}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='example@gmail.com'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <p>{formik.errors.email}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="phoneno">Phone No.</label>
            <input
              type='number'
              name='phoneno'
              id='phoneno'
              placeholder='8225851886'
              minLength={10}
              maxLength={10}
              value={formik.values.phoneno}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phoneno && formik.errors.phoneno ? (
              <p>{formik.errors.phoneno}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="services">Select Services</label>
            <select
              name="services"
              id="services"
              value={formik.values.services}
              onChange={(e) => {
                formik.handleChange(e);
                const servicePrices = {
                  "Periodic Maintenance Service": 2000,
                  "Dent & Paint": 3000,
                  "Bumper Repair": 1500,
                  "Accidental Repair": 5000,
                  "Scratch Removal": 3000,
                  "9H Ceramic Coating": 2000,
                  "Rubbing, Waxing and Polishing": 300,
                  "Exterior Cleaning": 150,
                  "Paint Enhancement": 900,
                  "Engine Repairs": 5000,
                  "Brake Repairs": 200,
                  "Suspension Repairs": 2500,
                  "AC Repairs": 800,
                  "Electrical Repairs": 600,
                  "Troubleshooting and System Errors": 1400,
                  "Battery Replacement": 1200,
                  "Tyre Replacement": 2000,
                  "Insurance Renewal": 1000,
                  "79 Points Inspection": 200,
                };
                setAmount(servicePrices[e.target.value] || 0);
              }}
              onBlur={formik.handleBlur}
            >
              <option value="" label="Select an option" />
              <option value="Periodic Maintenance Service" label="Periodic Maintenance Service" />
              <option value="Dent & Paint" label="Dent & Paint" />
              <option value="Bumper Repair" label="Bumper Repair" />
              <option value="Accidental Repair" label="Accidental Repair" />
              <option value="Scratch Removal" label="Scratch Removal" />
              <option value="9H Ceramic Coating" label="9H Ceramic Coating" />
              <option value="Rubbing, Waxing and Polishing" label="Rubbing, Waxing and Polishing" />
              <option value="Exterior Cleaning" label="Exterior Cleaning" />
              <option value="Paint Enhancement" label="Paint Enhancement" />
              <option value="Engine Repairs" label="Engine Repairs" />
              <option value="Brake Repairs" label="Brake Repairs" />
              <option value="Suspension Repairs" label="Suspension Repairs" />
              <option value="AC Repairs" label="AC Repairs" />
              <option value="Electrical Repairs" label="Electrical Repairs" />
              <option value="Troubleshooting and System Errors" label="Troubleshooting and System Errors" />
              <option value="Battery Replacement" label="Battery Replacement" />
              <option value="Tyre Replacement" label="Tyre Replacement" />
              <option value="Insurance Renewal" label="Insurance Renewal" />
              <option value="79 Points Inspection" label="79 Points Inspection" />
            </select>
            {formik.touched.services && formik.errors.services ? (
              <p>{formik.errors.services}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="amount">Amount: ₹{amount}</label>
          </div>
          <div>
            <CardElement />
          </div>
          <button type='submit' disabled={!stripe || !elements}>BOOK</button>
          <button type='button' className='btn btn-danger' onClick={() => {
            setpop(false);
            formik.resetForm();
          }}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

const AppointmentWithStripe = () => {
  return (
    <Elements stripe={stripePromise}>
      <Appointmentpopup1 />
    </Elements>
  );
};

export default AppointmentWithStripe;
