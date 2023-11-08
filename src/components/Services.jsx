import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services-main-page-section">
      <div>
        <h1 className="text-lg md:text-2xl text-primary uppercase mb-4">
          Привіт! Мене звати Альона&nbsp;Єрмакова
        </h1>{" "}
        <p>
          Я засновник проекту "Wspieram, bo wiem..."/"Підтримую, оскільки
          знаю...", психолог, акушерка, доула, післяпологова доула.
        </p>
        <Link
          to="/about"
          className="text-primary border-b-2 border-primary hover:text-black hover:border-b-0"
        >
          Дізнатися більше
        </Link>
      </div>
      <div>
        <p className="mb-4">Отже, чим я зможу Вам допомогти:</p>
        <h2 className=" text-primary">
          <span className="uppercase">Doula:</span> cупровід та
          інформаційно/фізично/психологічна підтримка під час вагітності та
          пологів
        </h2>
        <p>
          <ul className="custom-list">
            <li>підтримка під час вагітності;</li>
            <li>
              підготовка до пологів: навчання технік розслаблення та
              розродження;
            </li>
            <li>післяпологовий супровід: ГВ та догляд за малюком;</li>
            <li>
              емоційна та психологічна підтримка на всіх етапах вагітності,
              пологів, початок післяпологового періоду.
            </li>
          </ul>
        </p>
        <Link
          to="/doula"
          className="text-primary border-b-2 border-primary hover:text-black hover:border-b-0"
        >
          Дізнатися більше
        </Link>
      </div>
      <div>
        <h2 className="text-lg md:text-2xl text-primary">
          <span className="uppercase">Doula postpartum:</span> всебічна
          підтримка мами (батьків) на шляху становлення тісного контакту з
          новонародженим малям
        </h2>
        <p>
          <ul className="custom-list">
            <li>підтримка та налагодження грудного вигодовування;</li>
            <li>допомога у Вашому емоційному та фізичному відновленні;</li>
            <li>супровід по догляду за новонародженим;</li>
            <li>
              допомога в навчанні правильного догляду за новонародженим
              (купання, одягання, годування, заспокоєння...);
            </li>
            <li>
              догляд за дитиною, поки матуся (батьки) відпочиває/приділяє час
              собі;
            </li>
          </ul>
        </p>
        <Link
          to="/postpartum-doula"
          className="text-primary border-b-2 border-primary hover:text-black hover:border-b-0"
        >
          Дізнатися більше
        </Link>
      </div>
      <div>
        <h2 className="text-lg md:text-2xl text-primary">
          <span className="uppercase">Консультування:</span> підтримка
          психологічної гармонії в сімейних стосунках
        </h2>
        <p>
          Якщо Ваша сім'я переживає складний період: часті і "яскраві"
          конфлікти, поява дітей, розподілення сімейних ролей та обов'язків,
          зради, розлучення, тощо — пропоную Вам свої підтримку та супровід на
          шляху до пошуку найоптимальніших для Вас вирішень цих складних
          життєвих ситуацій.
        </p>
        <Link
          to="/therapy"
          className="text-primary border-b-2 border-primary hover:text-black hover:border-b-0"
        >
          Дізнатися більше
        </Link>
      </div>
      <div className="text-red-900">
        TODO: Фінальний заклик, речення підтримки
      </div>
    </div>
  );
};

export default Services;
