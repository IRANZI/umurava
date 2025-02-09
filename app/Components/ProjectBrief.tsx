"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { Button } from "./ui/Button";
import { Mail, Calendar, DollarSign, FileText } from "lucide-react";
import Image from "next/image";
import Navbar from "./Navbar";
import SingleChallengeHeader from "./Challenges/HackathonsHeader";
import { Challenge } from "../../../lib/challenge";
import umuravaBg from '../../public/umuravaBg.webp';

interface ProjectBriefProps {
  id: string; // Accept the ID as a prop
}

export default function ProjectBrief({ id }: ProjectBriefProps) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [challengeData, setChallengeData] = useState<Challenge | null>(null);

  useEffect(() => {
    const fetchChallengeData = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/challenges?id=${id}`);
          const data = await response.json();
          if (response.ok) {
            setChallengeData(data);
          } else {
            console.error("Error fetching challenge data:", data.error);
          }
        } catch (error) {
          console.error("Error fetching challenge data:", error);
        }
      }
    };

    fetchChallengeData();
  }, [id]);

  const handleEdit = () => {
    if (id) {
      router.push(`/edit?id=${id}`); // Navigate to the edit page with the challenge ID
    }
  };

  const handleDelete = async () => {
    if (id) {
      // Confirm deletion
      const confirmDelete = window.confirm("Are you sure you want to delete this challenge?");
      if (confirmDelete) {
        try {
          const response = await fetch(`/api/challenges?id=${id}`, {
            method: 'DELETE',
          });
          
          if (response.ok) {
            alert("Challenge deleted successfully.");
            router.push('/dash-admin'); // Redirect to the home page or another page after deletion
          } else {
            const data = await response.json();
            console.error("Error deleting challenge:", data.error);
            alert("Failed to delete the challenge. Please try again.");
          }
        } catch (error) {
          console.error("Error deleting challenge:", error);
          alert("An error occurred. Please try again.");
        }
      }
    }
  };

  return (
    <div className="flex bg-white">
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div className="max-w-6xl mx-auto p-6 ml-20">
        <SingleChallengeHeader />
        <div className="grid md:grid-cols-[1fr,400px] gap-52 mt-20 ml-2 w-[1300px]">
          <div className="space-y-6">
            <div className="bg-[#2B71F0] rounded-lg p-8 flex items-center justify-center h-72">
              <Image
                src={umuravaBg}
                alt="Umurava Logo"
                width={500}
                height={200}
              />
            </div>

            {challengeData ? (
              <div>
                <h1 className="text-xl font-semibold mb-4 text-black">
                  Project Brief: {challengeData.projectBrief || "Project Brief"}
                </h1>
                <p className="text-gray-600 text-sm mb-4">
                  {challengeData.projectDescription || "Description not available."}
                </p>
              </div>
            ) : (
              <p>Loading challenge data...</p>
            )}

            {/* Tasks Section */}
            <div className="space-y-4">
              <h2 className="font-semibold mb-2 text-black">Tasks:</h2>
              <div>
                <h3 className="font-semibold mb-2">Product Requirements</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  {Array.isArray(challengeData?.productRequirements) && challengeData.productRequirements.length > 0 ? (
                    challengeData.productRequirements.map((req: string, index: number) => (
                      <li key={index}>{req}</li>
                    ))
                  ) : (
                    <li>No product requirements available.</li>
                  )}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Product Design:</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  {Array.isArray(challengeData?.productDesign) && challengeData.productDesign.length > 0 ? (
                    challengeData.productDesign.map((design: string, index: number) => (
                      <li key={index}>{design}</li>
                    ))
                  ) : (
                    <li>No product design available.</li>
                  )}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Deliverables:</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  {Array.isArray(challengeData?.deliverables) && challengeData.deliverables.length > 0 ? (
                    challengeData.deliverables.map((deliverable: string, index: number) => (
                      <li key={index}>{deliverable}</li>
                    ))
                  ) : (
                    <li>No deliverables available.</li>
                  )}
                </ul>
                <p className="text-sm text-gray-600">
                  The Product Designer will provide all documents and deliverables to the client before the review meetings.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">NOTE:</h3>
                <p className="text-sm text-gray-600">
                  Find Product Requirements Summary and Features Description for Sawa Pay{" "}
                  <span className="text-blue-600 hover:underline cursor-pointer">
                    HERE
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg border p-6 space-y-6">
              <h2 className="font-semibold">Key Instructions:</h2>
              <p className="text-sm text-gray-600">
                You are free to schedule the clarification call with the team via this
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">{challengeData?.contactEmail}</div>
                    <div className="text-sm text-gray-500">Contact Email</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">{challengeData?.category || "Unknown"}</div>
                    <div className="text-sm text-gray-500">Challenge category</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">{challengeData?.duration || "Not specified"}</div>
                    <div className="text-sm text-gray-500">Duration</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">{challengeData?.moneyPrize || "Not specified"}</div>
                    <div className="text-sm text-gray-500">Money Prize</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="destructive"
                  className="flex-1 bg-red-600 hover:bg-red-700"
                  onClick={handleDelete} // Delete button now triggers deletion
                >
                  Delete
                </Button>
                <Button
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  onClick={handleEdit} // Edit button navigates to the edit page
                >
                  Edit
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">Participants</h2>
                <span className="text-xs text-white bg-blue-600 px-2 py-1 rounded-full">
                  {challengeData ? challengeData.participantsCount || 0 : 0}
                </span>
              </div>
              <div className="space-y-4">
                <Button variant="outline" className="w-full bg-blue-600 text-white">
                  View All
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}