"use client";

import { useState, useEffect } from "react";

import SocialLinks from "./social-links";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full-Stack Developer",
    "React Developer",
    "Web Designer",
    "UI/UX Enthusiast",
  ];

  useEffect(() => {
    const role = roles[currentRole];

    if (currentIndex < role.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + role[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      // Pause at the end of the text
      const pauseTimeout = setTimeout(() => {
        // Clear the text
        setDisplayText("");
        setCurrentIndex(0);
        // Move to next role
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, 2000);

      return () => clearTimeout(pauseTimeout);
    }
  }, [currentIndex, currentRole, roles]);

  return (
    <div className="flex flex-col  lg:flex-row min-h-screen justify-center items-center gap-8 lg:gap-16">
      <div className="w-full flex flex-col justify-center items-center text-center ">
        <p className="text-sm uppercase tracking-wider mb-4">
          WELCOME TO MY WORLD
        </p>

        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-1">
          Hi, I'm <span className="text-[#ff014f]">Shaker Farooq</span>
          <span className=" block mt-1">I'm a</span>
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold mb-6 h-12">
          <span className="text-[#ff014f]">{displayText}</span>
          <span className="animate-pulse">|</span>
        </h2>

        <p className="text-gray-400 mb-12 max-w-3xl">
          I love building interactive, digital experiences on web.{" "}
          <br className="hidden md:block" />
          My approach combines clean code, performance optimization, and
          thoughtful design to deliver solutions that exceed expectations.
        </p>

        <div className="flex flex-col md:flex-row gap-12">
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4">
              FIND ME ON
            </h3>
            <SocialLinks />
          </div>

          {/* <div>
            <h3 className="text-sm uppercase tracking-wider mb-4">BEST SKILL ON</h3>
            <SkillIcons />
          </div> */}
        </div>
      </div>

      {/* <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <div className="relative w-full max-w-md lg:max-w-lg">
          <Image
            src={}
            alt="Jone Lee"
            width={600}
            height={600}
            className="object-contain "
            priority
          />
        </div>
      </div> */}
    </div>
  );
}
