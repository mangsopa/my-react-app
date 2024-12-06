import React from "react";

function Button(props) {
  const { variant = "bg-black", children } = props;
  return (
    <div>
      <button
        className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
        type="submit"
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
