import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services-main-page-section">
      <div>
        <h1 className="text-lg md:text-2xl text-secondary uppercase mb-4">
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
          <span className="uppercase">Психологічна підтримка:</span> підтримка
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
      <div>
        <p>
          Усім нам, час від часу, потрібна підтримка. На різних етапах життя.
        </p>
        <p className="italic">
          Ми прагнемо/потребуємо безумовного прийняття і беззастережного
          &laquo;все буде добре&raquo;, &laquo;ти молодчина&raquo;... Навіть
          якщо реально щось пішло не так.
        </p>{" "}
        <p className="italic">
          Обіймів, у яких можна відчути фізичну безпеку і затишок.
        </p>{" "}
        <p className="italic">Конкретних порад...</p>
        <p className="italic">
          Комусь потрібна підтримка — &laquo;чарівний копняк&raquo;, коли
          необхідно надихнути на особистий подвиг і початок нового етапу в
          житті.
        </p>{" "}
        <p className="italic">
          А іноді досить й того, щоб нас вислухали... Ми хочемо переконатися, що
          не зійшли з розуму і все, що відбувається реально, але не є
          катастрофою і усе можна вирішити.
        </p>{" "}
        <p>
          Мені самій дуже знайомі усі ці стани. І сьогодні я можу впевнено
          сказати, що вихід є. Його потрібно лише знайти.
        </p>{" "}
        <p>
          Запрошую Вас до співпраці. Разом нам вдасться подолати усі перешкоди
          на життєвому шляху.
        </p>{" "}
        <p>З повагою, Альона Єрмакова.</p>
      </div>
    </div>
  );
};

export default Services;
