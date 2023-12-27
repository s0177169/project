import React, { useState } from "react";

const Select = ({ options }) => {
  const [isOpen, setOpen] = useState(false);
  const [startOption, setStartOption] = useState(options[0]);
  return (
    <div
      className="flex flex-col justify-start"
      onClick={() => setOpen(!isOpen)}
    >
      <div className="flex flex-row gap-2 cursor-pointer">
        <p>{startOption}</p>
        <img src="./img/arrow-lang.svg" alt="" />
      </div>
      {isOpen && (
        <div className="bg-primary-red-light py-2 absolute z-10 top-20">
          <div className="flex flex-col gap-2">
            {options.map((option) => (
              <p key={option} onClick={() => setStartOption(option)} className="cursor-pointer hover:bg-primary-red-dark w-full px-2">
                {option}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
