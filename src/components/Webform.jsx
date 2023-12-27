import React, { useState } from "react";
import Button from "./UI/Button";

const Webform = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <div className="min-h-full bg-primary-blue-dark relative">
      <img
        className="absolute top-0 left-1/3 z-10"
        src="./img/D-flying.svg"
        alt=""
      />
      <div className="flex flex-row py-24 px-40 justify-between z-30 relative">
        <div className="flex flex-col w-2/5 justify-between gap-5">
          <div>
            <h1 className="text-40 font-bold text-white">
              Оставить заявку на поддержку сайта
            </h1>
            <p className="text-white">
              Срочно нужна поддержка сайта? Ваша команда не успевает справиться
              самостоятельно или предыдущий подрядчик не справился с работой?
              Тогда вам точно к нам! Просто оставьте заявку и наш менеджер с
              вами свяжется!
            </p>
          </div>
          <div>
            <div className="flex flex-row gap-4">
              <img className="opacity-70" src="./img/phone.svg" alt="" />
              <a className="text-white font-bold text-24" href="/">
                8 800 222-26-73
              </a>
            </div>
            <div className="flex flex-row gap-4">
              <img className="opacity-60" src="./img/mail.svg" alt="" />
              <a
                className="text-white underline underline-offset-8 font-bold text-24"
                href="/"
              >
                info@drupal-coder.ru
              </a>
            </div>
          </div>
        </div>
        <form className="flex flex-col gap-5 w-2/5">
          <input
            className="p-4 text-white rounded-lg w-full bg-transparent outline-none border border-gray-200"
            placeholder="Ваше имя"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="p-4 text-white rounded-lg w-full bg-transparent outline-none border border-gray-200"
            placeholder="Телефон"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="p-4 text-white rounded-lg w-full bg-transparent outline-none border border-gray-200"
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="p-4 text-white rounded-lg w-full bg-transparent outline-none border border-gray-200"
            placeholder="Ваш комментарий"
            rows={4}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="flex flex-row gap-3 items-center justify-center">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="h-7 w-7 rounded appearance-none border-2 border-gray
              -200 checked:content-agree outline-none cursor-pointer "
            />
            <label className="text-white">
              Отправляя заявку, я даю согласие на обработку своих персональных
              данных
            </label>
          </div>
          <div className="text-white flex flex-row">
            <Button filled>Оставить заявку!</Button>
          </div>
        </form>
      </div>
      <img
        className="absolute bottom-0 right-0 z-10"
        src="./img/D (1).png"
        alt=""
      />
      <hr className="opacity-30" />
      <p className="text-white text-16 py-10 px-40 opacity-70">
        Проект ООО «Инитлаб», Краснодар, Россия. Drupal является <br />
        зарегистрированной торговой маркой Dries Buytaert.
      </p>
    </div>
  );
};

export default Webform;
