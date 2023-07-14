/* eslint-disable jsx-a11y/anchor-is-valid */
// REACT
import React from "react";

// FROM ASSETS
import Logo from "../assets/img/logo.svg";

// COMPONENTS
import Nav from "./Nav";

// ICONS
import { HiMenu } from "react-icons/hi";

const Header = ({ setNavMobile }) => {
  return (
    <header
      className="py-6"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-delay="900"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <a href="#">
            <img className="h-[30px]" src={Logo} alt="Logo" />
          </a>
          {/* NAV */}
          <Nav />
          {/* NAV MOBILE BTN */}
          <HiMenu
            onClick={() => setNavMobile(true)}
            className="text-3xl text-white cursor-pointer lg:hidden"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
