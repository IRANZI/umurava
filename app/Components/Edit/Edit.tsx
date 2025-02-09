"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const EditChallenge: React.FC = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [duration, setDuration] = useState("");
  const [prize, setPrize] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [skills, setSkills] = useState<string[]>([""]); // Initialize with one empty skill
  const [seniorityLevels, setSeniorityLevels] = useState<string[]>([""]); // Initialize with one empty seniority level
  const [category, setCategory] = useState(""); // State for category
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const challengeId = query.get("id");
    if (challengeId) {
      setId(challengeId);
      fetchChallengeData(challengeId);
    }
  }, []);

  const fetchChallengeData = async (challengeId: string) => {
    try {
      const response = await fetch(`/api/challenges?id=${challengeId}`);
      
      if (!response.ok) {
        const errorText = await response.text(); // Capture the error response
        console.error(`Error fetching challenge data: ${response.status} ${response.statusText}`, errorText);
        throw new Error("Failed to fetch challenge data");
      }
  
      const data = await response.json();
      setTitle(data.title);
      setDeadline(data.deadline);
      setDuration(data.duration);
      setPrize(data.moneyPrize);
      setContactEmail(data.contactEmail);
      setProjectDescription(data.projectDescription);
      setProjectDetails(data.projectBrief);
      setSkills(data.skills || []);
      setSeniorityLevels(data.seniority || []);
      setCategory(data.category || "");
    } catch (error) {
      console.error("Error fetching challenge data:", error);
      setError("Error fetching challenge data.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const updatedData = {
      id,
      title,
      deadline,
      duration,
      moneyPrize: prize,
      contactEmail,
      projectDescription,
      projectBrief: projectDetails,
      skills,
      seniority: seniorityLevels,
      category, // Include category in the submission
    };

    try {
      const response = await fetch(`/api/challenges`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        const errorText = await response.text(); // Capture the error response
        console.error(`Error updating challenge: ${response.status} ${response.statusText}`, errorText);
        throw new Error("Failed to update challenge");
      }

      setSuccess("Challenge updated successfully!");
    } catch (error) {
      const errorMessage = (error as Error).message || "An unknown error occurred";
      setError(errorMessage);
      console.error("Error updating challenge:", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSkillChange = (index: number, value: string) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const handleSeniorityChange = (index: number, value: string) => {
    const updatedLevels = [...seniorityLevels];
    updatedLevels[index] = value;
    setSeniorityLevels(updatedLevels);
  };

  const addSkillField = () => {
    setSkills([...skills, ""]); // Adds a new empty skill input
  };

  const addSeniorityField = () => {
    setSeniorityLevels([...seniorityLevels, ""]); // Adds a new empty seniority input
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center mb-4">
        <Link href="/routing" className="text-gray-500 text-lg flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H3m0 0l6-6m-6 6l6 6" />
          </svg>
          Go Back
        </Link>
        <span className="mx-2 text-gray-500">/</span>
        <Link href="/edit" className="text-customBlue text-lg">
          Edit Challenge
        </Link>
      </div>

      <div className="border-b border-gray-300 pb-4 mb-4"></div>

      <div className="flex flex-col items-center">
        <p className="font-bold mb-4">Fill out these details to update your challenge</p>

        {loading && <p className="text-customBlue">Updating challenge...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
          {/* Challenge Title */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Challenge/Hackathon Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Category Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
              Category
            </label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter Category"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Deadline and Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deadline">
                Deadline
              </label>
              <input
                type="date"
                id="deadline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="duration">
                Duration
              </label>
              <input
                type="text"
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Enter Duration"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>

          {/* Money Prize and Contact Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prize">
                Money Prize
              </label>
              <input
                type="text"
                id="prize"
                value={prize}
                onChange={(e) => setPrize(e.target.value)}
                placeholder="Prize"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactEmail">
                Contact Email
              </label>
              <input
                type="email"
                id="contactEmail"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="Enter your email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>

          {/* Skills Needed */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Skills Needed</label>
            {skills.map((skill, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                  placeholder="Enter a skill"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <button
                  type="button"
                  className="ml-2 bg-blue-600 text-white rounded px-4"
                  onClick={addSkillField}
                >
                  +
                </button>
              </div>
            ))}
          </div>

          {/* Seniority Levels */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Seniority Levels</label>
            {Array.isArray(seniorityLevels) && seniorityLevels.map((level, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  value={level}
                  onChange={(e) => handleSeniorityChange(index, e.target.value)}
                  placeholder="Enter a seniority level"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <button
                  type="button"
                  className="ml-2 bg-blue-600 text-white rounded px-4"
                  onClick={addSeniorityField}
                >
                  +
                </button>
              </div>
            ))}
          </div>

          {/* Project Description */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectDescription">
              Project Description
            </label>
            <textarea
              id="projectDescription"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              placeholder="Enter project description..."
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows={3}
              required
            />
            <p className="text-gray-500 text-xs mt-1">Keep this simple of 250 characters</p>
          </div>

          {/* Project Brief */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectDetails">
              Project Brief
            </label>
            <textarea
              id="projectDetails"
              value={projectDetails}
              onChange={(e) => setProjectDetails(e.target.value)}
              placeholder="Enter text here..."
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows={3}
              required
            />
            <p className="text-gray-500 text-xs mt-1">Keep this simple of 500 characters</p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded mr-4"
              onClick={() => {
                // Reset to initial values
                setTitle("");
                setDeadline("");
                setDuration("");
                setPrize("");
                setContactEmail("");
                setProjectDescription("");
                setProjectDetails("");
                setSkills([""]); // Reset skills
                setSeniorityLevels([""]); // Reset seniority levels
                setCategory(""); // Reset category
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-customBlue text-white py-2 px-4 rounded"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Challenge"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditChallenge;