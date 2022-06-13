import axios from 'axios'

const useJobSkill = () => {
    const initialValues = {
        skill : ''
    }

    const skillPost = (data)=>{
      axios.post('http://192.168.1.45:9000/recruiter/multiple_required_skill',data)
      .then((res)=>{
      console.log(res)
      })
      .catch((er)=>{
        console.log(er)
      })
    }

  return {
    initialValues,skillPost
  }
}

export default useJobSkill