import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const NavMenu = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const handleNav = () => {
    setIsOpenNav(!isOpenNav);
  };

  return (
    <div className="nav">
      {isOpenNav ? (
        <div
          onClick={handleNav}
          className="w-full bg-[#eceae8] min-h-screen z-[120] flex flex-col justify-center items-center gap-6"
        >
          <AiOutlineClose
            size={28}
            className="relative -right-[150px] -top-[250px]"
          />
          <a href="/about">Про мене</a>
          <a href="/services">Послуги</a>
          <a href="#contacts">Контакти</a>
          <a href="#" className="link-button">
            Запис на консультацію
          </a>
        </div>
      ) : null}
      <div className="max-w-[70rem] mx-auto flex flex-row justify-around xl:justify-between items-center py-4">
        <div className="inline-flex gap-3 lg:gap-4 items-center">
          <img
            src="./logo.png"
            alt="Wspieram bo wiem logo"
            className="w-10 h-10 lg:h-16 lg:w-16"
          />{" "}
          <span className="text-lg lg:text-3xl italic text-primary">
            Wspieram, bo wiem...
          </span>
        </div>

        <div>
          <BiMenu
            size={30}
            onClick={handleNav}
            className="md:hidden z-[140] text-primary"
          />
        </div>
        <div className="hidden md:inline-flex md:gap-4 lg:gap-8 items-center hover:text-primary">
          <a href="/about">Про мене</a>
          <a href="/services">Послуги</a>
          <a href="#contacts">Контакти</a>
          <a href="#" className="link-button">
            Запис на консультацію
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
