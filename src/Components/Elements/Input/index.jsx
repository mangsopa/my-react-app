import React from "react";
import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { title, name, type, placeholder } = props;

  return (
    <div className="mb-6">
      <Label htmlFor={name}>{title}</Label> {/* htmlFor menggunakan name */}
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;