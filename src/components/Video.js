// REACT
import React, { useState } from "react";

// MODAL VIDEO
import ModalVideo from "react-modal-video";
import "../modalVideo.scss";

// ICONS
import { BsPlayCircleFill } from "react-icons/bs";

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#534686]/30 py-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center lg:flex-row lg:justify-between">
          <h3
            className="mb-8 text-2xl font-semibold lg:mb-0"
            data-aos="fade-right"
            data-aos-offset="350"
          >
            Awesome experience with vertual reality world
          </h3>
          {/* MODAL VIDEO */}
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="NOk_M1Ib5F0"
            onClose={() => setIsOpen(false)}
          />
          {/* VIDEO */}
          <div
            className="bg-videoBg bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center"
            data-aos="fade-left"
            data-aos-offset="350"
          >
            <div onClick={() => setIsOpen(!isOpen)}>
              <BsPlayCircleFill className="text-4xl transition cursor-pointer text-white/80 hover:text-white hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
