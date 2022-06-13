import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useField, useFormikContext } from "formik";

function AutoCompleteValidation({ name , skillName,...otherProps}) {
  const { setFieldValue, values} = useFormikContext();
  const [field,meta] = useField(name)
  // console.log(values);
  const configAuto = {
    ...field,
    ...otherProps,
    fullWidth:true,
  }

  if(meta && meta.touched && meta.error){
    configAuto.error = true
    configAuto.helperText = meta.error
  }
  return (
    <Stack spacing={3}>
      <Autocomplete
        name={name}
        multiple
        id="tags-outlined"
        options={skillName}
        getOptionLabel={(option) => option}
        onChange={(e, value) => setFieldValue(name, value)}
        value={values[name] || []}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...configAuto}
            {...params}
            label="Skills"
            // placeholder="Favorites"
            fullWidth
          />
        )}
      />
    </Stack>
  );
}
export default AutoCompleteValidation

