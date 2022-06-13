import React from 'react'
import JobDetailsForm from '../../../components/recruiter/jobpost/JobDetailsForm'
import useJobDetails from './useJobDetails'

const JobDetails = () => {
    const {initialValues,postDetails} = useJobDetails()
  return (
    <JobDetailsForm initialValues={initialValues} postDetails={postDetails} />
  )
}

export default JobDetails