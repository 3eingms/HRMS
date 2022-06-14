import API from '../../../config/API'
import * as Yup from 'yup'

const useSalaryPerk = () => {
    const initialValues = {
        min_salary:'',
        max_salary:'',
        probation_period:false,
        five_days_week:false,
        life_insurence:false,
        health_insurence:false,
        dress_code:false,
        snack_lunch:false,

    }

    const formValidation = Yup.object().shape({
      min_salary:Yup.string().required('minimum salary is required'),
      max_salary:Yup.string().required('maximum salary is required'),
      probation_period:Yup.boolean().oneOf([true],'probation is required')
    })

    const PostSalaryPerks = async (data)=>{
      try{
        const res = await API.post('/recruiter/salaryandperks/0',data)
        console.log(res)
      }
      catch(error){
        console.log(error)
      }
    }

  return {
    initialValues,PostSalaryPerks,formValidation
  }
}

export default useSalaryPerk