import React from 'react'
import UserRegisterForm from '../../components/user/UserRegisterForm'
import useUserRegister from './useUserRegister'

const UserRegister = () => {
  const { INITIAL_VALUE,formValidation , postData } = useUserRegister()
  return (
    <UserRegisterForm INITIAL_VALUE = {INITIAL_VALUE} formValidation={formValidation} postData ={postData }/>
  )
}

export default UserRegister