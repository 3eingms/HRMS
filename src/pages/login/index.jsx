import React from 'react'
import UserLoginForm from "../../components/user/UserLoginForm"
import useLogin from './useLogin'


const UserLogin = () => {

    const {loginData,Initial_value,formValidation} = useLogin();

  return (
  <>
  <UserLoginForm Initial_value={Initial_value} loginData={loginData} formValidation={formValidation}/>
  </>
  )
}

export default UserLogin