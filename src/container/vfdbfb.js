// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCydmoRX2ivjqQq-4fbbhe6L5mwYGuO96o",
  authDomain: "cityhospital-be742.firebaseapp.com",
  projectId: "cityhospital-be742",
  storageBucket: "cityhospital-be742.appspot.com",
  messagingSenderId: "275196771093",
  appId: "1:275196771093:web:378ae72795f0f2a3a2071c",
  measurementId: "G-YT1QPCMWST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

import { combineReducers } from "redux";
import { doctorsreducer } from "./doctor.reducer.js";
import { medicinereducer } from "./medicine.reducer.js";
import cartReducer from "../slice/cartSlice";
import departmentReducer from "../slice/departmentSlice";
import appointmentRducer from "../slice/appointmentSlice.js";
import alertReducer from "../slice/alertSlice";
import { authreducer } from "./auth.reducer";

export const rootReducer = combineReducers({
    alert: alertReducer,
    auth:authreducer,
    doctor: doctorsreducer,
    medicine: medicinereducer,
    cart: cartReducer,
    department: departmentReducer,
    apt: appointmentRducer
})

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
    apt: [],
    loading: false,
    error: null
}

export const addAppointment = createAsyncThunk(
    'appointment/add',
    async (data) => {
        try {
            const docRef = await addDoc(collection(db, "appointment"), {
                data
            });
            return {
                id: docRef.id,
                ...data
            }
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)

const loadingDepartment = (state, action) => {
    state.loading = true;
    state.error = null;
}

const errorDepartment = (state, action) => {
    state.loading = false;
    state.error = action.error.message;
}

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addAppointment.pending, (loadingDepartment))
            .addCase(addAppointment.fulfilled, (state, action) => {
                state.loading = false
                console.log(action.payload);
                state.department = action.payload
            })
    },
})

export default appointmentSlice.reducer;

import React from 'react';
import CustButton from './UI/Button/CustButton';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addAppointment } from '../../redux/slice/appointmentSlice';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';

import PersonPinIcon from '@mui/icons-material/PersonPin';

function Appointment(props) {
    const [value, setValue] = React.useState(0);

    const handleChanges = (event, newValue) => {
        setValue(newValue);
    };

    const dispatch = useDispatch()
    let d = new Date();
    let nd = new Date(d.setDate(d.getDate() - 1))

    let appointment = yup.object({
        name: yup.string().required("Please entre a Name"),
        email: yup.string().email('Please enter your valid email').required('Please enter your email'),
        phone: yup.string().min(10, 'Must Contain 8 Characters').required('Please enter your Phone'),
        expiry: yup.date().min(nd, "Please entre a valid Date").required("Please entre a Date"),
        // select: yup.string().required("Please entre a Description"),
        desc: yup.string().required("Please entre a Description")
            .test('desc', 'maxmium 3 word allowed.',
                function (val) {
                    let arr = val.split(" ")

                    if (arr.length > 100) {
                        return false
                    } else {
                        return true
                    }
                })
    });

    const formik = useFormik({
        validationSchema: appointment,

        initialValues: {
            name: '',
            email: '',
            phone: '',
            expiry: '',
            // select: '',
            desc: ''
        },
        onSubmit: (values, action) => {
            action.resetForm()
            console.log(values);
            dispatch(addAppointment(values))
            // onGetdata(values)
            // handleClose();
            // handleSubmitData(values)
        },
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    <h2>Make an Appointment</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                        Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    <Tabs className='m-0' value={value} onChange={handleChanges} aria-label="icon label tabs example">
                        <Tab icon={<PhoneIcon />} value="1" label="RECENTS" />
                        <Tab icon={<FavoriteIcon />} value="2" label="FAVORITES" />
                    </Tabs>
                </div>

                <form action method="post" value="1" role="form" onSubmit={handleSubmit} className="php-email-form" >
                    <div className="row">
                        <div className="col-md-4 form-group">
                            <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <span style={{ color: 'red' }}>{errors.name && touched.name ? errors.name : null}  </span>
                        </div>
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <span style={{ color: 'red' }}>{errors.email && touched.email ? errors.email : null} </span>
                        </div>
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                            <input type="tel" className="form-control" name="phone" id="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <span style={{ color: 'red' }}>{errors.phone && touched.phone ? errors.phone : null} </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 form-group mt-3">
                            <input type="date" name="expiry" value={values.expiry} onChange={handleChange} onBlur={handleBlur} className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <span style={{ color: 'red' }}>{errors.expiry && touched.expiry ? errors.expiry : null} </span>
                        </div>
                        <div className="col-md-4 form-group mt-3">
                            <select name="department" id="select" required="required" className="form-select">
                                <option value="">Select Department</option>
                                <option value="Department 1">Department 1</option>
                                <option value="Department 2">Department 2</option>
                                <option value="Department 3">Department 3</option>
                            </select>
                            {/* <span style={{ color: 'red' }}>{errors.select && touched.select ? errors.select : null} </span> */}
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <textarea className="form-control" name="desc" value={values.desc} onChange={handleChange} onBlur={handleBlur} rows={5} placeholder="Message (Optional)" defaultValue={""} />
                        <span style={{ color: 'red' }}>{errors.desc && touched.desc ? errors.desc : null} </span>
                    </div>
                    {/* <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                    </div> */}
                    <div className="text-center"><CustButton type="submit">Make an Appointment</CustButton></div>
                </form>
                <div value="2">

                </div>
            </div>
        </section >
    );
}

export default Appointment;