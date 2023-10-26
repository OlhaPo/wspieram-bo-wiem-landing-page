import React, { useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";

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
        <div className="w-full bg-[#eceae8] min-h-screen z-[120] flex flex-col justify-center items-center gap-6">
          <AiOutlineClose
            size={28}
            className="relative -right-[150px] -top-[250px]"
            onClick={handleNav}
          />
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
                    <a href="/service1" className="hover:text-primary">
                      Doula
                    </a>
                  </li>
                  <li>
                    <a href="/service2" className="hover:text-primary">
                      Postpartum doula
                    </a>
                  </li>
                  <li>
                    <a href="/service3" className="hover:text-primary">
                      Психологічна підтримка/консультування
                    </a>
                  </li>
                </ul>
              ) : null}
            </div>
          </button>
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
          <span className="text-lg md:text-xl lg:text-3xl italic text-primary">
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
                    <a href="/service1" className="hover:text-primary">
                      Doula
                    </a>
                  </li>
                  <li>
                    <a href="/service2" className="hover:text-primary">
                      Postpartum doula
                    </a>
                  </li>
                  <li>
                    <a href="/service3" className="hover:text-primary">
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
