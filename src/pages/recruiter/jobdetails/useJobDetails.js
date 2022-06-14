import API from '../../../config/API'
import * as Yup from 'yup'

const useJobDetails = () => {
    const initialValues = {
        job_designation:'',
        country:'',
        job_address:'',
        type_of_work:'',
        no_of_opening:'',
        job_description:'',
        recruiter:'',
        company_name:'',
        city:''
    }

    const formValidation = Yup.object().shape({
        job_designation:Yup.string().required('designation is required'),
        country:Yup.string().required('country name is required'),
        job_address:Yup.string().required('country name is required'),
        type_of_work:Yup.string().required(' work is required'),
        no_of_opening:Yup.string().required(' no_of_opening is required'),
        company_name:Yup.string().required(' company name is required'),
        city:Yup.string().required(' city name is required'),
        // recruiter:Yup.string().required(' recruiter is required'),
    })

    const postDetails = async (data)=>{
        try{
            const res = await API.post('/recruiter/job_details/0',data)
            console.log(res)
        }
        catch(error){
            console.log(error)
        }
    }

  return {
    initialValues,postDetails,formValidation
  }
}

export default useJobDetails