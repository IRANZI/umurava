import { BriefcaseIcon } from "@heroicons/react/outline";

interface ExperienceProps {
  className?: string;
}

const Experience: React.FC<ExperienceProps> = ({ className }) => {
  return (
    <section className="px-12 py-24 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">
        Experience a New Way of Building <br />
        Work Experience
      </h2>
      <p className="text-lg text-center mb-12">
        Join Skills Challenges Program to accelerate your career growth and
        become
        <br /> part of Africa's largest workforce of digital professionals.
      </p>
      <div className="flex flex-col items-center">
        {/* First Box */}
        <div className="bg-customBlue text-white p-6 rounded-lg shadow-lg w-full md:w-4/5 lg:w-2/3 mb-6">
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <BriefcaseIcon className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              Build a Strong Portfolio and Hand-On Experience
            </h3>
            <p>
              Tackle real-world projects through challenges and hackathons that
              mirror real-world challenges faced by potential employers and
              clients to showcase your portfolio of completed projects.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-4/5 lg:w-2/3">
          <div className="bg-customBlue text-white p-6 rounded-lg shadow-lg flex flex-col items-start">
            <div className="mb-4">
              <BriefcaseIcon className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              Enhance Your Employment Path
            </h3>
            <p>
              Explore in-demand skills and build a strong portfolio to increase
              your chances of landing your dream job.
            </p>
          </div>

          <div className="bg-customBlue text-white p-6 rounded-lg shadow-lg flex flex-col items-start">
            <div className="mb-4">
              <BriefcaseIcon className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              Earn Recognition and Prizes
            </h3>
            <p>
              Earn both Money and Knowledge Prizes by participating in various
              competitions and working on real-world projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
