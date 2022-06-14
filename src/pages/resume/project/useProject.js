import * as Yup from 'yup'
import API from '../../../config/API'

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

    const postProject = async (data)=>{
        try{
            const res = await API.post('/applicant/project/0',data)
            console.log(res)
        }
        catch(error){
            console.log(error)
        }
    }

    // const postProject = (data)=>{
    //     const token = localStorage.getItem('userToken')
    //     axios.post('http://192.168.1.45:9000/applicant/project/0',data,{headers:{'Authorization':`${token}`}})
    //     .then((res)=>{
    //         console.log(res)
    //     })
    //     .catch((er)=>{
    //         console.log(er,'error from catch')
    //     })
    // }
  return {initialValues,postProject,formValidation  }
}

export default useProject