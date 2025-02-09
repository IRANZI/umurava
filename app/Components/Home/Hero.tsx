import Image from "next/image";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <main
      className={`flex flex-1 mt-24 sm:mt-32 md:mt-40 p-4 sm:p-6 ${className}`}
    >
      <div className="flex flex-1 flex-col md:flex-row items-center pl-2 sm:pl-8 md:pl-12 lg:pl-20">
        {/* Left Section */}
        <div className="flex-1 pr-2 sm:pr-4 md:pr-6 lg:pr-10 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-customBlue mb-3 leading-snug">
            Build Work Experience <br />
            through Skills Challenges <br />
            Program
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 leading-relaxed">
            Enhance your Employability and Accelerate your Career Growth <br />
            by working on Hands-on projects & hackathons from various <br />
            businesses & organizations.
          </p>
          <button className="bg-customBlue text-white text-sm sm:text-base px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg shadow-lg hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-end justify-center md:justify-end space-x-2 sm:space-x-4 md:space-x-6 pr-4 sm:pr-6 md:pr-8 lg:pr-12">
          {/* First Image */}
          <div className="flex flex-col items-center">
            <Image
              src="/image 2.png"
              alt="Talent Image 1"
              width={350}
              height={350}
              style={{ objectFit: "cover" }}
              className="w-full max-w-[300px] sm:max-w-[300px] md:max-w-[350px]"
            />
          </div>
          {/* Second Image */}
          <div className="flex flex-col items-center">
            <Image
              src="/image 1.png"
              alt="Talent Image 2"
              width={277}
              height={350}
              style={{ objectFit: "cover" }}
              className="w-full max-w-[250px] sm:max-w-[250px] md:max-w-[277px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
