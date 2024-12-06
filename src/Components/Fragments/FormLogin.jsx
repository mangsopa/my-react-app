import React from "react";
import Button from "../Elements/Button/button";
import InputForm from "../Elements/Input/Index";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        title="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
        id="name"
      />
      <InputForm
        title="Password"
        type="password"
        placeholder="******"
        name="password"
      />

      <Button variant="bg-blue-800 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
