import React from "react";
import { Formik  , Field,Form, ErrorMessage} from "formik";

function InputField({label , name , type , placeholder, handleChange , values}) {
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
        <Field
          type={type}
          name={name}
          value ={values[name]}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full h-full p-2 bg-transparent outline-none text[12px] form-field-input"
          required
        ></Field>
      </div>
    </div>
  );
}

export default InputField;
