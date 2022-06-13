import React from 'react'
import {Formik,Form} from 'formik'
import TextFieldWrapper from '../../FormValidation/TextField'

// mui packages
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

const ResumeUploadForm = () => {
  return (
   <Formik>
        <Form>
            <Container>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <TextFieldWrapper  type='file' />
                    </Grid>
                </Grid>
            </Container>
        </Form>
   </Formik>
  )
}

export default ResumeUploadForm