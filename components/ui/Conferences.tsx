"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Link from "next/link";
import Particles from "./particles-magic-ui";

const ParticlesDemo = () => {
  return (
    <div className="relative flex h-[1000px] w-full flex-col items-center justify-center overflow-hidden rounded-lg" id="Featured">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Invited Talks & Conferences
      </span>
      <div className="flex flex-wrap justify-center gap-6">
        {/* Card 1 */}
        <CardContainer className="inter-var w-full sm:w-[30rem]">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#202231] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              BSides London 2022 Rookie Track
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              A talk on my experience using OSINT to assist in finding missing persons, focusing on my participation in TraceLabs and using open-source information to help law enforcement gather leads on real cases.
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://www.linkedin.com/posts/activity-7007805549702438912-z-zU?utm_source=share&utm_medium=member_desktop"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                View →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Card 2 (duplicate of Card 1) */}
        <CardContainer className="inter-var w-full sm:w-[30rem]">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#202231] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Digital Overdose Conference 2022
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              A talk on the steps of a penetration test, where I covered the usual tools and delved into the business side of offensive security, emphasizing the importance of companies conducting regular penetration tests.
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://www.youtube.com/watch?v=cVvf03p60zI"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                View →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default ParticlesDemo;
