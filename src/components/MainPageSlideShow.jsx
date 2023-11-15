import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const MainPageSlideShow = () => {
  return (
    <div className="md:pt-10">
      <div className="mx-auto max-w-[65rem]">
        <Carousel
          showStatus={false}
          renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={`${
                  hasPrev ? "absolute" : "hidden"
                } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-50 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <AiOutlineLeft className="w-6 h-6 lg:w-12 lg:h-12 text-white" />
              </div>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`${
                  hasNext ? "absolute" : "hidden"
                } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-50 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <AiOutlineRight className="w-6 h-6 lg:w-12 lg:h-12 text-white" />
              </div>
            );
          }}
        >
          <div className="custom-slide">
            <img src="./images/slide-4-new.jpg" alt="Про Альону Єрмакову" />
            <div className="text-overlay right-[55%] leading-2 md:leading-8 text-left text-xs md:text-[150%] font-light top-[10%] md:top-[20%] lg:top-[35%]">
              <p className="text-black">
                Альона Єрмакова - психолог, акушерка, доула, післяпологова
                доула.
              </p>
              <div className="mt-5">
                <Link
                  to="/about"
                  className="text-black border-b-2 border-black hover:text-white hover:border-b-0"
                >
                  Читати далі
                </Link>
              </div>
            </div>
          </div>
          <div className="custom-slide">
            <img src="./images/slide-2.jpg" alt="Доула" />
            <div className="text-overlay right-[48%] md:right-[55%] left-0 md:left-[5%] leading-2 md:leading-8 text-left text-xs md:text-[150%] font-light top-[10%] md:top-[20%] lg:top-[30%]">
              <p className="uppercase mb-2">Doula:</p>
              <p>
                cупровід та інформаційно/фізично/психологічна підтримка під час
                вагітності та пологів
              </p>
              <div className="mt-5">
                <Link
                  to="/doula"
                  className="text-black border-b-2 border-black hover:text-white hover:border-b-0"
                >
                  Читати далі
                </Link>
              </div>
            </div>
          </div>
          <div className="custom-slide">
            <img src="./images/slide-3.jpg" alt="Postpartum doula" />
            <div className="text-overlay left-[50%] md:left-[55%] text-left text-xs md:text-[150%] leading-2 md:leading-8 font-light top-[5%] md:top-[20%] lg:top-[35%]">
              <p className="uppercase mb-2">Doula postpartum:</p>
              <p>
                всебічна підтримка мами (батьків) на шляху становлення тісного
                контакту з новонародженим малям
              </p>
              <div className="mt-5">
                <Link
                  to="/postpartum-doula"
                  className="text-black border-b-2 border-black hover:text-white hover:border-b-0"
                >
                  Читати далі
                </Link>
              </div>
            </div>
          </div>
          <div className="custom-slide">
            <img src="./images/slide-4.jpg" alt="Підтримка" />
            <div className="text-overlay left-[-7%] md:left-0 lg:left-[5%] text-left text-xs md:text-[150%] font-light top-[-5%] md:top-0">
              <p className="uppercase mb-2 md:mb-6">Підтримка:</p>
              <p>підтримка гармонії в сімейних стосунках</p>
              <div className="mt-5 md:mt-10 lg:mt-14 pl-[40%] md:pl-[15%] lg:pl-[40%]">
                <Link
                  to="/support"
                  className="text-black border-b-2 border-black hover:text-white hover:border-b-0"
                >
                  Читати далі
                </Link>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default MainPageSlideShow;
