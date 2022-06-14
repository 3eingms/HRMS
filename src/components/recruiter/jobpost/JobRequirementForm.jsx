import {Formik , Form} from 'formik'
import TextFieldWrapper from '../../layout/FormValidation/TextField';
import ButtonWrapper from '../../layout/FormValidation/Button';

// mui packages
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";



const JobRequirementForm = ({initialValues,postRequirement,formValidation})=>{
    return(
        <Formik initialValues={initialValues} validationSchema = {formValidation} onSubmit={async (values)=>{
            postRequirement(values)
        }} >
            <Form>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography>Requirements</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextFieldWrapper name='qualification' label= 'Qualification'/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextFieldWrapper name='exp_required' label = 'Experience' />
                        </Grid>

                        <Grid item xs={12}>
                            <TextFieldWrapper name='key_responsibilities' label = 'Key responsibilities' />
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

export default JobRequirementForm