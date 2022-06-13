import axios from 'axios'

const useJobDetails = () => {
    const initialValues = {
        job_designation:'',
        country:'',
        job_address:'',
        type_of_work:'',
        no_of_opening:'',
        job_description:'',
        recruiter:'',
        company_name:''
    }
    const postDetails = (data)=>{
        const token = localStorage.getItem('userToken')
        console.log(token)
        axios.post('http://192.168.1.45:9000/recruiter/job_details/0',data,{headers:{'Authorization':`${token}`}})
        .then((res)=>{
            console.log(res)
        })
        .catch((er)=>{
            console.log(er,'error from catch')
        })
    }
  return {
    initialValues,postDetails
  }
}

export default useJobDetails