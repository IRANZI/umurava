import { BriefcaseIcon } from "@heroicons/react/outline";

interface SolutionProps {
  className?: string;
}

const Solution: React.FC<SolutionProps> = ({ className }) => {
  return (
    <section className="px-12 py-24 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">
        Why we are solving this problem
      </h2>

      <div className="flex flex-col items-center">
        {/* First Box */}
        <div className="bg-customBlue text-white p-6 rounded-lg shadow-lg w-full md:w-4/5 lg:w-2/3 mb-6">
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <BriefcaseIcon className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              Bridging the Experience Ga
            </h3>
            <p>
              Many talents acquired theoretical knowledge and are rejected from
              jobs because they lack work experience and are not able to put in
              actions what they acquired in the schools.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-4/5 lg:w-2/3">
          <div className="bg-customBlue text-white p-6 rounded-lg shadow-lg flex flex-col items-start">
            <div className="mb-4">
              <BriefcaseIcon className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              Bridging Education and Employment
            </h3>
            <p>
              Traditional education doesnt’ always prepare talents for the
              demands of the tech and digital economy and we are providing
              in-demand skills through Skills Challenges.
            </p>
          </div>

          <div className="bg-customBlue text-white p-6 rounded-lg shadow-lg flex flex-col items-start">
            <div className="mb-4">
              <BriefcaseIcon className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              Preparing Talents for Global Job Markets
            </h3>
            <p>
              We are ensuring that African talents shine globally and that’s why
              we are equipping them with global technical experience and
              shandout globally. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
