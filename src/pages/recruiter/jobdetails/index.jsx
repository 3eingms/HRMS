import React from 'react'
import JobDetailsForm from '../../../components/recruiter/jobpost/JobDetailsForm'
import useJobDetails from './useJobDetails'

const JobDetails = () => {
    const {initialValues,postDetails,formValidation} = useJobDetails()
  return (
    <JobDetailsForm initialValues={initialValues} postDetails={postDetails} formValidation={formValidation} />
  )
}

export default JobDetails