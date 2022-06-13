import axios from 'axios'
import * as Yup from 'yup'

const useEducation = () => {
    const initialValue = {
        eduacation_name :'',
        course_name :'',
        university :'',
        stream :'',
        performance:'',
        percentage :'',
        strat_date:'',
        end_date :''
    }

    const Choice_Field ={
        "10":"10th",
        "12": "12th",
        "Graduation":"Graduation",
        "Diploma":"Diploma",
        "Post_Graduation":"Post_Graduation",
        "PhD":"PhD",
        "Doctorate":"Doctorate",
        "ITI":"ITI"
      }

      const formValidation = Yup.object().shape({
        eduacation_name: Yup.string().required('Education name is required! '),
        course_name: Yup.string().required('Course name is required!'),
        stream: Yup.string().required('Stream name is required! '),
        university: Yup.string().required('University name is required! '),
        performance: Yup.string().required('Performance is required! '),
        percentage: Yup.string().required('Percentage is required! '),
        strat_date: Yup.string().required('please enter start date'),
        end_date: Yup.string().required('please enter end date'),
      })

      const  educationDataPost = (data)=>{
          axios.post('http://192.168.1.45:9000/applicant/education/0',data)
          .then((res)=>{
              console.log(res)
          })
          .catch((error)=>{
            console.log(error,'error from catch')
          })
      }
  return {
      initialValue,Choice_Field, educationDataPost ,formValidation
  }
}

export default useEducation