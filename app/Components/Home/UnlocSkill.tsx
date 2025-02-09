interface UnlockSkillProps {
  className?: string; 
}



const UnlockSkill: React.FC<UnlockSkillProps> = ({className}) => {
  return (
    <section className="py-10">
      <div className="max-w-screen-xl mx-auto p-6">
        <div className="bg-customBlue rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src="/Unlock.png"
              alt="Students working on laptop"
              className="w-full rounded-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 ml-24">
            <h2 className="text-2xl font-bold mb-12 text-white">
              Ready to Unlock Your Career Potential Today!
            </h2>
            <p className="text-white mb-4">
              Join a challenge or a hackathon to gain valuable work <br />{" "}
              experience, build an impressive portfolio, and increase
              <br /> your chances to land job opportunities and accelerate{" "}
              <br />
              your career growth.
            </p>
            <button className="bg-white text-blue-500 px-6 py-2 rounded hover:bg-blue-700 transition">
              View Challenge
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockSkill


