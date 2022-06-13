import React from 'react'
import JobRequirementForm from '../../../components/recruiter/jobpost/JobRequirementForm'
import useRequirement from './useRequirement'

const PostRequirement = () => {
    const {initialValues,postRequirement} = useRequirement()
  return (
    <JobRequirementForm  initialValues={initialValues} postRequirement = {postRequirement} />
  )
}

export default PostRequirement