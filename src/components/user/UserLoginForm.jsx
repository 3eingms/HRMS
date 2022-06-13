import { Container, Grid, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'
import ButtonWrapper from '../FormValidation/Button'
import TextFieldWrapper from '../FormValidation/TextField'

const UserLoginForm = ({loginData,Initial_value,formValidation}) => {
  return (
    <Formik initialValues={Initial_value} validationSchema={formValidation} onSubmit = {async (values)=>{
        loginData(values)
    }}  >
        <Form>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography>user login</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldWrapper  name='email' label='Email' />
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldWrapper  name='password' label='Password' />
                    </Grid>
                    <Grid item xs={12}>
                        <ButtonWrapper>Login</ButtonWrapper>
                    </Grid>
                
                </Grid>
            </Container>
        </Form>
    </Formik>
  )
}

export default UserLoginForm