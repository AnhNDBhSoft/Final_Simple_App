import React, { useState } from "react";
import { useFormikContext } from "formik";
import AppTextInput from "../AppTextInput/AppTextInput";
import ErrorMessage from "./ErrorMessage";

export default function AppFormField({name, width, ...otherProps }) {
  const [textAlign, setTextAlign] = useState('center');
  
  const {
    setFieldValue,
    errors,
    setFieldTouched,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
      <AppTextInput
        {...otherProps}
        width={width}
        textAlign={textAlign}
        onBlur={() => {
          setFieldTouched(name)
        }}
        onChangeText={(text) => {
          if (text === '')  setTextAlign('center')
          else setTextAlign('left')

          setFieldValue(name, text)}}
        value={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
