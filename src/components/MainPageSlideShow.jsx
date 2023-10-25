import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const MainPageSlideShow = () => {
  return (
    <div>
      <Carousel
        showStatus={false}
        dynamicHeight={true}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${
                hasPrev ? "absolute" : "hidden"
              } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <AiOutlineLeft className="w-9 h-9 text-white" />
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`${
                hasNext ? "absolute" : "hidden"
              } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <AiOutlineRight className="w-9 h-9 text-white" />
            </div>
          );
        }}
      >
        <div className="custom-slide">
          <img src="./images/doula-background.png" alt="Slide 1" />
          <div className="text-overlay">
            <h2>Slide 1</h2>
            <p>Description for Slide 1</p>
          </div>
        </div>
        <div className="custom-slide">
          <img src="./images/postpartum-doula-background.png" alt="Slide 2" />
          <div className="text-overlay">
            <h2>Slide 2</h2>
            <p>Description for Slide 2</p>
          </div>
        </div>
        <div className="custom-slide">
          <img src="./images/family-therapy-background.png" alt="Slide 3" />
          <div className="text-overlay">
            <h2>Slide 3</h2>
            <p>Description for Slide 3</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default MainPageSlideShow;
