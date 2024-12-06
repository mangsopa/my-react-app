import React from "react";

const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <div className="text-2xl text-blue-600 mb-2 font-bold">{title}</div>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
