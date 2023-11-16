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
      <div className="inline-flex items-center italic gap-2 text-2xl">
        <img
          src="./logo.png"
          alt="Wspieram bo wiem logo"
          className="w-16 h-16"
        />
        <div className="bg-[url('/images/bg-logo.png')] bg-cover flex flex-col pt-3 pb-2 px-5 whitespace-nowrap">
          <span className="header-great-vibes text-3xl md:text-4xl">
            Wspieram, bo wiem...
          </span>
          <span className="text-lg italic">Підтримую, тому що знаю...</span>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row gap-2 md:gap-5 lg:gap-8">
        <div className="flex md:inline-flex items-center gap-1">
          <GoLocation className="text-primary" size={20} />
          Бельсько-Б&lsquo;яла
        </div>
        <div className="flex md:inline-flex items-center gap-1">
          <BiPhoneCall className="text-primary" size={20} />
          <a href="tel:+48570327545">+48570327545</a>{" "}
        </div>
        <div className="flex md:inline-flex items-center gap-1">
          <BiPhoneCall className="text-primary" size={20} />
          <a href="tel:+380965472102">+380965472102</a>{" "}
        </div>
        <div className="flex md:inline-flex items-center gap-1">
          <FiMail className="text-primary" size={20} />
          <a
            href="mailto:alyona2017ck@gmail.com"
            target="_blank"
            className="link-hover"
          >
            <span>alyona2017ck@gmail.com</span>
          </a>
        </div>
      </div>
      <div className="flex md:inline-flex items-center gap-5 text-primary">
        <a
          href="https://t.me/+48570327545"
          target="_blank"
          className="link-hover"
        >
          <PiTelegramLogo size={25} />
        </a>
        <a
          href="https://www.messenger.com/t/100026016184646"
          target="_blank"
          className="link-hover"
        >
          <LiaFacebookMessenger size={30} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100026016184646"
          target="_blank"
          className="link-hover"
        >
          <BiLogoFacebook size={26} />
        </a>
        <a
          href="https://www.instagram.com/alona_yermakova/?utm_source=qr&igshid=OGU0MmVlOWVjOQ%3D%3D"
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
