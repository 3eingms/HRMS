import React from 'react'
import JobSkillsForm from '../../../components/recruiter/jobpost/JobSkillsFrom'
import useJobSkill from './useJobSkill'

const JobSkills = () => {
    const {initialValues}  = useJobSkill()
  return (
    <JobSkillsForm initialValues={initialValues} />
  )
}

export default JobSkills