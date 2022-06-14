import React from "react";
import { Formik, Form, Field } from "formik";
import TextFieldWrapper from "./../../layout/FormValidation/TextField";
import ButtonWrapper from "../../layout/FormValidation/Button";
import NewRadio from "../../layout/FormValidation/NewRadio";
import UnstyledInputBasic from "../../layout/FormValidation/TextArea";

// mui packages
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";




const JobDetailsForm = ({ initialValues, postDetails,formValidation }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema ={formValidation}
      onSubmit={async (values) => {
        console.log(values);
        postDetails(values);
      }}
    >
      {({errors})=> (

    
      <Form>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>Job Details</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextFieldWrapper name="job_designation" label="Designation" />
            </Grid>
            <Grid item xs={6}>
              <TextFieldWrapper name="company_name" label="Company Name" />
            </Grid>
            <Grid item xs={6}>
              <TextFieldWrapper name="country" label="Country" />
            </Grid>

            <Grid item xs={6}>
              <TextFieldWrapper name="job_address" label="Address" />
            </Grid>

            <Grid item xs={6}>
              <TextFieldWrapper name="city" label="City" />
            </Grid>
{console.log(errors)}
            <Grid item xs={6}>
              <NewRadio error={errors?.type_of_work} label="Type Of Work">
                <label>
                  <Field type="radio" name="type_of_work" value="part_time" />
                  Part Time
                </label>
                <label>
                  <Field type="radio" name="type_of_work" value="full_time" />
                  Full Time
                </label>
              </NewRadio>
            </Grid>

            <Grid item xs={6}>
              <TextFieldWrapper name="no_of_opening" label="No. of openings" />
            </Grid>

            <Grid item xs={6}>
              <UnstyledInputBasic
                name="job_description"
                label="job_description"
                placeholder="Job Discription"
              />
            </Grid>

            <Grid item xs={12}>
              <ButtonWrapper>Next</ButtonWrapper>
            </Grid>
          </Grid>
        </Container>
      </Form>
       )}
    </Formik>
  );
};

export default JobDetailsForm;
