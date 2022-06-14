import axios from "axios";
import * as Yup from "yup";
import API from "../../config/API";
const useLogin = () => {
  const Initial_value = {
    email: "",
    password: "",
  };

  const formValidation = Yup.object().shape({
    email: Yup.string()
      .email("invalid email! please enter correct email")
      .required("email is required"),
    password: Yup.string().required("password is required"),
  });

  const loginData = async (data) => {
    try {
      const res = await API.post(
        "/accounts/login",
        data
      );

      console.log(res);
      localStorage.setItem("token", res.data.token);
      console.log(localStorage.getItem("userToken"));
    } catch (error) {
      console.log(error, "error from catch");
    }
  };

  return {
    loginData,
    Initial_value,
    formValidation,
  };
};

export default useLogin;
