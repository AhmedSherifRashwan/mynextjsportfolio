"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter, // Twitter or X
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { BackgroundBeams } from "./ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased" id="Contact">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Stay Connected With Me
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Thank you for browsing through my portfolio. Feel free to stay connected and up-to-date with everything I'm doing on LinkedIn and X (formerly Twitter).
        </p>

        {/* Responsive Social Links */}
        <div className="flex justify-center items-center space-x-6 mt-4">
          <a
            href="https://github.com/AhmedSherifRashwan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-900 transition duration-300"
          >
            <FontAwesomeIcon icon={faGithub} className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/rsasec0x01/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-900 transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
          </a>
          <a
            href="https://x.com/AhmedRsasec0x01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-900 transition duration-300"
          >
            <FontAwesomeIcon icon={faXTwitter} className="text-3xl" />
          </a>
          <a
            href="mailto:ahmed.s.rashwan@outlook.com"
            className="text-gray-500 hover:text-blue-900 transition duration-300"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
          </a>
        </div>
      </div>
      <BackgroundBeams />
    </div>  
  );
}
