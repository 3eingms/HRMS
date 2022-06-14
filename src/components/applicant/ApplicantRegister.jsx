import React from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import TextField from '../layout/FormValidation/TextField';
import DateTime from '../layout/FormValidation/DateTime';
import Button from '../layout/FormValidation/Button'
import API from '../../config/API'


// mui packages
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

const ApplicantRegister = () => {
    const INITIAL_VALUE = {
        
        fullName : '',
        qualification:'',
        email:'',
        contact:'',
        dob:'',
        nid:'',
        location:'',
        resume:'',
        portfolioLink:'',

    }
    const FORM_VALIDATION = Yup.object().shape({
        fullName:Yup.string().required('full name is required!'),
        qualification:Yup.string().required('qualification is required!'),
        email:Yup.string().required('email is required!').email('invalid email! please enter correct email'),
        contact:Yup.string().required('email is required!').length(10,'mobile number must be 10 digit only!'),
        dob:Yup.string().required('date of birth is required!'),
        nid:Yup.string().required('national id is required!'),
        location:Yup.string().required('location is required!'),
        // resume:Yup.string().required('national id is required!'),
        portfolioLink:Yup.string(),
        
    })
    const PostUser = async  (data) => {
        try{
            const res = await API.post('/applicant/profile',data)
            console.log(res)
        }
        catch(er){
            console.log(er,'error from catch')
        }
   

}

  return (
    <>
     <Formik initialValues={{...INITIAL_VALUE}} validationSchema={FORM_VALIDATION} 
     onSubmit={async (values) => {
         PostUser(values);
     }} 
     >
         
         <Form>
            <Container>
                <Grid container spacing={2} >
                    <Grid item xs={12} >
                        <Typography  >Find Your dream job with us</Typography>
                    </Grid>
                    {/* <Grid item xs={12} >
                        <TextField  name='user' label='user' values= '1'  />
                    </Grid> */}
                    <Grid item xs={12} >
                        <TextField  name='fullName' label='Full Name' />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField  name='qualification' label='Qualification' />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField  name='email' label='Email' />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField  name='contact' label='Contact' />
                    </Grid>
                    <Grid item xs={12} >
                        <DateTime  name='dob' label='Date of Birth' />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField  name='nid' label='NID no.' />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField  name='location' label='Location' />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField  name='portfolioLink' label='Portfolio Link' />
                    </Grid>

                    <Grid item xs={12} >
                        <TextField  name='resume' label='Resume' type='file'  InputLabelProps={{shrink: true} }/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button>Register</Button>
                    </Grid>
                </Grid>
            </Container>
         </Form>
    </Formik> 
    </>
  )
}

export default ApplicantRegister
