import React, { useState ,useEffect} from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import InputField from "../Components/InputField";
import PrimaryButton from "../Components/PrimaryButton";
import axios from "axios";
import InputPassword from "../Components/InputPassword";
import background from "../Images/Homeimg2.png"
import NormalHeader from "../Components/NormalHeader";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lower letter")
      .matches(/[A-Z]/, "Password requires an upper letter")
      .matches(/[^\w]/, "Password requires a symbol")
      .required("Required"),
  });

  const handleLogin = async (values) => {
    try {
      const response = await axios.post("http://localhost:5000/login", values);

      const { token, userType } = response.data;
      console.log("Auth token", token);
      console.log("User type", userType);

      if (token) {
        localStorage.setItem("token", token);

        // Set timeout for the token
        setTimeout(() => {
          localStorage.removeItem("token");
        }, 10 * 60 * 1000);

        if (userType === "admin") {
          navigate("/AdminPanel");
        } else {
          navigate("/");
        }
      } else {
        console.error("No token received");
        setLoginError("No token received from server.");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        if (error.response.data.error === "User not found") {
          console.log("User Not Found");
          setLoginError("User not found.");
        } else if (error.response.data.error === "Invalid Password") {
          console.log("Invalid Password");
          setLoginError("Invalid Password");
        } else {
          console.error("Login Failed", error.response.data.error);
          setLoginError("Login Failed: " + error.response.data.error);
        }
      } else {
        console.error("Something went wrong on the server!", error.message);
        setLoginError("Something went wrong on the server!");
      }
    }
  };

  return (
    <div>
       <NormalHeader/>
    <div 
      className="w-full h-screen flex justify-center items-center relative bg-cover bg-center" 
      style={{ backgroundImage:`url(${background})`

       }}
    >
      
      <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-50">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          {({ errors, touched, handleChange, values }) => (
            <Form className="flex flex-col w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
              <InputField
                label="Email"
                name="email"
                type="text"
                placeholder="Email"
                handleChange={handleChange}
                values={values}
              />

              <InputPassword
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                handleChange={handleChange}
                values={values}
              />

              {loginError && (
                <p className="text-red-600 text-[12px] mt-1"> {loginError}</p>
              )}

              <PrimaryButton
                label="Login"
                bgcolor="#91BD3A"
                textcolor="#ffffff"
                type="submit"
              />

              <div className="w-full flex flex-row justify-between mt-3">
                <h5 className="text-[12px]">
                  Don't have an account?{" "}
                  <span className="text-[#91BD3A] ">
                    <Link to="/SignUp">Register Now</Link>
                  </span>
                </h5>

                <h5 className="text-[12px]">
                  <span className="text-[#91BD3A] ">Forgot Password?</span>
                </h5>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
    </div>
  );
};

export default Login;
