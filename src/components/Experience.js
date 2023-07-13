// REACT
import React from "react";

// FROM ASSETS
import Img1 from "../assets/img/exp-img1.png";
import Img2 from "../assets/img/exp-img2.png";

const Experience = () => {
  return (
    <section className="mb-12 lg:mb-24">
      <div className="container mx-auto">
        <div className="flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row">
          <div className="flex items-center flex-1 space-x-6 lg:space-x-12">
            {/* IMAGES */}
            <div className="self-start">
              <img src={Img1} alt="" />
            </div>
            <div className="self-end">
              <img src={Img2} alt="" />
            </div>
          </div>
          {/* TEST */}
          <div className="flex flex-col items-start justify-center flex-1 mt-6 lg:mt-0">
            <h2 className="mb-6 text-3xl font-bold">
              New Experience In Playing Games
            </h2>
            <p className="mb-6 font-secondary">
              You can try playing the game with a new style and of course a more
              real feel, like you are the main character in your game and
              adventure in this new digital world.
            </p>
            <button className="btn">Get it now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
