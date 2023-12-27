import React from "react";

const Services = () => {
  return (
    <div className="px-40 mt-24">
      <h1 className="text-40 font-bold text-primary-blue-dark">
        13 лет совершенствуем <br /> компетенции в Drupal <br /> поддержке!
      </h1>
      <p className="text-16 text-primary-blue-dark">
        Разрабатываем и оптимизируем модули, расширяем <br /> функциональность
        сайтов, обновляем дизайн
      </p>
      <div className="grid grid-rows-2 grid-cols-4 mt-16 gap-y-16 text-primary-bule-dark">
        <div className="flex flex-col justify-between items-start h-52 w-40">
          <img
            className="flex grow-0 h-14"
            src="./img/competency-1.svg"
            alt=""
          />
          <img
            className="absolute -ml-14 h-16"
            src="./img/icon-bg.png"
            alt=""
          />
          <p className="text-16">
            Добавление информации на сайт, создание новых разделов
          </p>
        </div>
        <div className="flex flex-col justify-between items-start h-52 w-40">
          <img
            className="flex grow-0 h-14"
            src="./img/competency-2.svg"
            alt=""
          />
          <img
            className="absolute -ml-14 h-16"
            src="./img/icon-bg.png"
            alt=""
          />
          <p className="text-16">Разработка и оптимизация модулей сайта</p>
        </div>
        <div className="flex flex-col justify-between items-start h-52 w-40">
          <img
            className="flex grow-0 h-14"
            src="./img/competency-3.svg"
            alt=""
          />
          <img
            className="absolute -ml-14 h-16"
            src="./img/icon-bg.png"
            alt=""
          />
          <p className="text-16">
            Интеграция с CRM, 1C, платежными системами, любыми веб-сервисами
          </p>
        </div>
        <div className="flex flex-col justify-between items-start h-52 w-40">
          <img
            className="flex grow-0 h-14"
            src="./img/competency-4.svg"
            alt=""
          />
          <img
            className="absolute -ml-14 h-16"
            src="./img/icon-bg.png"
            alt=""
          />
          <p className="text-16">Любые доработки функционала и дизайна</p>
        </div>
        <div className="flex flex-col justify-between items-start h-52 w-40">
          <img
            className="flex grow-0 h-14"
            src="./img/competency-5.svg"
            alt=""
          />
          <img
            className="absolute -ml-14 h-16"
            src="./img/icon-bg.png"
            alt=""
          />
          <p className="text-16">
            Аудит и мониторинг безопасности Drupal сайтов
          </p>
        </div>
        <div className="flex flex-col justify-between items-start h-52 w-40">
          <img
            className="flex grow-0 h-14"
            src="./img/competency-6.svg"
            alt=""
          />
          <img
            className="absolute -ml-14 h-16"
            src="./img/icon-bg.png"
            alt=""
          />
          <p className="text-16">Миграция, импорт контента и апгрейд Drupal</p>
        </div>
        <div className="flex flex-col justify-between items-start h-52 w-40">
          <img
            className="flex grow-0 h-14"
            src="./img/competency-7.svg"
            alt=""
          />
          <img
            className="absolute -ml-14 h-16"
            src="./img/icon-bg.png"
            alt=""
          />
          <p className="text-16">Оптимизация и ускорение Drupal-сайтов</p>
        </div>
        <div className="flex flex-col justify-between items-start h-40 w-40">
          <img
            className="flex grow-0 h-14"
            src="./img/competency-8.svg"
            alt=""
          />
          <img
            className="absolute -ml-14 h-16"
            src="./img/icon-bg.png"
            alt=""
          />
          <p className="text-16">Веб-маркетинг, консультации и работы по SEO</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
