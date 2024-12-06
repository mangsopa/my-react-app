import React from "react";
import AuthLayout from "../Components/Layouts/AuthLayouts";
import FormRegister from "../Components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="text-sm mt-5 text-center ">
        Have an account?
        <Link to="/login" className="font-bold text-blue-600 mx-1">
          Sign In
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
