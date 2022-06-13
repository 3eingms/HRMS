import React from 'react'
import SaleryPerksForm from '../../../components/recruiter/jobpost/SaleryPerksForm'
import useSalaryPerk from './useSalaryPerk'

const SalaryPerks = () => {
    const {initialValues,PostSalaryPerks} =  useSalaryPerk()
  return (
    <SaleryPerksForm  initialValues={initialValues} PostSalaryPerks={PostSalaryPerks}  />
  )
}

export default SalaryPerks