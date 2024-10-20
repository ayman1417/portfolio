import React, { useState } from "react";
import Down from "./output-onlinegiftools.gif"; // Import the image file

function About() {
  const [touchSkills, SetTouchSkills] = useState(false);
  const [touchEdu, SetTouchEdu] = useState(false);

  return (
    <div className="flex justify-center  pt-32 items-center fade-in">
      <div className="w-1/2">
        <h1 className="text-6xl pb-4 text-T">About Me</h1>
        <p className="text-slate-50">
          Hello! I'm Ayman Osama, a passionate Front-End Developer based in
          Egypt. With a keen eye for detail and a love for creating intuitive
          and dynamic user interfaces, I specialize in building responsive web
          applications using React.
        </p>

        {/* Flex container to keep headings in the same line */}
        <div className="flex mb-6 justify-between max-lg:flex-col-reverse max-lg:text-center">
          <h1
            className="text-3xl py-3 text-T hover:cursor-pointer"
            onMouseEnter={() => SetTouchEdu(true)}
            onMouseLeave={() => SetTouchEdu(false)}
          >
            Education
          </h1>

          <h1
            className="text-3xl py-3  text-T hover:cursor-pointer"
            onMouseEnter={() => SetTouchSkills(true)}
            onMouseLeave={() => SetTouchSkills(false)}
          >
            Skills
          </h1>

          {/* Download button */}
          <div className="mt-3 text-center">
            <a
              href="https://drive.google.com/file/d/1g4wUJ03Vieu9XYqweaptyZfj_txQXmLW/view?usp=drive_link"
              download="Ayman Osama Sayed-CV.pdf"
              target="_blank"
              className="bg-T text-slate-50 py-2 px-4 rounded hover:bg-opacity-80 flex items-center justify-center "
            >
              Download Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                id="download"
                width="24" // Set width
                height="30" // Set height
                className="ml-2"
              >
                <switch>
                  <g>
                    <path
                      d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4
				c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z
				 M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z"
                    ></path>
                    <path
                      d="M5268.4 2410.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1 0-.6-.4-1-1-1H5268.4zM5272.7 2413.7h-4.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1C5273.7 2414.1 5273.3 2413.7 5272.7 2413.7zM5272.7 2417h-4.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1C5273.7 2417.5 5273.3 2417 5272.7 2417zM50 2.5C23.8 2.5 2.5 23.8 2.5 50c0 26.2 21.3 47.5 47.5 47.5S97.5 76.2 97.5 50C97.5 23.8 76.2 2.5 50 2.5zM33.9 41.6c.5-1 1.5-1.7 2.6-1.7H43V22c0-1.6 1.3-2.8 2.8-2.8h8.3c1.6 0 2.8 1.3 2.8 2.8v18h6.5c1.1 0 2.1.7 2.6 1.7.4 1 .2 2.2-.5 3.1L52.1 59.2c-1.1 1.1-3.1 1.1-4.1 0L34.4 44.7C33.6 43.9 33.4 42.7 33.9 41.6zM72.7 71.7c0 2.2-1.8 4-4 4H31.3c-2.2 0-4-1.8-4-4v-8.4c0-2.2 1.8-4 4-4 2.2 0 4 1.8 4 4v4.5h29.6v-4.5c0-2.2 1.8-4 4-4s4 1.8 4 4V71.7z"
                      fill="#fff"
                    ></path>
                  </g>
                </switch>
              </svg>
            </a>
          </div>
        </div>

        {/* Content shown below the headings */}
        <div>
          {touchEdu && (
            <ul className="text-slate-50 list-disc py-1 pl-6 fade-in">
              <li className="pb-2">
              Bachelor of  Computer Science, Assiut University
              </li>
              <li className="pb-2">10/2020 – 07/2024 </li>
            </ul>
          )}
          {touchSkills && (
            <ul className="text-slate-50 list-disc py-1 pl-6 fade-in">
              <li className="pb-2">
                React: Proficient in building reusable components, state
                management using hooks and context, and optimizing performance.
              </li>
              <li className="pb-2">
                JavaScript (ES6+): Strong understanding of modern JavaScript
                features and best practices.
              </li>
              <li className="pb-2">
                HTML & CSS: Expertise in crafting semantic, accessible HTML and
                cross-browser-compatible CSS.
              </li>
              <li className="pb-2">
                Redux: Experience with state management in complex applications.
              </li>
              <li className="pb-2">
                Tailwind CSS: Skilled in using utility-first CSS framework for
                rapid UI development.
              </li>
              <li className="pb-2">
                Version Control: Proficient in Git for version control and
                collaboration.
              </li>
              <li className="pb-2">
                RESTful APIs: Experience in integrating and working with RESTful
                APIs.
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
