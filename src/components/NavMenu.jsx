import React, { useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavMenu = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const btnRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (btnRef.current && !btnRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  useEffect(() => {
    if (isOpenNav) {
      document.body.classList.add("hide-scroll");
    } else {
      document.body.classList.remove("hide-scroll");
    }
  }, [isOpenNav]);

  const handleNav = () => {
    setIsOpenNav(!isOpenNav);
  };

  const handleDropdownMenu = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navigateOnMobile = (url, e) => {
    e.preventDefault();
    setIsOpenNav(false);
    navigate(url);
  };

  return (
    <div className="nav">
      {isOpenNav ? (
        <div className="w-full bg-[#eceae8] min-h-screen z-[120] fixed flex flex-col justify-center items-start px-20 gap-6 ">
          <AiOutlineClose
            size={28}
            className="absolute right-6 top-6"
            onClick={() => handleNav()}
          />
          <Link
            onClick={(e) => navigateOnMobile("/about", e)}
            className="hover:text-primary"
          >
            Про мене
          </Link>
          <span className="inline-flex items-baseline gap-1">Послуги:</span>
          <Link
            onClick={(e) => navigateOnMobile("/doula", e)}
            className="hover:text-primary"
          >
            Doula
          </Link>{" "}
          <Link
            onClick={(e) => navigateOnMobile("/postpartum-doula", e)}
            className="hover:text-primary"
          >
            Doula postpartum
          </Link>{" "}
          <Link
            onClick={(e) => navigateOnMobile("/support", e)}
            className="hover:text-primary"
          >
            Підтримка гармонії в сімейних стосунках
          </Link>
          <HashLink
            smooth
            to="/#contacts"
            onClick={() => setIsOpenNav(false)}
            className="hover:text-primary"
          >
            Контакти
          </HashLink>
          <a href="tel:+48570327545" className="link-button">
            Запис на консультацію
          </a>
        </div>
      ) : null}
      <div className="max-w-[65rem] mx-auto flex flex-row justify-around xl:justify-between items-center py-4">
        <div>
          <Link to="/" className="inline-flex lg:gap-4 items-center">
            <img
              src="./logo.png"
              alt="Wspieram bo wiem logo"
              className="w-16 h-16 lg:h-[110px] lg:w-[110px]"
            />
            <div className="bg-[url('/images/bg-logo.png')] bg-cover flex flex-col pt-3 pb-2 px-5 whitespace-nowrap">
              <span className="header-great-vibes text-2xl md:text-3xl lg:text-4xl">
                Wspieram, bo wiem...
              </span>
              <span className="text-base lg:text-xl italic">
                Підтримую, тому що знаю...
              </span>
            </div>
          </Link>
        </div>
        <div>
          <BiMenu
            size={30}
            onClick={() => handleNav()}
            className="md:hidden z-[140] text-primary"
          />
        </div>
        {/* Desktop menu */}
        <div className="hidden md:inline-flex md:gap-4 lg:gap-8 items-center">
          <Link to="/about" className="hover:text-primary">
            Про мене
          </Link>
          <button ref={btnRef} onClick={handleDropdownMenu}>
            <div className="services">
              <span className="inline-flex items-baseline gap-1 hover:text-primary">
                Послуги <AiOutlineDown size={13} />
              </span>
              {isDropdownOpen ? (
                <ul className="dropdown-content">
                  <li>
                    <Link to="/doula" className="hover:text-primary">
                      Doula
                    </Link>
                  </li>
                  <li>
                    <Link to="/postpartum-doula" className="hover:text-primary">
                      Doula postpartum
                    </Link>
                  </li>
                  <li>
                    <Link to="/support" className="hover:text-primary">
                      Підтримка гармонії в сімейних стосунках
                    </Link>
                  </li>
                </ul>
              ) : null}
            </div>
          </button>
          <a href="#contacts" className="hover:text-primary md:hidden lg:block">
            Контакти
          </a>
          <a href="#contacts" className="link-button">
            Запис на консультацію
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
