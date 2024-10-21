import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function SingleProject(props) {
  const [touchCard, setTouchCard] = useState(false);

  return (
    <div className="flex justify-center pt-20">
      <div
        className="bg-zinc-950  shadow-inner shadow-T  hover:scale-105 w-96 rounded-2xl transform transition-transform duration-500 relative overflow-hidden"
        onMouseEnter={() => setTouchCard(true)}
        onMouseLeave={() => setTouchCard(false)}
      >
        {/* Card Content */}
        <div className="flex flex-col items-center pt-5 pb-10 justify-start h-full">
          {/* Decorative Project Name */}
          <div className="w-auto text-center">
            <h1 className="text-T text-3xl font-extrabold uppercase tracking-wide px-6 py-3 rounded-full border-4 border-T bg-gradient-to-r from-T via-Card2 to-Card text-transparent bg-clip-text drop-shadow-lg">
              {props.name}
            </h1>
          </div>

          {/* Project Description */}
          <p className="text-white font-semibold text-center px-4 py-3 mt-5 transition-all duration-500">
            <span className="text-T font-bold">Description: </span>
            {props.Description.split(". ").map((sentence, index) => (
              <span key={index}>
                {sentence}.
                <br />
              </span>
            ))}
          </p>
          <p className="text-white font-semibold pt-2 text-center">
            <span className="text-T font-bold">Used: </span>
            {props.Used}
          </p>

          {/* GitHub Link (with Delay and Transition) */}
          {touchCard && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity delay-300 duration-500 bg-black/60 backdrop-blur-sm rounded-2xl">
              <a
                href={props.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition duration-500 text-center text-xl text-T font-bold"
              >
                <div className="flex flex-col items-center space-y-2">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="3x"
                    className="text-T"
                  />
                  <p>GitHub</p>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
