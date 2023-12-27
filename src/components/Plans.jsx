import React from "react";
import Button from "./UI/Button";

const Plans = () => {
  return (
    <div className="relative">
      <img
        className="absolute -top-24 -right-20 -z-10"
        src="./img/D.png"
        alt=""
      />
      <div className="flex flex-col justify-center items-center mt-24">
        <h1 className="text-40 font-bold text-primary-blue-dark text-center">
          Тарифы
        </h1>
        <div className="flex flex-row mt-16 items-center">
          <div
            className="flex flex-col justify-between px-12 py-16 bg-white drop-shadow-lg border border-slate-200 rounded-lg -mr-5"
            style={{ height: 640, width: 500 }}
          >
            <div className="flex flex-col items-start">
              <div>
                <h3 className="text-28 text-primary-red-light">Стартовый</h3>
                <div className="flex flex-row">
                  <h1 className="text-8xl text-primary-blue-light font-bold">
                    2000
                  </h1>
                  <sup className="text-2xl font-semibold">₽</sup>
                </div>
                <p className="text-16">в час</p>
              </div>
            </div>
            <hr />
            <div className="flex flex-col my-10 gap-5">
              <div className="flex flex-row gap-4">
                <img src="./img/checked.svg" alt="" />
                <p className="text-16 opacity-70">Предоплата от 2 часов</p>
              </div>
              <div className="flex flex-row gap-4">
                <img src="./img/checked.svg" alt="" />
                <p className="text-16 opacity-70">
                  Консультации и работы по SEO
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <img src="./img/checked.svg" alt="" />
                <p className="text-16 opacity-70">Услуги дизайнера</p>
              </div>
              <div className="flex flex-row gap-4">
                <img src="./img/checked.svg" alt="" />
                <p className="text-16 opacity-70">Стандартное время реакции</p>
              </div>
              <div className="flex flex-row gap-4">
                <img src="./img/checked.svg" alt="" />
                <p className="text-16 opacity-70">
                  Неиспользованные оплаченные часы <br /> переносятся на
                  следующий месяц
                </p>
              </div>
            </div>
            <div className="text-primary-red-light w-full">
              <Button>Оставить заявку!</Button>
            </div>
          </div>
          <div
            className="flex flex-col justify-between px-12 py-16 bg-white drop-shadow-lg border border-slate-200 rounded-lg z-50"
            style={{ height: 680, width: 500 }}
          >
            <div className="flex flex-col items-start">
              <div>
                <h3 className="text-28 text-primary-red-light">Бизнес</h3>
                <div className="flex flex-row">
                  <h1 className="text-8xl text-primary-blue-light font-bold">
                    2000
                  </h1>
                  <sup className="text-2xl font-semibold">₽</sup>
                </div>
                <p className="text-16">в час</p>
              </div>
            </div>
            <hr />
            <div className="flex flex-col my-10 gap-5">
              <div className="flex flex-row gap-4">
                <img src="./img/checked.svg" alt="" />
                <p className="text-16 opacity-70">Предоплата от 10 часов</p>
              </div>
              <div className="flex flex-row gap-4">
                <img src="./img/checked.svg" alt="" />
                <p className="text-16 opacity-70">
                  Консультации и работы по SEO
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <img src="./img/checked.svg" alt="" />
                <p className="text-16 opacity-70">Услуги дизайнера</p>
              </div>
              <div className="flex flex-row gap-4">
                <img src="./img/checked.svg" alt="" />
                <p className="text-16 opacity-70">
                  Высокое время реакции – до 2 рабочих дней
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <img src="./img/checked.svg" alt="" />
                <p className="text-16 opacity-70">
                  Неиспользованные часы не переносятся
                </p>
              </div>
            </div>
            <div className="text-white w-full">
              <Button filled>Оставить заявку!</Button>
            </div>
          </div>
          <div
            className="flex flex-col justify-between px-12 py-16 bg-white drop-shadow-lg border border-slate-200 rounded-lg -ml-5"
            style={{ height: 640, width: 500 }}
          >
            <div className="flex flex-col items-start">
              <div>
                <h3 className="text-28 text-primary-red-light">VIP</h3>
                <div className="flex flex-row">
                  <h1 className="text-8xl text-primary-blue-light font-bold">
                    1800
                  </h1>
                  <sup className="text-2xl font-semibold">₽</sup>
                </div>
                <p className="text-16">в час</p>
              </div>
            </div>
            <hr />
            <div className="flex flex-col my-10 gap-5">
              <div className="flex flex-row gap-4">
                <img src="./img/checked.svg" alt="" />
                <p className="text-16 opacity-70">Предоплата от 100 часов</p>
              </div>
              <div className="flex flex-row gap-4">
                <img src="./img/checked.svg" alt="" />
                <p className="text-16 opacity-70">
                  Консультации и работы по SEO
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <img src="./img/checked.svg" alt="" />
                <p className="text-16 opacity-70">Услуги дизайнера</p>
              </div>
              <div className="flex flex-row gap-4">
                <img src="./img/checked.svg" alt="" />
                <p className="text-16 opacity-70">
                  Максимальное время реакции – в день обращения
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <img src="./img/checked.svg" alt="" />
                <p className="text-16 opacity-70">
                  Неиспользованные часы не переносятся
                </p>
              </div>
            </div>
            <div className="text-primary-red-light w-full">
              <Button>Оставить заявку!</Button>
            </div>
          </div>
        </div>
        <p className="opacity-70 mt-10 text-center">
          Вам не подходят наши тарифы? Оставьте заявку и мы <br /> предложим вам
          индивидуальные условия!
        </p>
        <a href="/" className="uppercase underline mt-10 underline-offset-4">Получить индивидуальный тариф</a>
      </div>
    </div>
  );
};

export default Plans;
