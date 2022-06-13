import axios from 'axios'
import * as Yup from 'yup'

const useProject = () => {
    const initialValues = {
        title:'',
        description:'',
        status:'',
        technology:'',
        start_date:'',
        end_date:''
    }

    const formValidation = Yup.object().shape({
        title:Yup.string().required('title is required!'),
        description:Yup.string().required('description is required!'),
        status:Yup.string().required('project progress is required!'),
        technology:Yup.string().required('technology is required!'),
        start_date:Yup.string().required('start date is required!'),
        end_date:Yup.string().required('end date is required!'),
    })

    const postProject = (data)=>{
        const token = localStorage.getItem('userToken')
        axios.post('http://192.168.1.45:9000/applicant/project/0',data,{headers:{'Authorization':`${token}`}})
        .then((res)=>{
            console.log(res)
        })
        .catch((er)=>{
            console.log(er,'error from catch')
        })
    }
  return {initialValues,postProject,formValidation  }
}

export default useProject