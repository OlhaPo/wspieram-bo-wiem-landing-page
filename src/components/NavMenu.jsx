import React, { useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavMenu = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (btnRef.current && !btnRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  const handleNav = () => {
    setIsOpenNav(!isOpenNav);
  };

  const handleDropdownMenu = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="nav">
      {isOpenNav ? (
        <div className="w-full bg-[#eceae8] min-h-screen z-[120] flex flex-col justify-center items-start px-20 gap-6">
          <AiOutlineClose
            size={28}
            className="absolute right-6 top-6"
            onClick={handleNav}
          />
          <Link to="/about" className="hover:text-primary">
            Про мене
          </Link>
          <span className="inline-flex items-baseline gap-1 hover:text-primary">
            Послуги:
          </span>
          <a href="/doula" className="hover:text-primary">
            Doula
          </a>{" "}
          <a href="/postpartum-doula" className="hover:text-primary">
            Postpartum doula
          </a>{" "}
          <a href="/therapy" className="hover:text-primary">
            Психологічна підтримка/консультування
          </a>
          <a href="#contacts">Контакти</a>
          <a href="tel:+48570327545" className="link-button">
            Запис на консультацію
          </a>
        </div>
      ) : null}
      <div className="max-w-[70rem] mx-auto flex flex-row justify-around xl:justify-between items-center py-4">
        <div>
          <a href="/" className="inline-flex gap-3 lg:gap-4 items-center">
            <img
              src="./logo-4.png"
              alt="Wspieram bo wiem logo"
              className="w-10 h-10 lg:h-16 lg:w-16"
            />{" "}
            <span className="text-lg md:text-xl lg:text-2xl italic text-primary">
              Wspieram, bo wiem...
            </span>
          </a>
        </div>

        <div>
          <BiMenu
            size={30}
            onClick={handleNav}
            className="md:hidden z-[140] text-primary"
          />
        </div>
        <div className="hidden md:inline-flex md:gap-4 lg:gap-8 items-center">
          <a href="/about" className="hover:text-primary">
            Про мене
          </a>
          <button ref={btnRef} onClick={handleDropdownMenu}>
            <div className="services">
              <span className="inline-flex items-baseline gap-1 hover:text-primary">
                Послуги <AiOutlineDown size={13} />
              </span>
              {isDropdownOpen ? (
                <ul className="dropdown-content">
                  <li>
                    <a href="/doula" className="hover:text-primary">
                      Doula
                    </a>
                  </li>
                  <li>
                    <a href="/postpartum-doula" className="hover:text-primary">
                      Postpartum doula
                    </a>
                  </li>
                  <li>
                    <a href="/therapy" className="hover:text-primary">
                      Психологічна підтримка/консультування
                    </a>
                  </li>
                </ul>
              ) : null}
            </div>
          </button>
          <a href="#contacts" className="hover:text-primary">
            Контакти
          </a>
          <a href="#" className="link-button">
            Запис на консультацію
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
