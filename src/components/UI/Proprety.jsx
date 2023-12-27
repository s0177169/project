import React from "react";

const Proprety = ({ isMain, heading, text }) => {
  return (
    <div>
      {isMain ? (
        <div className="flex flex-row w-48 relative">
          <div className="bg-primary-red-light h-28" style={{width: 16}} />
          <div className="absolute bottom-0 left-5">
            <div className="flex flex-row items-baseline">
              <h1 className="text-60 font-bold">#1</h1>
              <img className="h-20" src="./img/cup.png" alt="" />
            </div>
            <p className="text-sm -mt-3 opacity-90">
              Drupal-разработчик в России по версии Рейтинга Рунета
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-row h-28 w-48 items-end">
          <div className="flex items-center">
          <div className="h-28 bg-primary-red-light" style={{width: 16}} />
          <div className="flex flex-col items-start justify-between px-5">
            <h1 className="text-40 font-bold">{heading}</h1>
            <p className="opacity-90">{text}</p>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Proprety;
