import React from "react";

const OurStory: React.FC = () => {
  return (
    <div className="mt-24 flex flex-col lg:flex-row items-center justify-center p-6">
      {/* Text Section */}
      <div className="lg:w-2/5 mb-6 lg:mb-0 text-left max-w-xl">
        <h2 className="text-3xl font-bold mb-4 text-blue-500">Our Story</h2>
        <p className="text-gray-700 mb-4 text-lg leading-relaxed">
          With 3 years of experience matching African digital talents to local
          and global job markets, we still remain with a big number of jobs that
          remain unfilled due to the lack of experienced African talents.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Driven by our mission to place skilled and professional digital
          talent, we created Skills Challenges as a project-based learning
          solution for talents to gain real-world experience, solve problems,
          and build portfolios so that they become ready for global job markets.
        </p>
      </div>

      {/* Video Section */}
      <div className="lg:w-1/3 relative lg:ml-8">
        <div className="bg-blue-500 p-4 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-72 rounded-lg border-0 filter blur-sm"
            src="https://www.youtube.com/embed/bOgZPZrom2Q?start=5&controls=0"
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h3 className="text-4xl font-bold text-white transform rotate-[-5deg]">
              UMURAVA
            </h3>

            <p className="text-3xl font-bold text-yellow-400 transform rotate-[-5deg]">
              SKILLS CHALLENGES
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
