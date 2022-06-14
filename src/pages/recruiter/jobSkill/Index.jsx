import React from 'react'
import JobSkillsForm from '../../../components/recruiter/jobpost/JobSkillsFrom'
import useJobSkill from './useJobSkill'

const JobSkills = () => {
    const {initialValues,skillPost,formValidation}  = useJobSkill()
  return (
    <JobSkillsForm initialValues={initialValues} skillPost={skillPost} formValidation={formValidation} />
  )
}

export default JobSkills