"use client";
import React, { useEffect, useState } from 'react';
import { OrbitingCirclesTechStack } from './techStackCircles';
import Particles from './ui/particles-magic-ui';
import { useTheme } from 'next-themes';

const WhoIAm = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <section id='whoami' className='flex flex-col items-center gap-12 p-5'>
      <Particles
        className="absolute inset-0"
        quantity={1300}
        ease={40}
        color={color}
        refresh
      />
      {/* Content: Profile Card and Tech Stack */}
      <div className='flex flex-col lg:flex-row items-center justify-between w-full max-w-5xl pt-10'>
        {/* Profile Information */}
        <div className='flex-1 min-w-[300px] max-w-sm p-4'>
          <div className="w-full overflow-hidden dark:bg-gray-800">
            <img
              className="object-contain object-center w-full max-h-[80vh]"
              src="https://ahmedsherifrashwan.github.io/Img/mfv6o0n8.png"
              alt="my pic"
            />
            <div className="flex items-center px-6 py-3 bg-gray-900">
              <svg
                aria-label="headphones icon"
                className="w-6 h-6 text-white fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
                />
              </svg>
              <h1 className="mx-3 text-lg font-semibold text-white">OPEN TO WORK</h1>
            </div>
            <div className="px-6 py-4">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Ahmed Rashwan</h1>
              <p className="py-2 text-gray-700 dark:text-gray-400">Final-Year Cybersecurity Student | eJPTv1 | ISC2 CC</p>
              <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <svg
                  aria-label="suitcase icon"
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 11H10V13H14V11Z" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                  />
                </svg>
                <h1 className="px-2 text-sm">Coventry University</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <svg
                  aria-label="envelope icon"
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM20 6L12 11L4 6V18H20V6Z"
                  />
                </svg>
                <h1
                  className="px-2 text-sm overflow-x-auto whitespace-nowrap"
                  style={{
                    scrollbarWidth: 'none',       /* Firefox */
                    msOverflowStyle: 'none',      /* Internet Explorer 10+ */
                    WebkitScrollbar: { display: 'none' } /* Webkit Browsers like Chrome, Safari */
                  }}
                >
                  Ahmed.S.Rashwan@Outlook.com
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className='flex-1 min-w-[1000px] max-w-sm p-4'>
          <div className="w-full overflow-hidden p-6 rounded-lg">
            <div className="text-white">
              <OrbitingCirclesTechStack />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIAm;
