import { Formik, Form } from "formik";
import TextFieldWrapper from "./../../FormValidation/TextField";
import ButtonWrapper from "./../../FormValidation/Button";
import CheckBoxWrapper from "../../FormValidation/CheckBox";


// mui packages
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const SaleryPerksForm = ({ initialValues, PostSalaryPerks }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        PostSalaryPerks(values);
      }}
    >
      <Form>
        <Container>
          <Grid container spacing={2} >
            <Grid item xs={12}>
              <Typography>Salary & Perks </Typography>
            </Grid>
            <br />
            <br />

            <Grid item xs={6}>
              <TextFieldWrapper name="min_salary" label="Minimum Salary" />
            </Grid>
            {/* <Grid item xs={1}>
              <Typography>To</Typography>
            </Grid> */}
            <Grid item xs={6}>
              <TextFieldWrapper name="min_salary  " label="Maximum Salary" />
            </Grid>

            <Grid item xs={12}>
              <br />
              <br />
              <CheckBoxWrapper
                name="probation_period"
                legend="probation_period"
              />
              <hr />
            </Grid>

            <Grid item xs={6} >
            <CheckBoxWrapper
                name="five_days_week"
                legend="five_days_week"
              />
            </Grid>
            <Grid item xs={6} >
            <CheckBoxWrapper
                name="life_insurence"
                legend="life_insurence"
              />
            </Grid>
            <Grid item xs={6} >
            <CheckBoxWrapper
                name="health_insurence"
                legend="health_insurence"
              />
            </Grid>
            <Grid item xs={6} >
            <CheckBoxWrapper
                name="dress_code"
                legend="dress_code"
              />
            </Grid>
            <Grid item xs={12} >
            <CheckBoxWrapper
                name="snack_lunch"
                legend="snack_lunch"
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

export default SaleryPerksForm;
