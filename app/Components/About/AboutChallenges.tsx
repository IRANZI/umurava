import React from "react";
import Image from "next/image";

const AboutChallenge: React.FC = () => {
  return (
    <div className="mt-24 flex flex-col lg:flex-row items-center justify-center p-6">
      {/* Text Section */}
      <div className="lg:w-2/5 mb-6 lg:mb-0 text-left max-w-xl">
        <h2 className="text-3xl font-bold mb-4 text-black">
          Skills Challenges Program is built on the Umurava Talent Marketplace
          Platform
        </h2>
        <p className="text-gray-700 mb-4 text-lg leading-relaxed">
          A Project-based Learning Solution aimed at providing young and senior
          talents with an opportunity to showcase their skills to real-world
          projects and challenges from our partner companies and organizations.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Umurava Skills Challenges enables young talents to build a portfolio
          and experience that increases their readiness to access job
          opportunities and projects.
        </p>

        {/* Get Started Button */}
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
          Get Started
        </button>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/3 relative lg:ml-8">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/cardPhoto4.webp"
            alt="Description of the image"
            layout="responsive"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutChallenge;
