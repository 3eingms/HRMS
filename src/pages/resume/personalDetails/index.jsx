import React from 'react'
import PersonalDetailsForm from '../../../components/applicant/resume/PersonalDetailsForm'
import usePersonal from './usePersonal'


const PersonalDetails = () => {
    const {INITIAL_VALUE,PersonalData,formValidation } = usePersonal()
  return (
    <PersonalDetailsForm  INITIAL_VALUE={INITIAL_VALUE} PersonalData={PersonalData} formValidation ={formValidation }/>
  )
}

export default PersonalDetails