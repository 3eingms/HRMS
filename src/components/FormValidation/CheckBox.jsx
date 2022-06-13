import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel'
import FormGroup from '@mui/material/FormGroup'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel';
import { useField,useFormikContext } from 'formik';

const CheckBoxWrapper = ({name,label,legend,...otherProps}) => {
    const {field,meta} = useField(name)
    const {setFieldValue} = useFormikContext()

    const handleChange = (evt) =>{
        const {checked} = evt.target
        setFieldValue(name,checked)
    }

    const configFormControl = {}

    if(meta && meta.touched && meta.error){
        configFormControl.error = true
    }

    const configCheck = {
        ...otherProps,
        ...field,
        onChange: handleChange
    }
  return (
    <FormControl {...configCheck}>
    <FormLabel component='legend'>{legend}</FormLabel>
    <FormGroup>
        <FormControlLabel control={<Checkbox/>} label={label} />
    </FormGroup>
</FormControl>
  )
}

export default CheckBoxWrapper