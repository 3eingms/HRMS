import axios from 'axios'
import * as Yup from 'yup'
import API from '../../../config/API'

const useExperience = () => {
    const initialValues = {
        designation:'',
        orgnisation_name:'',
        technology:'',
        location:'',
        start_date:'',
        end_date:'',
        performance:'',
        no_of_years:''
    }
    const formValidation = Yup.object().shape({
        designation:Yup.string().required('designation is required!'),
        technology:Yup.string().required('technology is required!'),
        orgnisation_name:Yup.string().required(' organaization name is required!'),
        location:Yup.string().required('location is required!'),
        start_date:Yup.string().required('start date is required!'),
        end_date:Yup.string().required('end is date required!'),
        performance:Yup.string().required('performance is required!'),
        no_of_years:Yup.string().required('experience is required!'),
    })


    const   experiencePostData = async (data)=>{
        try{
            const res = await API.post('/applicant/experience',data)
            console.log(res)
        }
        catch(error){
            console.log(error,'error from catch')
        }
    }


  return {
    experiencePostData,initialValues,formValidation
  }
}

export default useExperience