import Image from "next/image";

interface GainProps {
  className?: string;
}

export const Gain: React.FC<GainProps> = ({ className }) => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          What else can I gain from <br /> participating in Skills Challenges?
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Join Skills Challenges Program to accelerate your career growth and
          become <br /> part of Africa's largest workforce of digital
          professionals.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start max-w-6xl mx-auto">
        <div className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="bg-customBlue text-white p-4 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 7h16a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2zm0 0V5a2 2 0 012-2h8a2 2 0 012 2v2m-6 4h2m-2 4h2"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Enhance Your Employment Path
                </h3>
                <p className="text-gray-700">
                  Network with other talented individuals and learn from their
                  experiences.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-customBlue text-white p-4 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zM9 10h6m-6 4h4m-1-8h2M12 16l2 2m-2-2l-2 2"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Earn Recognition and Prizes
                </h3>
                <p className="text-gray-700">
                  Gain valuable experience and knowledge to advance your career
                  in the digital economy.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-customBlue text-white p-4 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h4a2 2 0 012 2v4m-6 0H9a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4m-3-7v4m0 0h4m-4 0H9"
                  />
                  <circle cx="16" cy="8" r="1" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Personal Growth</h3>
                <p className="text-gray-700">
                  Challenge yourself, learn new skills, and expand your
                  professional network.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 ml-8">
              {" "}
              <div className="bg-customBlue text-white p-4 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15.36l-3.76 2.09 1.01-4.19-3.24-2.82 4.21-.36L12 6l1.78 4.08 4.21.36-3.24 2.82 1.01 4.19z"
                  />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Learn from Industry Experts
                </h3>
                <p className="text-gray-700">
                  Access valuable insights and guidance from experienced
                  professionals.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-36 hidden md:block">
          <Image
            src="/banner_img_1.png"
            alt="Skills Challenges"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};
