import React from "react";
import { Formik, Form, Field } from "formik";
import TextFieldWrapper from "./../../FormValidation/TextField";
import Select from "../../FormValidation/Select";
import ButtonWrapper from "../../FormValidation/Button";
import SelectWrapper from "../../FormValidation/Select";

// mui packages
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

import UnstyledInputBasic from "../../FormValidation/TextArea";

import NewRadio from "../../FormValidation/NewRadio";

const JobDetailsForm = ({ initialValues, postDetails }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        console.log(values);
        postDetails(values);
      }}
    >
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

            <Grid item xs={6}>
              <NewRadio label="Type Of Work">
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
    </Formik>
  );
};

export default JobDetailsForm;
