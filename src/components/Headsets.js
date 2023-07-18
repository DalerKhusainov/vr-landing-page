// REACT
import React from "react";

// FROM ASSETS
import Headset1 from "../assets/img/headset-1.png";
import Headset2 from "../assets/img/headset-2.png";
import Headset3 from "../assets/img/headset-3.png";
import Headset4 from "../assets/img/headset-4.png";

const Headsets = () => {
  return (
    <section className="py-12 lg:py-24 relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:top-[50%] before:left-[-200px] before:hidden before:lg:flex before:-rotate-90 after:w-[600px] after:h-[200px] after:bg-circle after:bg-no-repeat after:absolute after:top-[10%] after:right-[-200px] after:hidden after:lg:flex after:rotate-90">
      <div className="container mx-auto">
        {/* TITLE */}
        <h2
          className="mb-6 text-3xl font-bold"
          data-aos="fade-down"
          data-aos-offset="300"
        >
          Mixed Reality Headsets
        </h2>
        {/* GRID */}
        <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-9">
          {/* ITEM 1 */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1000"
          >
            <img src={Headset1} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="mb-2 text-xl font-semibold">Metaverse</h4>
              <p>
                A Network of 3D virtual worlds focused on social connection.
              </p>
            </div>
          </div>
          {/* ITEM 2 */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1300"
          >
            <img src={Headset2} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="mb-2 text-xl font-semibold">AIoT</h4>
              <p>
                AI and IoT are both emerging innovative technologies with a lot
                of potentials.
              </p>
            </div>
          </div>
          {/* ITEM 3 */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1600"
          >
            <img src={Headset3} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="mb-2 text-xl font-semibold">HoloLens</h4>
              <p>
                HoloLens display information, blend with the real world , or
                even simulate a virtual world.
              </p>
            </div>
          </div>
          {/* ITEM 4 */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1900"
          >
            <img src={Headset4} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="mb-2 text-xl font-semibold">TPCASTT</h4>
              <p>
                Method is great to start students reading and inferring with
                little assistance from the instructor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
