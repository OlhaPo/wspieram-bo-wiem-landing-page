import React from "react";
import { BiPhoneCall, BiLogoFacebook } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { LiaFacebookMessenger } from "react-icons/lia";
import { PiTelegramLogo } from "react-icons/pi";
import { GoLocation } from "react-icons/go";

const Footer = () => {
  return (
    <div className="contacts" id="contacts">
      <div className="inline-flex items-center italic gap-2 text-xl text-primary">
        <img
          src="./logo.png"
          alt="Wspieram bo wiem logo"
          className="h-12 w-12"
        />
        <span>Wspieram, bo wiem...</span>
      </div>
      <div className="flex flex-col items-center md:flex-row gap-1 md:gap-6">
        <div className="flex md:inline-flex items-center gap-1">
          <GoLocation className="text-primary" size={20} />
          Бельсько-Б&lsquo;яла, Польща
        </div>
        <div className="flex md:inline-flex items-center gap-1">
          <BiPhoneCall className="text-primary" size={20} />
          <a href="tel:">+480000000</a>{" "}
        </div>
        <div className="flex md:inline-flex items-center gap-1">
          <FiMail className="text-primary" size={20} />
          <a href="mailto:" target="_blank" className="link-hover">
            <span>emailemail@gmail.com</span>
          </a>
        </div>
      </div>
      <div className="flex md:inline-flex items-center gap-5 text-primary">
        <a href="tel:" target="_blank" className="link-hover">
          <PiTelegramLogo size={25} />
        </a>
        <a href="tel:" target="_blank" className="link-hover">
          <LiaFacebookMessenger size={30} />
        </a>

        <a
          href="https://www.facebook.com/"
          target="_blank"
          className="link-hover"
        >
          <BiLogoFacebook size={26} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          className="link-hover"
        >
          <BsInstagram size={22} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
