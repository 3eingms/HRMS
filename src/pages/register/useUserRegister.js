import * as Yup from 'yup'
import API from './../../config/API'

const useUserRegister = () => {
    const  INITIAL_VALUE = {
        email:'',
        name:'',
        role:'',
        password:'',
        password2:''
    }
    console.log(API.defaults.headers);
    const formValidation = Yup.object().shape({
        email:Yup.string().email('Invalid Email! please enter correct email ').required('Email is Required!'),
        name:Yup.string().required('Name is Required!'),
        role:Yup.string().required('Role is Required!'),
        password: Yup.string().required('Password is required!'),
        password2: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must be match')
    })

    const postData = async  (data)=>{

        try{
            const res = await API.post('accounts/register',data)
            console.log(res)
            console.log(res.data.token)
            localStorage.setItem('userToken',res.data.token)
        }
        catch(er){
            console.log(er,'error from catch')
        }



        

    }
  return{
    INITIAL_VALUE,formValidation , postData 
  }
}

export default useUserRegister