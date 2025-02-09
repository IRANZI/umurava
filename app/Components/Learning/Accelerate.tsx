import React from "react";
import Image from "next/image";

const Accelerate: React.FC = () => {
  return (
    <div className="mt-24 flex flex-col lg:flex-row items-center justify-center p-6">
      {/* Text Section */}
      <div className="lg:w-2/5 mb-6 lg:mb-0 text-left max-w-xl">
        <h2 className="text-3xl font-bold mb-4 text-customBlue">
          Accelerate Your Students and Traineess Employability and Career Growth
          through Project-based Learning Solution
        </h2>{" "}
        {/* Header size */}
        <p className="text-gray-700 mb-4 text-lg leading-relaxed">
          We partner with Universities, Schools, and Trainining Institutions to 
          build the work experience of their students and trainees through
          project based learning challenges and hackathons
        </p>
        {/* Get Started Button */}
        <button className="bg-customBlue text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
          Partner with us
        </button>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/3 relative lg:ml-8">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/image 3.png"
            alt="Description of the image"
            layout="responsive"
            width={800}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Accelerate;
