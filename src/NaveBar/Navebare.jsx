import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import i from "./Alogo-removebg-preview.png";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

function Navebare() {
  return (
    <nav className="bg-nav w-full p-3 fixed left-0 right-0 z-50">
      {/* Container */}
      <div className="w-11/12 m-auto flex justify-between items-center max-lg:flex-col max-lg:space-y-2 flex-wrap">
        {/* Left Section */}
        <div className="flex items-center">
          <div className="w-28 h-11 flex items-center">
            <img src={i} alt="" />
          </div>
          <ul className="flex space-x-5 md:space-x-10 text-lg font-semibold">
            <li className="hover:scale-110  transition duration-500">
              <Link
                className="text-black hover:text-navText transition duration-500"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="hover:scale-110 transition duration-500">
              <Link
                className="text-black hover:text-navText transition duration-500"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="hover:scale-110 transition duration-500">
              <Link
                className="text-black hover:text-navText transition duration-500"
                to="/projects"
              >
                Projects
              </Link>
            </li>

          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6 ">
          <a
            href="https://www.linkedin.com/in/ayman-osama-66a051248/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              className="hover:scale-110 transition duration-300"
            />
          </a>
          <a href="https://github.com/ayman1417" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="hover:scale-110 transition duration-300"
            />
          </a>
          <a href="mailto:ao741003@gmail.com" target="_blank">
            <FontAwesomeIcon
              icon={faGoogle}
              size="2x"
              className="hover:scale-110 transition duration-300"
            />
          </a>
          <a href="https://www.instagram.com/aymanosama_14/" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className="hover:scale-110 transition duration-300"
            />
          </a>
          <a
            href="https://www.facebook.com/ayman.khaled.315865"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              className="hover:scale-110 transition duration-300   "
            />
          </a>
          {/* Contact Button */}
          <a
            href="/contact"
            className="border-2 rounded-md p-2 border-black text-black font-semibold hover:bg-black hover:text-navText hover:border-navText transition duration-500"
          >
            CONTACT ME
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navebare;
