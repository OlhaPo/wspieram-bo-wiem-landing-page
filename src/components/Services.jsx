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
          Я засновник проекту{" "}
          <span className="italic">
            &laquo;Wspieram, bo wiem...&raquo; &laquo;Підтримую, тому що
            знаю...&raquo;
          </span>
          , акушерка, доула, післяпологова доула.
        </p>
        <div className="mt-8">
          <Link to="/about" className="link-button">
            Дізнатися більше
          </Link>
        </div>
        <div className="mt-6">
          <p>
            Усім нам, час від часу, потрібна підтримка. На різних етапах життя.
          </p>
          <div className="my-6">
            <p>
              Ми прагнемо/потребуємо безумовного прийняття і беззастережного
              &laquo;все буде добре&raquo;, &laquo;ти молодчина&raquo;... Навіть
              якщо реально щось пішло не так.
            </p>{" "}
            <p>Обіймів, у яких можна відчути фізичну безпеку і затишок.</p>{" "}
            <p>Конкретних порад...</p>
            <p>
              Комусь потрібна підтримка — &laquo;чарівний копняк&raquo;, коли
              необхідно надихнути на особистий подвиг і початок нового етапу в
              житті.
            </p>{" "}
            <p>
              А іноді досить й того, щоб нас вислухали... Ми хочемо
              переконатися, що не зійшли з розуму і все, що відбувається
              реально, але не є катастрофою і усе можна вирішити.
            </p>{" "}
          </div>

          <p>
            Мені самій дуже знайомі усі ці стани. І сьогодні я можу впевнено
            сказати, що вихід є. Його потрібно лише знайти.
          </p>
        </div>{" "}
      </div>
      <div className="mt-10">
        <h2 className="text-lg md:text-2xl text-primary uppercase">
          Отже, чим я зможу Вам допомогти:
        </h2>
        <div className="md:grid md:grid-cols-2 gap-6">
          <div className="mb-12 md:mb-0">
            <h3 className="uppercase text-lg md:text-2xl text-primary">
              Doula
            </h3>
            <ul className="custom-list">
              <li>підтримка під час вагітності;</li>
              <li>підготовка до пологів;</li>
              <li>навчання технік розслаблення та розродження;</li>
              <li>післяпологовий супровід: ГВ та догляд за малюком;</li>
            </ul>
            <div className="my-4">
              <Link to="/doula" className="link-button">
                Дізнатися більше
              </Link>
            </div>
          </div>
          <div className="mb-12 md:mb-0">
            <h3 className="uppercase text-lg md:text-2xl text-primary">
              Doula postpartum:
            </h3>
            <ul className="custom-list">
              <li>налагодження грудного вигодовування;</li>
              <li>допомога у Вашому емоційному та фізичному відновленні;</li>
              <li>супровід по догляду за новонародженим;</li>
              <li>догляд за дитиною, поки матуся (батьки) відпочиває;</li>
            </ul>

            <div className="my-4">
              <Link to="/postpartum-doula" className="link-button">
                Дізнатися більше
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="uppercase text-lg md:text-2xl text-primary">
            Підтримка гармонії в сімейних стосунках
          </h3>
          <p>
            Якщо Ваша сім&lsquo;я переживає складний період: часті і
            &laquo;яскраві&raquo; конфлікти, розподіл сімейних ролей та
            обов&lsquo;язків у зв&lsquo;язку з появою дітей, зрада, розлучення,
            тощо — пропоную Вам свої підтримку та супровід на шляху до пошуку
            найоптимальніших для Вас вирішень цих складних життєвих ситуацій.
          </p>
          <div className="my-4">
            <Link to="/support" className="link-button">
              Дізнатися більше
            </Link>
          </div>
        </div>
        <p className="mt-10">Запрошую Вас до співпраці. </p>
        <p>З повагою, Альона Єрмакова.</p>
      </div>
    </div>
  );
};

export default Services;
