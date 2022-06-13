import {Form,Formik} from 'formik'
import AutoCompleteValidation from '../../FormValidation/AutoComplete';

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
  ]

const JobSkillsForm = ({initialValues,skillPost})=>{
    return(
        <Formik initialValues={initialValues} onSubmit = {async (values)=>{
            skillPost(values)}
         } >
            <Form>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <AutoCompleteValidation name='skill' skillName={skillName} />
                        </Grid>
                    </Grid>
                </Container>
            </Form>
        </Formik>
    )
}

export default JobSkillsForm