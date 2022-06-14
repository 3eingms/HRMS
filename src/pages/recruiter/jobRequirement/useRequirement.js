import API from '../../../config/API'
import * as Yup from 'yup'

function useRequirement() {
    const initialValues =  {
        qualification:'',
        exp_required:'',
        key_responsibilities:'',
    }

    const postRequirement = async (data)=>{
        try{
            const res = await API.post('/recruiter/job_details/0',data)
            console.log(res)
        }
        catch(error){
            console.log(error)
        }
    }

    const formValidation = Yup.object().shape({
        qualification:Yup.string().required('qualification is required'),
        exp_required:Yup.string().required('exprience is required'),
        key_responsibilities:Yup.string().required('key responsibilities is required'),
    })

  return {
    initialValues,postRequirement,formValidation
  }
}

export default useRequirement
