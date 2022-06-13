import React from 'react'
import EducationDetailsForm from '../../../components/applicant/resume/EducationDetailsForm'
import useEducation from './useEducation'


const EducationDetails = () => {
    const {initialValue,Choice_Field, educationDataPost,formValidation } = useEducation()
  return (
    <EducationDetailsForm initialValue={initialValue} Choice_Field={Choice_Field}  educationDataPost={ educationDataPost } formValidation={formValidation}/>
  )
}

export default EducationDetails