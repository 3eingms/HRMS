import { Form, Formik } from "formik";
import AutoCompleteValidation from "../../layout/FormValidation/AutoComplete";
import ButtonWrapper from "./../../layout/FormValidation/Button";

// mui packages
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
// import SelectAutoComplete from '../../FormValidation/NewAuto';

import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const skillName = [
  "React",
  "Angular",
  "python",
  "Django",
  "Java",
  "Flutter",
  "Figma",
  "Android",
  "PHP",
  "laravel",
];

const JobSkillsForm = ({ initialValues, skillPost,formValidation }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema ={formValidation}
      onSubmit={async (values) => {
        skillPost(values);
      }}
    >
      <Form>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>Job Skills</Typography>
            </Grid>
            <Grid item xs={12}>
              <AutoCompleteValidation name="skill" skillName={skillName} />
            </Grid>

            {/* 
                        <Grid item xs={12}>
                            <SelectAutoComplete name='skill' />
                        </Grid> */}
            <Grid item xs={12}>
              <ButtonWrapper>Final View</ButtonWrapper>
            </Grid>
          </Grid>
        </Container>
      </Form>
    </Formik>
  );
};

export default JobSkillsForm;


