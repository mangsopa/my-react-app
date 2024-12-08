import React from "react";

function Button(props) {
  const { variant = "bg-black", children, type = "button" } = props; // Default type adalah "button"
  return (
    <div>
      <button
        className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
        type={type}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
