import { Formik, Form } from "formik";
import ButtonWrapper from "../../FormValidation/Button";
import AutoCompleteValidation from "../../FormValidation/AutoComplete";

// mui packages
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

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



const SkillForm = ({ InitialValue, skillPost ,formValidation}) => {
  return (
    <Formik
      initialValues={InitialValue}
      validationSchema={formValidation}
      onSubmit={async (values) => {
        skillPost(values);
      }}
    >
      {(values)=> (
     
      <Form>
        {console.log(values)}
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>Skill Detail</Typography>
            </Grid>

            <Grid item xs={12}>
              <AutoCompleteValidation  name='skill_name' skillName={skillName}/>
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

export default SkillForm;

