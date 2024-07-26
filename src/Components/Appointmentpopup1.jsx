import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import { OtherContext } from '../Contexts/OtherContext';

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
  const {value,ratingpop}= useContext(OtherContext)
  const [ratepop,setratepop]=ratingpop
  const [popup,setpop]=value
    const formik = useFormik({
        initialValues: {
            carmodel: "",
            vehicleno: "",
            phoneno: "",
            services: "",
            email:""
        },
        validate,
        onSubmit: (values) => {
            console.log(values);
        }
    });

     const handlesubmit=()=>{
        setratepop(true)
     }


    return (
        <div>
            <div className='popbg' style={{display:popup?"block":"none"}}></div>
            <div className='app1' style={{display:popup?"block":"none"}}>
                <form className='appform' onSubmit={formik.handleSubmit}>
                    <h1>Appointment Form</h1>
                    <div>
                        <label htmlFor="carmodel">Car Model</label>
                        <input
                            type='text'
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
                            onChange={formik.handleChange}
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
                            <option value="Others" label="Others" />
                        </select>
                        {formik.touched.services && formik.errors.services ? (
                            <p>{formik.errors.services}</p>
                        ) : null}
                    </div>
                    <button type='submit' onClick={handlesubmit}>BOOK</button>
                    <button type='button' className='btn btn-danger' onClick={()=>{setpop(false)
                       formik.resetForm();
                    }}>cancel</button>
                </form>
            </div>
        </div>
    );
}

export default Appointmentpopup1;
