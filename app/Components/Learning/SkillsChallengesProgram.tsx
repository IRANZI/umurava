import React from "react";

const SkillsChallengesIntegration: React.FC = () => {
  return (
    <div className="mt-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        How Skills Challenges Program can Be <br />
        Integrated into your Learning Institution
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Left Side - Numbered Points */}
        <div className="flex-1 space-y-4">
          {[
            "As Career Development and Job Readiness Program",
            "As Skills Assessments Method after a course or a term",
            "As extracurricular activities to complement academic courses",
            "As the portfolio of the students",
            "As part of Capstone Projects or final-year assignments",
          ].map((point, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-customBlue text-white rounded-full flex items-center justify-center mr-4">
                {index + 1}
              </div>
              <p className="text-lg max-w-xs">{point}</p>
            </div>
          ))}
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 mt-8 lg:mt-0">
          <img
            src="/banner_img_1.png"
            alt="Integration"
            className="w-full h-auto max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsChallengesIntegration;
