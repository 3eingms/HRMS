import React from 'react'
import axios from 'axios';
import * as Yup from 'yup'
const usePersonal = () => {
    const INITIAL_VALUE = {
        email:'',
        mobile_no:'',
        nidID:'',
        mother_tounge:'',
        preferred_language:'',
        about:'',
    }

    
    const formValidation = Yup.object().shape({
        email:Yup.string().email('Invalid Email! please enter correct email ').required('Email is required!'),
        mobile_no:Yup.string().required('Mobile Number Required').length(10,"Mobile Number must be 10 digits!"),
        nidID:Yup.string().required('National ID is required! '),
        mother_tounge:Yup.string().required('Mother Tounge is required!'),
        preferred_language:Yup.string().required('language is required'),
    })

    const  PersonalData =(data)=>{
        axios.post('http://192.168.1.45:9000/applicant/personal_detail/0',data)
        .then((res)=>{
            console.log(res)
        })
        .catch((er)=>{
            console.log(er,'error azar')
        })
    }
  return {
    INITIAL_VALUE ,PersonalData ,formValidation 
  }
}

export default usePersonal