import React from "react";

const KeyOfferings: React.FC = () => {
  return (
    <div className="mt-24 flex flex-col items-center justify-center px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Key Offerings & Benefits:
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {/* Top Row - 3 Boxes */}
        <div className="bg-customBlue text-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4">
            Employability and Career Development Opportunities
          </h3>
          <p>
            Students gain hands-on experience working on real-world challenges,
            enhancing their career prospects.
          </p>
        </div>

        <div className="bg-customBlue text-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4">
            Practical Application of Classroom Knowledge
          </h3>
          <p>
            The Skills Challenges bridge the gap between theoretical knowledge
            and practical applications.
          </p>
        </div>

        <div className="bg-customBlue text-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4">
            Students & Trainees Engagement Knowledge
          </h3>
          <p>
            Students are actively engaged in hands-on projects that enhance
            their learning experience.
          </p>
        </div>
      </div>

      {/* Bottom Row - 2 Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 max-w-6xl w-full">
        <div className="bg-customBlue text-white p-6 rounded-lg shadow-lg lg:col-span-2 flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4">
            Access to the Industry Experts & Mentors
          </h3>
          <p>
            Students gain insights from industry experts and mentors, enhancing
            their understanding of their field.
          </p>
        </div>

        <div className="bg-customBlue text-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4">Skills Assessments</h3>
          <p>
            Provides students with feedback based on skills assessments
            integrated into their curriculum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyOfferings;
