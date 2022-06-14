import React from 'react'
import JobRequirementForm from '../../../components/recruiter/jobpost/JobRequirementForm'
import useRequirement from './useRequirement'

const PostRequirement = () => {
    const {initialValues,postRequirement,formValidation} = useRequirement()
  return (
    <JobRequirementForm  initialValues={initialValues} postRequirement = {postRequirement} formValidation={formValidation}/>
  )
}

export default PostRequirement