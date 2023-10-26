import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const MainPageSlideShow = () => {
  return (
    <div>
      <div className="mx-auto max-w-[70rem]">
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
            <img src="./images/slide-1.png" alt="Slide 1" />
            <div className="text-overlay left-[-20px] md:left-0 text-left text-base md:text-[130%] font-light top-0">
              <p>Description for Slide 1</p>
              <div className="mt-5">
                <a href="">Дізнатися більше</a>
              </div>
            </div>
          </div>
          <div className="custom-slide">
            <img src="./images/slide-2.png" alt="Slide 2" />
            <div className="text-overlay left-[54%] text-left md:text-[130%] font-light top-0">
              <p>Description for Slide 2</p>
              <div className="mt-5">
                <a href="">Дізнатися більше</a>
              </div>
            </div>
          </div>
          <div className="custom-slide">
            <img src="./images/slide-3.png" alt="Slide 3" />
            <div className="text-overlay left-[-20px] md:left-0 text-left text-base md:text-[130%] font-light top-0">
              <p>Description for Slide 3</p>
              <div className="mt-5">
                <a href="">Дізнатися більше</a>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default MainPageSlideShow;
