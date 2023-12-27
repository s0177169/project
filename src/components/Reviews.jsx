import React, { useState } from "react";
import { useAttrs } from "vue";

const Reviews = () => {
  const [currentId, setCurrentId] = useState(0);

  const prevSlide = () => {
    setCurrentId((prevId) =>
      prevId - 1 < 0 ? reviews.length - 1 : prevId - 1
    );
  };

  const nextSlide = () => {
    setCurrentId((prevId) => (prevId + 1 >= reviews.length ? 0 : prevId + 1));
  };

  const reviews = [
    {
      id: 1,
      logoUrl: "./img/farbors_ru.jpg",
      heading: "Сотрудничество с Drupal Coder — отличный опыт!",
      spanText: 'Иванова Ольга, руководитель проекта "Farbors RU"',
    },
    {
      id: 2,
      logoUrl: "./img/logo_0.png",
      heading: "Drupal Coder реализовали наши идеи на высшем уровне!",
      spanText: 'Петров Сергей, генеральный директор "Ciel Parfum"',
    },
    {
      id: 3,
      logoUrl: "./img/logo.png",
      heading: "Эффективное сотрудничество с командой Drupal Coder!",
      spanText: 'Смирнова Анна, проектный менеджер "Personal Writter"',
    },
    {
      id: 4,
      logoUrl: "./img/logo_2.png",
      heading: "Профессионализм Drupal Coder превзошел ожидания!",
      spanText: 'Козлов Алексей, главный разработчик "SerebroAg"',
    },
    {
      id: 5,
      logoUrl: "./img/lpcma_rus_v4.jpg",
      heading: "Drupal Coder — надежный партнер для веб-проектов!",
      spanText: 'Морозова Елена, директор по маркетингу "Лаборатории физико-химических методов анализа"',
    },
    {
      id: 6,
      logoUrl: "./img/nashagazeta_ch.png",
      heading: "Отзывчивая команда Drupal Coder на высшем уровне!",
      spanText: 'Григорьев Дмитрий, технический директор "НашаГазета"',
    },
  ];
  

  return (
    <div className="relative">
      <img
        className="absolute -top-10 -left-15 -z-10"
        src="./img/right-quote-sign.svg"
        alt=""
      />
      <div className="flex flex-col justify-center items-center mt-24 px-40">
        <h1 className="text-40 font-bold text-primary-blue-dark text-center">
          Отзывы
        </h1>
        <div
          className="bg-white opacity-50 border border-gray-300 h-96 rounded-lg mt-10 z-10"
          style={{ width: 800 }}
        ></div>
        <div
          className="bg-white opacity-50 border border-gray-300 h-96 rounded-lg -mt-80 z-20"
          style={{ width: 1000 }}
        ></div>
        <div
          className="bg-white border border-gray-300 h-96 rounded-lg -mt-80 z-30 flex items-center justify-center"
          style={{ width: 1200 }}
        >
          <div>
            <div className="flex flex-row items-center justify-center gap-5 py-8 px-20">
              <div className="flex flex-col gap-3 mr-20" style={{width: 500}}>
                <img className="w-32" src={reviews[currentId].logoUrl} alt="" />
                <h3 className="text-28 underline underline-offset-8 font-bold text-primary-blue-dark">
                  {reviews[currentId].heading}
                </h3>
                <p className="text-16 opacity-70">
                  {reviews[currentId].spanText}
                </p>
              </div>
              <div className="w-0.5 h-72 bg-gray-200"></div>
              <div className="flex min-w-40 font-mono flex-row gap-3 px-20 text-primary-blue-light justify-between">
                <button
                  onClick={() => prevSlide()}
                  className="bg-transperent border-none shrink-0 grow-0"
                >
                  <img className="w-6" src="./img/arrow-left.svg" alt="" />
                </button>
                <p className="flex flex-row shrink-0 grow-0 text-28 gap-20 w-32 items-center justify-center text-center">
                  {reviews[currentId].id < 10
                    ? "0" + (currentId + 1).toString()
                    : currentId.toString()}{" "}
                  /{" "}
                  {reviews.length < 10
                    ? "0" + reviews.length.toString()
                    : reviews.length.toString()}
                </p>
                <button
                  onClick={() => nextSlide()}
                  className="bg-transperent border-none shrink-0 grow-0"
                >
                  <img className="w-6" src="./img/arrow-right.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
