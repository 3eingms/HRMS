import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel'
import FormGroup from '@mui/material/FormGroup'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel';
import { useField,useFormikContext } from 'formik';

const CheckBoxWrapper = ({name,label,legend,error,...otherProps}) => {
    const {field,meta} = useField(name)
    const {setFieldValue} = useFormikContext()

    const handleChange = (evt) =>{
        const {checked} = evt.target
        setFieldValue(name,checked)
    }

    const configFormControl = {}

    

    const configCheck = {
        ...otherProps,
        ...field,
        onChange: handleChange
    }
    if(meta && meta.touched && meta.error){
        configFormControl.error = true
        configFormControl.helperText = meta.error
    }

console.log(configFormControl);
  return (
    <FormControl {...configFormControl}>
    <FormLabel component='legend'  >{legend}</FormLabel>
    <FormGroup>
        <FormControlLabel control={<Checkbox {...configFormControl} />} label={label} />
        <div>{error && <p style={{color:"red"}}>{error}</p>}</div>
    </FormGroup>
 
</FormControl>

  )
}

export default CheckBoxWrapper