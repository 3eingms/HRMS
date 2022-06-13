import React from 'react'
import {Formik,Form} from 'formik'
// customs files
import SelectWrapper from '../../FormValidation/Select'
import TextField from '../../FormValidation/TextField'
import DateTime from '../../FormValidation/DateTime'
import ButtonWrapper from '../../FormValidation/Button';


// mui packages
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';


const EducationDetailsForm = ({initialValue,Choice_Field, educationDataPost,formValidation}) => {

  return (
   <Formik initialValues={initialValue}  validationSchema={formValidation} onSubmit={async(values)=>{
     educationDataPost(values)
   }}>
     <Form>
       <Container>
         <Grid item xs={12}>
           <Typography>Education Details</Typography>
           </Grid>
         <Grid container spacing={2}>
           <Grid item xs={12}>
             <SelectWrapper name='eduacation_name' label='Eduaction Name' options={Choice_Field }/>
           </Grid>

           <Grid item xs={6}>
             <TextField  name='course_name' label='Course Name'/>
           </Grid>
           <Grid item xs={6}>
             <TextField  name='stream' label='Stream'/>
           </Grid>
        
           <Grid item xs={12}>
           <TextField  name='university '  label='University' />
           </Grid>

           <Grid item xs={12}>
             <TextField  name='performance' label='Performance'/>
           </Grid>

            <Grid item xs={12}>
              <TextField name='percentage' label='Percentage %' />
            </Grid>

            <Grid item xs={6}>
              <DateTime name='strat_date' label='Start Date' InputLabelProps={{shrink: true}}/>
            </Grid>
            <Grid item xs={6}>
              <DateTime name='end_date' label='End Date' InputLabelProps={{shrink: true}} />
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

export default EducationDetailsForm