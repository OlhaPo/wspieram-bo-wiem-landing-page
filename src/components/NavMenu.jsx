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
          className="w-full bg-[#6a6867] min-h-screen z-[120] flex flex-col justify-center items-center gap-6"
        >
          <AiOutlineClose
            size={28}
            className="relative -right-[180px] -top-[220px]"
          />
          <a href="/about">Про мене</a>
          <a href="/services">Послуги</a>
          <a href="#contacts">Контакти</a>
        </div>
      ) : null}
      <div className="flex flex-row justify-between items-center px-10 lg:px-16 py-4">
        <div className="inline-flex items-center gap-12 md:gap-8">
          <img
            src="./logo.png"
            alt="Wspieram bo wiem logo"
            className="h-16 w-16"
          />
          <span>Wspieram, bo wiem...</span>
        </div>
        <div>
          <BiMenu size={30} onClick={handleNav} className="md:hidden z-[140]" />
        </div>
        <div className="hidden md:inline-flex gap-10 items-center">
          <a href="/about">Про мене</a>
          <a href="/services">Послуги</a>
          <a href="#contacts">Контакти</a>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
