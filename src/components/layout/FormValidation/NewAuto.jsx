import React from 'react'
import { Formik, Form, Field } from 'formik'
import { object, array } from 'yup'
import { Autocomplete } from 'material-ui-formik-components/Autocomplete'
import { TextField } from '@material-ui/core'
import { fieldToTextField } from 'formik-material-ui'

const skills = [
  {
    label: 'PostgreSQL',
    value: 'PostgreSQL'
  },
  {
    label: 'Pythonaa',
    value: 'Pythona'
  },
  {
    label: 'React',
    value: 'React'
  },
  {
    label: 'Redis',
    value: 'Redis'
  },
  {
    label: 'Swift',
    value: 'Swift'
  },
  {
    label: 'Webpack',
    value: 'Webpack'
  }
]
const validationSchema = object().shape({
  skills: array().required('At least one skill is required')
})

const initialValues = {
  username: 'abc',
  gender: '',
  country: '',
  skills: [
    {
      label: 'Swift',
      value: 'Swift'
    },
    {
      label: 'Webpack',
      value: 'Webpack'
    }
  ],
  birthdate: null
}

const FormikAutocomplete = ({ textFieldProps, ...props }) => {
  const {
    form: { setTouched, setFieldValue }
  } = props
  const { error, helperText, ...field } = fieldToTextField(props)
  const { name } = field

  return (
    <Autocomplete
      {...props}
      {...field}
      onChange={(_, value) => setFieldValue(name, value)}
      onBlur={() => setTouched({ [name]: true })}
      getOptionSelected={(item, current) => item.value === current.value}
      renderInput={props => (
        <TextField
          {...props}
          {...textFieldProps}
          helperText={helperText}
          error={error}
        />
      )}
    />
  )
}

const SimpleFormExample = () => (
  <div>
    <h1>Simple Form Example</h1>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <Form>
          <Field
            name="skills"
            component={FormikAutocomplete}
            label="Skills"
            options={skills}
            textFieldProps={{
              fullWidth: true,
              margin: 'normal',
              variant: 'outlined'
            }}
            multiple
          />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
)

export default SimpleFormExample
