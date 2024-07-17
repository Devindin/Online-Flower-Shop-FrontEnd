import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

function InputPassword({
  label,
  name,
  type,
  placeholder,
  handleChange,
  values,
}) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="form-field-container flex flex-col sm:mt-5 w-full space-y-2">
      <div className="form-field-lable sm:flex justify-between w-full hidden">
        <span className="text-[#1a1a1a] text-[12px] uppercase font-semibold">
          {label}
        </span>
        <ErrorMessage
          name={name}
          component="span"
          className="text-red-600 text-[12px]"
        />
        <div className="">
          <span className="text-red-600 text-[12px]"></span>
        </div>
      </div>
      <div className="form-field-input-container w-full rounded-[6px] bg-[#ffffff] h-[38px] border-[1px] border-[#565656] border-opacity-20 flex flex-row justify-center items-center">
        <div className="form-field-input-icobox bg-[#91BD3A] h-[38px] w-[38px] rounded-bl-[6px] rounded-tl-[6px] justify-center items-center flex">
          <span className="text-[16px] text-[#ffffff]">
            <FontAwesomeIcon icon={faLock} />
          </span>
        </div>
        <Field
          type={passwordVisible ? 'text' : 'password'}
          name={name}
          value={values[name]}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full h-full p-2 bg-transparent outline-none text[12px] form-field-input"
          required
        ></Field>
        <div className="h-[38px] w-[38px] rounded-tl-[6px] rounded-bl-[6px] justify-center items-center flex">
          {passwordVisible ? (
            <span
              className="text-[16px] text-[#91BD3A] cursor-pointer"
              onClick={togglePassword}
            >
              <FontAwesomeIcon icon={faEye} />
            </span>
          ) : (
            <span
              className="text-[16px] text-[#91BD3A] cursor-pointer"
              onClick={togglePassword}
            >
              <FontAwesomeIcon icon={faEyeSlash} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default InputPassword;
