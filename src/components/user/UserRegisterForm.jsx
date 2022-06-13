import React from 'react'
import {Formik,Form} from 'formik'
import TextField from '../FormValidation/TextField'
import Select from '../FormValidation/Select'
import Button from '../FormValidation/Button'


// mui packages
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';


const UserRegisterForm = ({INITIAL_VALUE ,postData,formValidation }) => {


  return (
    <>
        <Formik initialValues={INITIAL_VALUE} onSubmit = {async (values)=>{postData(values)}}  validationSchema={formValidation} >
            <Form>
                <Container>
                    <Grid item xs={12}>
                        <Typography>User Register</Typography>     
                    </Grid>
                    <Grid container spacing={2}>

                    <Grid item xs={6}>
                            <TextField  name='name' label='Name' />
                        </Grid>
                        <Grid item xs={6}>
                            <Select  name='role' label='Roll' options={{"Applicant":"Applicant","Recruiter":"Recruiter"}} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField  name='email' label='Email' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField  name='password' label='Password'  type='password' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField  name='password2' label='Confirm Password' type='password'  />
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

export default UserRegisterForm