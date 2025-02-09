import React from "react";

const TransformYourInstitution: React.FC = () => {
  return (
    <div className="relative bg-customBlue py-16 px-6 mx-auto max-w-6xl overflow-hidden rounded-lg mb-24 top-16">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-400 rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-400 rounded-full opacity-30 transform translate-x-1/2 translate-y-1/2"></div>

      {/* Content */}
      <div className="text-center">
        <h2 className="text-white text-3xl font-bold mb-4">
          Ready to transform your learning institution?
        </h2>
        <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
          Let’s Partner
        </button>
      </div>
    </div>
  );
};

export default TransformYourInstitution;
