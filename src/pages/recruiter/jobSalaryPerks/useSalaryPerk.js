import axios from 'axios'

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

    const PostSalaryPerks = (data)=>{
      axios.post('http://192.168.1.45:9000/recruiter/salaryandperks/0',data)
      .then((res)=>{
        console.log(res)
      })
      .catch((er)=>{
        console.log('eror from catch',er)
      })
    }
  return {
    initialValues,PostSalaryPerks
  }
}

export default useSalaryPerk