import React from "react";

const Support = () => {
  return (
    <div className="mt-24">
      <div className="px-40 w-full flex flex-col items-center">
        <h1 className="text-40 font-bold text-primary-blue-dark text-center">
          Поддержка <br />
          от Drupal-coder
        </h1>
        <div className="grid grid-rows-2 grid-cols-4 gap-3 mt-24">
          <div className="relative h-80 drop-shadow-lg bg-white p-4">
            <span className="text-12">01.</span>
            <h3 className="text-20 text-primary-blue-dark font-bold">
              Постановка задачи по Email
            </h3>
            <p>
              Удобная и привычная модель постановки задач, при которой задачи
              фиксируются и никогда не теряются.
            </p>
            <img
              className="absolute bottom-0 right-0"
              src="./img/support1.svg"
              alt=""
            />
          </div>
          <div className="relative h-80 drop-shadow-lg bg-white p-4">
            <span className="text-12">02.</span>
            <h3 className="text-20 text-primary-blue-dark font-bold">
              Система Helpdesk – отчетность, прозрачность
            </h3>
            <p>
              Возможность посмотреть все заявки в работе и отработанные часы в
              личном кабинете через браузер.
            </p>
            <img
              className="absolute bottom-0 right-0"
              src="./img/support2.svg"
              alt=""
            />
          </div>
          <div className="relative h-80 drop-shadow-lg bg-white p-4">
            <span className="text-12">03.</span>
            <h3 className="text-20 text-primary-blue-dark font-bold">
              Расширенная техническая поддержка
            </h3>
            <p>
              Возможность организации расширенной техподдержки с 6:00 до 22:00
              без выходных.
            </p>
            <img
              className="absolute bottom-0 right-0"
              src="./img/support3.svg"
              alt=""
            />
          </div>
          <div className="relative h-80 drop-shadow-lg bg-white p-4">
            <span className="text-12">04.</span>
            <h3 className="text-20 text-primary-blue-dark font-bold">
              Персональный менеджер проекта
            </h3>
            <p>
              Ваш менеджер проекта всегда в курсе текущего состояния проекта и в
              любой момент готов ответить на любые вопросы.
            </p>
            <img
              className="absolute bottom-0 right-0"
              src="./img/support4.svg"
              alt=""
            />
          </div>
          <div className="relative h-80 drop-shadow-lg bg-white p-4">
            <span className="text-12">05.</span>
            <h3 className="text-20 text-primary-blue-dark font-bold">
              Удобные способы оплаты
            </h3>
            <p>
              Безналичный расчет по договору или электронные деньги: WebMoney,
              Яндекс.Деньги, Paypal.
            </p>
            <img
              className="absolute bottom-0 right-0"
              src="./img/support5.svg"
              alt=""
            />
          </div>
          <div className="relative h-80 drop-shadow-lg bg-white p-4">
            <span className="text-12">06.</span>
            <h3 className="text-20 text-primary-blue-dark font-bold">
              Работаем с SLA и NDA
            </h3>
            <p>
              Работа в рамках соглашений о конфиденциальности и об уровне
              качетсва работ.
            </p>
            <img
              className="absolute bottom-0 right-0"
              src="./img/support6.svg"
              alt=""
            />
          </div>
          <div className="relative h-80 drop-shadow-lg bg-white p-4">
            <span className="text-12">07.</span>
            <h3 className="text-20 text-primary-blue-dark font-bold">
              Штатные специалисты
            </h3>
            <p>Надежные штатные специалисты, никаких фрилансеров.</p>
            <img
              className="absolute bottom-0 right-0"
              src="./img/support7.svg"
              alt=""
            />
          </div>
          <div className="relative h-80 drop-shadow-lg bg-white p-4">
            <span className="text-12">08.</span>
            <h3 className="text-20 text-primary-blue-dark font-bold">
              Удобные каналы связи
            </h3>
            <p>Консультации по телефону, скайпу, в месенджерах.</p>
            <img
              className="absolute bottom-0 right-0"
              src="./img/support8.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className="bg-primary-blue-dark w-full -mt-60 relative -z-20"
        style={{ height: 800 }}
      >
        <img
          src="./img/drupliconBg.png"
          className="absolute top-0 left-0 object-cover w-full h-full"
          alt="background"
          draggable={false.toString()}
        />
        <div className="absolute -bottom-28 flex flex-row justify-between items-center w-full">
          <img className="z-40" src="./img/laptop.png" alt="" />
          <div className="flex flex-col mb-56 pr-40">
            <h1 className="text-40 font-bold text-white">
              Экспертиза в Drupal, <br /> опыт 14 лет!
            </h1>
            <div className="flex flex-row gap-16 mt-16">
            <div className="flex flex-row items-center">
              <div className="h-20 w-2 bg-primary-red-light" />
              <div className="ml-3 flex-col">
                <p className="text-white opacity-70">
                  Только системный подход – <br /> контроль версий, резервирование <br /> и
                  тестирование!
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="h-20 w-2 bg-primary-red-light" />
              <div className="ml-3 flex-col">
                <p className="text-white opacity-70">
                Только Drupal сайты, <br />
не берем на поддержку сайты на других CMS!
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
