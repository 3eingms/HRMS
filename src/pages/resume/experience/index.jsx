import React from 'react'
import ExperienceForm from '../../../components/applicant/resume/ExperienceForm'
import useExperience from './useExperience'

const ExperienceDetails = () => {
    const {  experiencePostData,initialValues,formValidation} = useExperience()
  return (
    <ExperienceForm  initialValues={initialValues}experiencePostData={experiencePostData} formValidation={formValidation}/>
  )
}

export default ExperienceDetails