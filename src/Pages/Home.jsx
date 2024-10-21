import React from "react";
import AymanImage from "./Ayman.png"; // Import the image file

function Home() {
  return (
    <div className="w-10/12 h-full  m-auto fade-in pt-14">
      <div className="flex justify-end items-center  max-lg:flex-col-reverse  max-lg:space-y-6">
        <div className=" max-lg:w-full max-lg:text-center ">
          <div>
            <h1 className="text-zinc-400 text-xl pb-4 shadow-nav text-shadow-xl">
              Front-End Developer
            </h1>
          </div>

          <div>
            <h1 className="text-white text-5xl">
              Hi, I Am <span className="text-T">Ayman Osama</span>{" "}
              <span className="block text-white">Based In Egypt.</span>
            </h1>
          </div>
        </div>

        {/* Image container */}
        <div className="w-1/2 max-lg:w-full">
          <img
            src={AymanImage}
            alt="Ayman"
            className=" rounded-full object-cover  "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
