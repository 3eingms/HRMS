import { CircularProgress } from '@mui/material';
import Button from '@mui/material/Button';
import {useFormikContext} from 'formik'

const ButtonWrapper = ({isLoading,children,...otherProps})=>{
    const {submitForm} = useFormikContext()

    const handleSubmit = ()=>{
        submitForm()
    }
    const configbutton = {
        variant : 'contained',
        color:'primary',
        fullWidth:true,
        onClick:handleSubmit,
        ...otherProps,
    }
    return(
        <Button {...configbutton} startIcon={isLoading && <CircularProgress size={"15px"}/>}>{children}</Button>
    )
}

export default ButtonWrapper