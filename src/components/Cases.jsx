import React from "react";
import Button from "./UI/Button";

const Cases = () => {
  return (
    <div className="mt-24 flex flex-col items-center justify-center w-full px-40">
      <h1 className="text-40 font-bold text-primary-blue-dark text-center">
        Последние кейсы
      </h1>
      <div className="grid grid-cols-3 grid-rows-3 gap-8 mt-10">
        <div className="col-span-1 flex flex-col justify-between items-center">
          <img className="w-full" src="./img/case1.png" alt="" />
          <div className="px-8 py-16">
            <h3 className="font-bold to-primary-blue-light text-24">
              Настройка выгрузки YML для Яндекс.Маркета
            </h3>
            <span className="font-bold text-20 opacity-70">22.04.2019</span>
            <p className="mt-4 text-20">
              Эти слова совершенно справедливы, однако гипнотический рифф
              продолжает паузный пласт.
            </p>
          </div>
        </div>
        <div className="col-span-2 relative">
          <img
            className="w-full h-full object-cover"
            src="./img/case2.png"
            alt=""
          />
          <div
            className="absolute top-0 bottom-0 left-0 right-0 rounded-lg"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(6,6,6,0.8155637254901961) 90%)",
            }}
          >
            <div className="absolute text-white text-24 font-bold bottom-10 left-10">
              Настройка выгрузки YML для Яндекс.Маркета
            </div>
          </div>
        </div>
        <div className="col-span-1 relative">
          <img className="w-full" src="./img/case3.png" alt="" />
          <div
            className="absolute top-0 bottom-0 left-0 right-0 rounded-lg"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(6,6,6,0.8155637254901961) 90%)",
            }}
          >
            <div className="absolute text-white text-24 font-bold flex flex-col gap-3 bottom-10 left-10">
              Настройка выгрузки YML для Яндекс.Маркета
              <span className="font-bold text-20 opacity-70">22.04.2019</span>
            </div>
          </div>
        </div>
        <div className="col-span-1 relative">
          <img className="w-full" src="./img/case4.png" alt="" />
          <div
            className="absolute top-0 bottom-0 left-0 right-0 rounded-lg"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(6,6,6,0.8155637254901961) 90%)",
            }}
          >
            <div className="absolute text-white text-24 font-bold flex flex-col gap-3 bottom-10 left-10">
              Настройка выгрузки YML для Яндекс.Маркета
              <span className="font-bold text-20 opacity-70">22.04.2019</span>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-between items-center">
          <img className="w-full" src="./img/case5.png" alt="" />
          <div className="px-8 py-16">
            <h3 className="font-bold to-primary-blue-light text-24">
              Настройка выгрузки YML для Яндекс.Маркета
            </h3>
            <span className="font-bold text-20 opacity-70">22.04.2019</span>
            <p className="mt-4 text-20">
              Эти слова совершенно справедливы, однако гипнотический рифф
              продолжает паузный пласт.
            </p>
          </div>
        </div>
        <div className="col-span-2 relative">
          <img
            className="w-full h-full object-cover"
            src="./img/case6.png"
            alt=""
          />
          <div
            className="absolute top-0 bottom-0 left-0 right-0 rounded-lg"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(6,6,6,0.8155637254901961) 90%)",
            }}
          >
            <div className="absolute text-white text-24 font-bold bottom-10 left-10">
              Настройка выгрузки YML для Яндекс.Маркета
            </div>
          </div>
        </div>
        <div className="col-span-1 relative">
          <img
            className="h-full object-cover  rounded-lg"
            src="./img/case5.png"
            alt=""
          />
          <div
            className="absolute top-0 bottom-0 left-0 right-0 rounded-lg"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(6,6,6,0.8155637254901961) 90%)",
            }}
          >
            <div className="absolute text-white text-24 font-bold flex flex-col gap-3 bottom-10 left-10">
              Настройка выгрузки YML для Яндекс.Маркета
              <span className="font-bold text-20 opacity-70">22.04.2019</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Button outlinedGray>Показать еще</Button>
      </div>
    </div>
  );
};

export default Cases;
