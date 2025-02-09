import Image from "next/image";

interface ChallengeProps {
  className?: string;
}

const Challenge: React.FC<ChallengeProps> = ({ className }) => {
  const activities = [
    {
      id: 1,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research"],
      seniority: ["Junior", "Intermediate", "Senior"],
      timeline: "Timeline: 7 Days",
      imageUrl: "/umuravaBg.webp",
    },
    {
      id: 2,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research"],
      seniority: ["Junior", "Intermediate", "Senior"],
      timeline: "Timeline: 7 Days",
      imageUrl: "/umuravaBg.webp",
    },
    {
      id: 3,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research"],
      seniority: ["Junior", "Intermediate", "Senior"],
      timeline: "Timeline: 7 Days",
      imageUrl: "/umuravaBg.webp",
    },
  ];

  return (
    <section className="py-10">
      <h2 className="  text-black-200 text-4xl  font-bold text-center mb-2">
        Explore Challenges & Hackathons
      </h2>
      <p className="text-center text-gray-600 mb-24">
        Join Skills Challenges Program to accelerate your career growth and
        become <br /> part of Africa's largest workforce of digital
        professionals.
      </p>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-12xl">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="relative border rounded-lg shadow-lg overflow-hidden max-w-sm"
            >
              <div className="h-48 w-full relative mb-2">
                <div className="h-full absolute inset-y-0 left-0 right-0 rounded-lg overflow-hidden">
                  <Image
                    src={activity.imageUrl}
                    alt="Umurava"
                    layout="fill"
                    objectFit="cover"
                    className="object-cover p-2 rounded-lg"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded z-10">
                  Open
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{activity.title}</h3>
                <p className="text-gray-700 mt-2 font-medium">Skills Needed:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {Array.isArray(activity.skills) &&
                    activity.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-blue-500 text-blue-500 rounded-full px-3 py-1 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-gray-700 font-medium">Seniority Level:</p>
                  <p className="text-gray-500 ml-2">
                    ({activity.seniority.join(", ")})
                  </p>
                </div>
                <p className="text-gray-500">{activity.timeline}</p>
                <div className="mt-4 border-t border-gray-300 pt-4">
                  <button className="bg-blue-600 text-white py-2 px-4 rounded">
                    View Challenge
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        {" "}
        <button className="border border-blue-600 text-blue-600 bg-white py-2 px-12 rounded mt-24 hover:bg-blue-600 hover:text-white transition-colors">
          View More
        </button>
      </div>
    </section>
  );
};

export default Challenge;
