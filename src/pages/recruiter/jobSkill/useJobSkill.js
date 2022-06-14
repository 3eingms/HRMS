import API from '../../../config/API'
import * as Yup from 'yup'

const useJobSkill = () => {
    const initialValues = {
        skill : ''
    }

    const formValidation = Yup.object().shape({
      skill:Yup.string().required('skill is required')
    })

    const skillPost = async (data) =>{
      try{
        const res = await API.post('/recruiter/multiple_required_skill',data)
        console.log(res)
      }
      catch(error){
        console.log(error)
      }
    }



  return {
    initialValues,skillPost,formValidation
  }
}

export default useJobSkill