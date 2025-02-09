import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import UmuravaBg from "../../../../public/umuravaBg.webp"; 
import { Challenge as ChallengeType } from "../../../../lib/challenge"; 
import { ObjectId } from "mongodb"; 

const RecentChallenges: React.FC = () => {
  const [activities, setActivities] = useState<ChallengeType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await fetch("/api/challenges");
        if (!response.ok) {
          throw new Error("Failed to fetch challenges");
        }
        const data = await response.json();
        setActivities(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  const filteredActivities =
    activeTab === "all"
      ? activities
      : activities.filter((activity) => activity.status === activeTab);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 ml-6">Recent Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-12xl mr-10 ml-10 mt-4">
          {filteredActivities.map((activity) => {
            // Safely handle _id
            const id = activity._id instanceof ObjectId ? activity._id.toString() : activity._id;

            return (
              <div
                key={id || "unknown"}
                className="relative border shadow-lg overflow-hidden max-w-sm bg-white rounded-3xl"
              >
                <div className="h-48 w-full relative mb-2">
                  <Image
                    src={UmuravaBg}
                    alt="Challenge Image"
                    layout="fill"
                    objectFit="cover"
                    className="object-cover p-2 rounded-3xl"
                  />
                  <div
                    className={`absolute top-4 right-4 text-white text-sm font-semibold px-2 py-1 rounded z-10 ${
                      activity.status === "ongoing" ? "bg-orange-500" : "bg-green-500"
                    }`}
                  >
                    {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{activity.title}</h3>
                  <p className="text-gray-700 mt-2 font-medium">Skills Needed:</p>
                  <div className="flex gap-2 mt-1">
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
                    <p className="text-gray-900 font-semibold">Timeline:</p>
                    <p className="text-gray-900 ml-2">{activity.duration}</p>
                  </div>
                  <div className="mt-2">
                    <p className="text-gray-900 font-semibold">Seniority Level:</p>
                    <p className="text-gray-900 ml-2">{activity.seniority}</p>
                  </div>
                  <div className="mt-4 border-t border-gray-300 pt-4">
                    <Link href={`/view/${id}`}>
                      <button className="bg-blue-600 text-white py-2 px-4 rounded">
                        View Challenge
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentChallenges;