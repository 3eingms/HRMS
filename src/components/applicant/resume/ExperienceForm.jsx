import React from 'react'
import {Form,Formik} from 'formik'

// custom files
import TextFieldWrapper from '../../layout/FormValidation/TextField';
import DateTime from '../../layout/FormValidation/DateTime';
import ButtonWrapper from '../../layout/FormValidation/Button';



// mui packages
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

const ExperienceForm = ({initialValues,experiencePostData,formValidation}) => {
  return (
    <Formik initialValues={initialValues} validationSchema={formValidation} onSubmit={async (values)=>{experiencePostData(values)}} >
        <Form>
          <Container>
            <Grid container spacing={2} >
              <Grid item xs={12}>
                <Typography>Experience Details</Typography>
              </Grid>

              <Grid item xs={6}>
                  <TextFieldWrapper name='designation' label='Designation' />
              </Grid>
              <Grid item xs={6}>
                  <TextFieldWrapper name='orgnisation_name' label='Organaization Name' />
              </Grid>

              <Grid item xs={12}>
                  <TextFieldWrapper  name='technology' label='Technology' />
              </Grid>

              <Grid item xs={12}>
                  <TextFieldWrapper  name='location' label='Location' />
              </Grid>

              <Grid item xs={6}>
                <DateTime  name='start_date' label='Start Date' />
              </Grid>
              <Grid item xs={6}>
                <DateTime  name='end_date' label='End Date' />
              </Grid>

              <Grid item xs={6}>
                <TextFieldWrapper  name='performance' label='Performance' />
              </Grid>
              <Grid item xs={6}>
                <TextFieldWrapper  name='no_of_years' label='Experience' />
              </Grid>

              <Grid item xs={12}>
                <ButtonWrapper>Next</ButtonWrapper>
              </Grid>
            </Grid>
          </Container>
        </Form>
    </Formik>
  )
}

export default ExperienceForm
