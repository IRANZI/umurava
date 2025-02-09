import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ChallengeProps {
  className?: string;
}

const ChallengeSection: React.FC<ChallengeProps> = ({ className }) => {
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
    {
      id: 4,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research"],
      seniority: ["Junior", "Intermediate", "Senior"],
      timeline: "Timeline: 7 Days",
      imageUrl: "/umuravaBg.webp",
    },
    {
      id: 5,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research"],
      seniority: ["Junior", "Intermediate", "Senior"],
      timeline: "Timeline: 7 Days",
      imageUrl: "/umuravaBg.webp",
    },
    {
      id: 6,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research"],
      seniority: ["Junior", "Intermediate", "Senior"],
      timeline: "Timeline: 7 Days",
      imageUrl: "/umuravaBg.webp",
    },
    {
      id: 7,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research"],
      seniority: ["Junior", "Intermediate", "Senior"],
      timeline: "Timeline: 7 Days",
      imageUrl: "/umuravaBg.webp",
    },
    {
      id: 8,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research"],
      seniority: ["Junior", "Intermediate", "Senior"],
      timeline: "Timeline: 7 Days",
      imageUrl: "/umuravaBg.webp",
    },
    {
      id: 9,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research"],
      seniority: ["Junior", "Intermediate", "Senior"],
      timeline: "Timeline: 7 Days",
      imageUrl: "/umuravaBg.webp",
    },
    {
      id: 10,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research"],
      seniority: ["Junior", "Intermediate", "Senior"],
      timeline: "Timeline: 7 Days",
      imageUrl: "/umuravaBg.webp",
    },
    {
      id: 11,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research"],
      seniority: ["Junior", "Intermediate", "Senior"],
      timeline: "Timeline: 7 Days",
      imageUrl: "/umuravaBg.webp",
    },
    {
      id: 12,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research"],
      seniority: ["Junior", "Intermediate", "Senior"],
      timeline: "Timeline: 7 Days",
      imageUrl: "/umuravaBg.webp",
    },
  ];

  return (
    <section className={`py-10 mt-36 ${className}`}>
      {/* Breadcrumb Navigation */}
      <div className="flex items-center mb-12 max-w-6xl mx-auto px-4">
        <Link
          href="/"
          className="text-black-600 hover:underline flex items-center"
        >
          <span className="mr-1">←</span>
          Go Back
        </Link>
        <span className="mx-2">/</span>
        <span className="text-customBlue font-semibold">
          Challenges & Hackathons
        </span>
      </div>

      <div className="flex justify-center m-24 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-14xl w-full">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="relative border rounded-lg shadow-lg overflow-hidden w-full h-full"
            >
              <div className="h-40 w-full relative mb-2">
                <div className="h-full absolute inset-0 m-2 rounded-lg overflow-hidden">
                  <Image
                    src={activity.imageUrl}
                    alt="Umurava"
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
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
                        className="border border-customBlue text-blue-500 rounded-full px-3 py-1 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-gray-700 font-medium">Seniority Level:</p>
                  <p className="text-gray-500 ml-2">
                    ({activity.seniority.join(",")})
                  </p>
                </div>
                <p className="text-gray-500">{activity.timeline}</p>
                <div className="mt-4 border-t border-gray-300 pt-4">
                  <button className="bg-customBlue text-white py-2 px-4 rounded">
                    View Challenge
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
