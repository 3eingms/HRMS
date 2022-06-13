import React from 'react'
import { Formik,Form } from 'formik'
import TextField from '../../FormValidation/TextField';
import * as Yup from 'yup'
import Button from '../../FormValidation/Button';

import Select from '../../FormValidation/Select';

// mui packages
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';


const PersonalDetailsForm = ({INITIAL_VALUE,PersonalData ,formValidation }) => {
   
  return (
    <>
        <Formik initialValues={INITIAL_VALUE} validationSchema={formValidation } onSubmit={
            async (values)=>{
                PersonalData(values)
            }
        }>
            <Form>
                <Container>
                    <Grid container spacing={2} >
                        <Grid item xs={12}>
                            <Typography>Personal Details</Typography>
                        </Grid>


                        <Grid item xs={6}>
                        <TextField  name='email' label='Email' />
                        </Grid>

                        <Grid item xs={6}>
                        <TextField  name='mobile_no' label='mobile' />
                        </Grid>

                        <Grid item xs={6}>
                        <TextField  name='nidID' label='NID ID' />
                        </Grid>


                        <Grid item xs={6}>
                        <TextField  name='mother_tounge' label='Mother tongue' />
                        </Grid>
                        
                        <Grid item xs={12}>
                        <Select name='preferred_language' label='Preferred language of learning' options={{
                            "English":"English",
                            "Hindi":"Hindi",
                            "Bengali":"Bengali",
                            "Burmese":"Burmese",
                            "Chittagonian":"Chittagonian"
                            }} />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField  name='about' label='Add note about yourself:' />
                        </Grid>

                        <Grid item xs={12}>
                        <Button>Next</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Form>
        </Formik>
    </>
  )
}

export default PersonalDetailsForm