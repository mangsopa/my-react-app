import React from "react";
import AuthLayout from "../Components/Layouts/AuthLayouts";
import FormLogin from "../Components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="text-sm mt-5 text-center ">
        Don't have an account?
        <Link to="/register" className="font-bold text-blue-600 mx-1">
          Sign Up
        </Link>
      </p>
      <p className="text-sm mt-5 text-center ">
        Link For Game
        <Link to="/games" className="font-bold text-blue-600 mx-1">
          Go
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
