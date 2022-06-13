import React from 'react'
import ProjectDetailsForm from '../../../components/applicant/resume/ProjectDetailsForm'
import useProject from './useProject'

const ProjectDetails = () => {
  const {initialValues,postProject,formValidation } = useProject()

  return (
    <ProjectDetailsForm  initialValues={initialValues} postProject={postProject } formValidation={formValidation} />
  )
}

export default ProjectDetails