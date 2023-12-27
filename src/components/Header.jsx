import React from "react";
import Select from "./UI/Select";
import Button from "./UI/Button";
import Proprety from "./UI/Proprety";

const Header = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden flex flex-col">
      <video
        src="./img/video.mp4"
        loop
        autoPlay
        muted
        className="absolute top-0 left-0 object-cover w-full h-full"
      />
      <img
        src="./img/drupliconBg.png"
        className="absolute top-0 left-0 object-cover w-full h-full"
        alt="background"
        draggable={false.toString()}
      />
      <div className="absolute px-40 pt-12 w-full">
        <nav className=" flex flex-row justify-between text-white uppercase">
          <div className="flex flex-row gap-12">
            <img className="h-5" src="./img/logoSite.png" alt="" />
            <div className="flex flex-row gap-5 max-h-3">
              <div className="underline underline-offset-10 decoration-2 decoration-primary-red-light">
                <a href="/">Поддержка сайтов</a>
              </div>
              <a href="/">Тарифы</a>
              <a href="/">Наши работы</a>
              <a href="/">Отзывы</a>
              <a href="/">Контакты</a>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <a href="/">8 800 222-26-73</a>
            <div className="z-50">
              <Select options={["RU", "EN"]} />
            </div>
          </div>
        </nav>
        <div className="min-h-screen overflow-hidden w-full flex justify-between items-center text-white ">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold  text-32" style={{ lineHeight: 1 }}>
              Поддержка <br /> сайтов на Drupal
            </h1>
            <p className="text-16">
              Сопровождение и поддержка сайтов <br /> на CMS Drupal любых версий
              и запущенности
            </p>
            <div className="mt-5 w-16">
              <Button>Тарифы</Button>
            </div>
          </div>
          <div className="grid grid-rows-2 grid-cols-3 gap-y-10 gap-x-16 ">
            <div className="flex flex-row items-end">
              <div className="h-24 w-2 bg-primary-red-light" />
              <div className="ml-3 flex-col">
                <div className="flex flex-row items-baseline">
                  <h1 className="text-48 font-bold">#1</h1>
                  <img className="h-16" src="./img/cup.png" alt="" />
                </div>
                <p className="opacity-70 text-12">
                  Drupal-разработчик <br /> в России по версии <br /> Рейтинга
                  Рунета
                </p>
              </div>
            </div>
            <div className="flex flex-row items-end">
              <div className="h-24 w-2 bg-primary-red-light" />
              <div className="ml-3 flex-col">
                <div className="flex flex-row items-baseline">
                  <h1 className=" text-32 font-bold">3+</h1>
                </div>
                <p className="opacity-70 text-12">
                  средний опыт <br /> специалистов более <br /> 3 лет
                </p>
              </div>
            </div>
            <div className="flex flex-row items-end">
              <div className="h-24 w-2 bg-primary-red-light" />
              <div className="ml-3 flex-col">
                <div className="flex flex-row items-baseline">
                  <h1 className=" text-32 font-bold">14</h1>
                </div>
                <p className="opacity-70 text-12">лет опыта в сфере <br /> Drupal</p>
              </div>
            </div>
            <div className="flex flex-row items-end">
              <div className="h-24 w-2 bg-primary-red-light" />
              <div className="ml-3 flex-col">
                <div className="flex flex-row items-baseline">
                  <h1 className=" text-32 font-bold">200+</h1>
                </div>
                <p className="opacity-70 text-12">
                  модулей и тем <br /> в формате DrupalGive
                </p>
              </div>
            </div>
            <div className="flex flex-row items-end">
              <div className="h-24 w-2 bg-primary-red-light" />
              <div className="ml-3 flex-col">
                <div className="flex flex-row items-baseline">
                  <h1 className=" text-32 font-bold">35 000</h1>
                </div>
                <p className="opacity-70 text-12">
                  часов поддержки <br /> сайтов на Drupal
                </p>
              </div>
            </div>
            <div className="flex flex-row items-end">
              <div className="h-24 w-2 bg-primary-red-light" />
              <div className="ml-3 flex-col">
                <div className="flex flex-row items-baseline">
                  <h1 className=" text-32 font-bold">200+</h1>
                </div>
                <p className="opacity-70 text-12">проектов <br /> на поддержке</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
