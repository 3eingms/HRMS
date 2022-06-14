import React from 'react'
import {Formik,Form} from 'formik'
import TextFieldWrapper from '../../layout/FormValidation/TextField';
import ButtonWrapper from '../../layout/FormValidation/Button';
import DateTime from '../../layout/FormValidation/DateTime';
import Select from '../../layout/FormValidation/Select';


// mui packages
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';


const statusOption = {
    "open":"Open",
    "inprogress":"Inprogress",
    "completed":"Completed"
}

const ProjectDetailsForm = ({initialValues,postProject,formValidation}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={async (values)=>{postProject(values)}} validationSchema={formValidation} >
        <Form>
            <Container>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography>Project Details</Typography>
                </Grid>
                    <Grid item xs={12}>
                        <TextFieldWrapper name='title' label='Title' />
                    </Grid>

                    <Grid item xs={12}>
                        <TextFieldWrapper name='description' label='Discription' />
                    </Grid>

                    <Grid item xs={12}>
                        <Select name='status' label='Project Progress' options={statusOption} />
                    </Grid>

                    <Grid item xs={12}>
                        <TextFieldWrapper name='technology' label='Technology' />
                    </Grid>

                    <Grid item xs={6}>
                        
                        <DateTime name='start_date' label='Start Date' />
                    </Grid>

                    <Grid item xs={6}>
                        <DateTime name='end_date' label='End Date' />
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

export default ProjectDetailsForm
