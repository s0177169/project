import React from "react";

const Team = () => {
  return (
    <div className="mt-24 flex flex-col px-40 items-center justify-center">
      <h1 className="text-40 font-bold text-primary-blue-dark text-center">
        Команда
      </h1>
      <flex className="flex flex-col gap-16 mt-10">
        <div className="flex flex-row gap-32">
          <div className="flex flex-col gap-3 w-72">
            <img src="./img/IMG_2472_0.jpg" alt="" />
            <div className="p-4">
              <h3 className="font-bold to-primary-blue-light text-24">Леша</h3>
              <p className="mt-4 text-20">
                руководитель поддержки, планирование задач
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-72">
            <img src="./img/IMG_2474_1.jpg" alt="" />
            <div className="p-4">
              <h3 className="font-bold to-primary-blue-light text-24">Роман</h3>
              <p className="mt-4 text-20">инфраструктура веб-проектов</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-72">
            <img src="./img/IMG_2522_0.jpg" alt="" />
            <div className="p-4">
              <h3 className="font-bold to-primary-blue-light text-24">Ирина</h3>
              <p className="mt-4 text-20">
                менеджер по работе с клинетами, организация оказания услуг
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-32">
          <div className="flex flex-col gap-3 w-72">
            <img src="./img/IMG_2539_0.jpg" alt="" />
            <div className="p-4">
              <h3 className="font-bold to-primary-blue-light text-24">
                Сергей
              </h3>
              <p className="mt-4 text-20">SEO, веб-маркетинг</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-72">
            <img src="./img/IMG_9971_16.jpg" alt="" />
            <div className="p-4">
              <h3 className="font-bold to-primary-blue-light text-24">Даша</h3>
              <p className="mt-4 text-20">
                технический директор, 14 лет опыт работы с Drupal
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-72">
            <img src="./img/IMG_0001.png" alt="" />
            <div className="p-4">
              <h3 className="font-bold to-primary-blue-light text-24">Вадим</h3>
              <p className="mt-4 text-20">UX/UI дизайн</p>
            </div>
          </div>
        </div>
      </flex>
    </div>
  );
};

export default Team;
