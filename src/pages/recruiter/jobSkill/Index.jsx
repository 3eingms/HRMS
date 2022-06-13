import React from 'react'
import JobSkillsForm from '../../../components/recruiter/jobpost/JobSkillsFrom'
import useJobSkill from './useJobSkill'

const JobSkills = () => {
    const {initialValues,skillPost}  = useJobSkill()
  return (
    <JobSkillsForm initialValues={initialValues} skillPost={skillPost}/>
  )
}

export default JobSkills