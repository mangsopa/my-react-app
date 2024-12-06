import React from "react";
import Button from "../Elements/Button/button";
import InputForm from "../Elements/Input/Index";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        title="Full Name"
        type="text"
        placeholder="John Doe"
        name="text"
      />
      <InputForm
        title="Phone"
        type="text"
        placeholder="+6289xxxxxxx"
        name="phone"
      />
      <InputForm
        title="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <InputForm
        title="Password"
        type="password"
        placeholder="******"
        name="password"
      />
      <InputForm
        title="Confirm Password"
        type="password"
        placeholder="******"
        name="confirmPassword"
      />

      <Button variant="bg-blue-800 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
