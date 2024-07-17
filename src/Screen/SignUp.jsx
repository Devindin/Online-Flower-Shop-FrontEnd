import React, { useState ,useEffect } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import InputField from "../Components/InputField";
import PrimaryButton from "../Components/PrimaryButton";
import axios from "axios";
import InputPassword from "../Components/InputPassword";
import background from "../Images/Homeimg2.png"
import NormalHeader from "../Components/NormalHeader";

function SignUp() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(false);

  const RegistrationSchema = Yup.object().shape({
    email: Yup.string().email().required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lower letter")
      .matches(/[A-Z]/, "Password requires a upper letter")
      .matches(/[^\w]/, "Password requires a symbol")
      .required("Required"),
  });

  const handleUserRegistration = async (values, { resetForm }) => {
    try {
      console.log("Form data:", values);

      const response = await axios.post(
        "http://localhost:5000/addNewUser",
        values
      );
      console.log("Response:", response.data);

      if (response.data.message === 'user registered successfuly') {
        setSuccessMessage(true);
      }

      console.log("Form reset");
      resetForm();
      navigate("/Login");
    } catch (error) {
      console.log("Errors", error);

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
        validationSchema={RegistrationSchema}
        onSubmit={handleUserRegistration}
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
              type="pasword"
              placeholder="Password"
              handleChange={handleChange}
              values={values}
            />

            <PrimaryButton
              label="Register"
              bgcolor="#91BD3A"
              textcolor="#ffffff"
              type="submit"
            />

            {
              successMessage &&(
                <span className="text-green-600 text-[12px] mt-2">User Registered Successfully!</span>
              )
            }

            <div className="w-full flex flex-row justify-between mt-3">
              <h5 className="text-[12px]">
                Already have an account?{" "}
                <span className="text-[#91BD3A] ">
                  <Link to="/Login">Login</Link>
                </span>
              </h5>
            </div>
          </Form>
        )}
      </Formik>
      </div>
      </div>
      </div>
  );
}

export default SignUp;
