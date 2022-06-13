import axios from 'axios'
import * as Yup from 'yup'

const useSkill = () => {
    const initialValue = {
        skill_name:''
    }

    const formValidation = Yup.object().shape({
        skill_name:Yup.string().required("skill is required!")
    })

    const skillPost = (data)=>{
        const token =  localStorage.getItem('userToken')
        console.log(token)
        axios.post('http://192.168.1.45:9000/applicant/multiskill',data,{headers:{Authorization:`${token}`}})
        .then((res)=>{
            console.log(res)
        })
        .catch((er)=>{
            console.log(er, 'error from catch')
        })
    }
  return {
    initialValue,skillPost,formValidation
  }
}

export default useSkill