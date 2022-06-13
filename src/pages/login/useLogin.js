import axios from 'axios'
import * as Yup from 'yup'
const useLogin = () => {

    const Initial_value = {
        email:'',
        password:''
    }

    const formValidation = Yup.object().shape({
        email:Yup.string().email('invalid email! please enter correct email').required('email is required'),
        password:Yup.string().required('password is required')
    })

    const loginData=(data)=>{
        axios.post('http://192.168.1.45:9000/accounts/login',data)
        .then((res)=>{
            console.log(res)
            localStorage.setItem('token',res.data.token)
            console.log(localStorage.getItem('userToken'))
        })
        .catch((error)=>{
            console.log(error,'error from catch')
        })
    }

  return {
    loginData,Initial_value,formValidation
  }
}

export default useLogin