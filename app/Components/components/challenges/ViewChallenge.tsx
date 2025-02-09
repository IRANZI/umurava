"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import umuravaBg from "../../../../public/umuravaBg.webp";
import Navbar from "../Navbar";
import SingleChallengeHeader from "./SingleChallengeHeader";
import Link from "next/link";
import {
  MailIcon,
  BriefcaseIcon,
  CalendarIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

const ProjectSection: React.FC = () => {
  const { id } = useParams(); 
  const [challengeData, setChallengeData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChallengeData = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/challenges?id=${id}`);
          const data = await response.json();
          if (response.ok) {
            setChallengeData(data);
          } else {
            setError(data.error || "Error fetching challenge data");
          }
        } catch (error) {
          setError("Failed to fetch challenge data");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchChallengeData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="flex flex-1">
        <div>
          <Navbar isModalOpen={false} setIsModalOpen={() => {}} /> 
        </div>
        <div>
          <SingleChallengeHeader />

          <div className="flex flex-1">
            {/* Project Description Section */}
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 mx-8">
              <Image src={umuravaBg} alt="Logo" height={640} width={640} />
              <h1 className="text-2xl font-bold text-blue-800 mb-4">
                {challengeData.title || "Project Title"}
              </h1>
              <p className="text-gray-700 mb-6">
                {challengeData.description || "Description not available."}
              </p>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-black mb-2">Tasks:</h2>
                <div className="mb-4">
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    Product Requirements:
                  </h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {challengeData.tasks?.productRequirements?.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    )) || <li>No product requirements available.</li>}
                  </ul>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    Product Design:
                  </h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {challengeData.tasks?.productDesign?.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    )) || <li>No product design available.</li>}
                  </ul>
                </div>
              </div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-black mb-2">Deliverables:</h2>
                <ul className="list-disc list-inside text-gray-700">
                  {challengeData.deliverables?.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  )) || <li>No deliverables available.</li>}
                </ul>
              </div>
              <h2 className="text-xl font-semibold text-black mb-2">Note:</h2>
              <p className="list-disc list-inside text-gray-700">
                {challengeData.note || "No additional notes."} <Link href="/sawaPay" className="underline">HERE</Link>
              </p>
            </div>

            {/* Key Instructions Section */}
            <div className="w-1/4">
              <div className="max-w-sm bg-white border border-gray-300 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-black mb-2">Key Instructions:</h2>
                <p className="text-gray-600 mb-4">
                  You are free to schedule the clarification call with the team via this:
                </p>

                {/* Contact Email */}
                <div className="flex items-center mb-4">
                  <MailIcon className="h-8 w-8 text-blue-500 bg-gray-200 rounded-full p-2" />
                  <div className="ml-3">
                    <p className="text-gray-700 font-medium">talent@umurava.africa</p>
                    <p className="text-gray-500 text-sm">Contact Email</p>
                  </div>
                </div>

                {/* Challenge Category */}
                <div className="flex items-center mb-4">
                  <BriefcaseIcon className="h-8 w-8 text-blue-500 bg-gray-200 rounded-full p-2" />
                  <div className="ml-3">
                    <p className="text-gray-700 font-medium">{challengeData.category || "Unknown"}</p>
                    <p className="text-gray-500 text-sm">Challenge Category</p>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center mb-4">
                  <CalendarIcon className="h-8 w-8 text-blue-500 bg-gray-200 rounded-full p-2" />
                  <div className="ml-3">
                    <p className="text-gray-700 font-medium">{challengeData.duration || "Not specified"}</p>
                    <p className="text-gray-500 text-sm">Duration</p>
                  </div>
                </div>

                {/* Money Prize */}
                <div className="flex items-center mb-4">
                  <CurrencyDollarIcon className="h-8 w-8 text-blue-500 bg-gray-200 rounded-full p-2" />
                  <div className="ml-3">
                    <p className="text-gray-700 font-medium">{challengeData.moneyPrize || "Not specified"}</p>
                    <p className="text-gray-500 text-sm">Money Prize</p>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                  Submit your work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;