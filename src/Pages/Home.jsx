import React from "react";
import AymanImage from "./Ayman.png"; // Import the image file

function Home() {
  return (
    <div className="flex flex-row  relative items-center fade-in">
      <div className=" mb-16  ml-96 justify-center">
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
      <div className=" flex flex-1 ">
        <img src={AymanImage} alt="Ayman" className=" rounded-full object-cover  " />
      </div>
    </div>
  );
}

export default Home;
