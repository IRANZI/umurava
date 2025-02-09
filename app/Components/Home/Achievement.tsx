"use client";
import React from "react";
interface AchivementProps {
  className?: string;
}

const Achievement: React.FC<AchivementProps> = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-blue-500 px-4 sm:px-8 lg:px-24 py-8 sm:py-12 lg:py-20 mx-4 sm:mx-8 lg:mx-32 my-8 lg:my-16 rounded-2xl text-white space-y-8 lg:space-y-0 overflow-hidden">
      <svg
        className="absolute top-[-50px] sm:top-[-100px] lg:top-[-200px] right-[-50px] sm:right-[-130px] lg:right-[-200px] w-[150px] sm:w-[250px] lg:w-[400px] h-[150px] sm:h-[250px] lg:h-[400px]"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="250"
          cy="250"
          r="200"
          stroke="white"
          strokeWidth="65"
          fill="none"
          opacity="0.14"
        />
      </svg>

      <svg
        className="absolute bottom-[-100px] sm:bottom-[-160px] lg:bottom-[-300px] left-[100px] sm:left-[20px] lg:left-[200px] w-[150px] sm:w-[250px] lg:w-[400px] h-[150px] sm:h-[250px] lg:h-[400px]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="200"
          cy="200"
          r="150"
          stroke="white"
          strokeWidth="65"
          fill="none"
          opacity="0.14"
        />
      </svg>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 text-center">
        <div>
          <p className="text-3xl sm:text-4xl font-bold">1</p>
          <p className="text-base sm:text-lg">Year</p>
        </div>
        <div>
          <p className="text-3xl sm:text-4xl font-bold">500+</p>
          <p className="text-base sm:text-lg">Challenges Completed</p>
        </div>
        <div>
          <p className="text-3xl sm:text-4xl font-bold">10K+</p>
          <p className="text-base sm:text-lg">Users</p>
        </div>
        <div>
          <p className="text-3xl sm:text-4xl font-bold">6+</p>
          <p className="text-base sm:text-lg">Countries</p>
        </div>
      </div>
    </div>
  );
};
export default Achievement;
