import axios from 'axios'

function useRequirement() {
    const initialValues =  {
        qualification:'',
        exp_required:'',
        key_responsibilities:'',
    }

    const postRequirement = (data)=>{
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
    initialValues,postRequirement
  }
}

export default useRequirement
