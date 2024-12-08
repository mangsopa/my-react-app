import React from "react";
import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { title, type, placeholder, name, id, value, onChange, required } =
    props;

  return (
    <div className="mb-6">
      <Label htmlFor={id}>{title}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        value={value} // Pastikan terhubung ke state
        onChange={onChange} // Pastikan meng-update state
        required={required}
      />
    </div>
  );
};

export default InputForm;
