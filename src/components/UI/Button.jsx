import React from "react";

const Button = ({ children, filled, outlinedGray }) => {
  return <button className={`${outlinedGray && 'border-2 border-gray-300 text-gray-700 hover:bg-gray-300 hover:text-gray-700'} py-4 px-24 border-2 border-primary-red-light flex items-center justify-center rounded-lg uppercase ${filled && 'bg-primary-red-light w-full'} hover:bg-primary-red-light hover:text-white transition ease-in-out delay-150`}>{children}</button>;
};

export default Button;
