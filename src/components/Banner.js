/* eslint-disable jsx-a11y/anchor-is-valid */
// REACT
import React from "react";

// COMPONENTS
import Users from "../components/Users";

// FROM ASSETS
import Img from "../assets/img/banner-img.png";

const Banner = () => {
  return (
    <section className="min-h-[600px] pt-24 pb-12 text-center lg:pt-48 lg:pb-0 lg:text-lef relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:top-[40%] before:-right-[200px] before:hidden before:lg:flex before:rotate-90">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* TEXT */}
          <div>
            <h1
              className="mb-8 text-3xl font-bold lg:text-5xl lg:leading-snug"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Let's Explore <br /> Three-Dimensional Visually.
            </h1>
            <p
              className="font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              With virtual technology you can see the digital world feel more
              real and you can play the game with a new style.
            </p>
            {/* BTNS */}
            <div
              className="flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              <button className="btn">Get it now</button>
              <a
                className="transition ease-out border-b-2 border-transparent hover:border-white"
                href="#"
              >
                Explore Device
              </a>
            </div>
            {/* USERS ARE ONLINE IMAGES */}
            <Users />
          </div>
          {/* IMAGE */}
          <div data-aos="fade-up" data-aos-delay="800">
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
