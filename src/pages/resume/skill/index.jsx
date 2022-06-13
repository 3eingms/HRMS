import React from 'react'
import SkillForm from '../../../components/applicant/resume/SkillDetailsForm'
import useSkill from './useSkill'

const SkillDetails = () => {
    const { initialValue,skillPost,skillOption,formValidation} = useSkill()
  return (
    <SkillForm InitialValue={initialValue}  skillPost= {skillPost} skillOption={skillOption} formValidation={formValidation}/>
  )
}

export default SkillDetails