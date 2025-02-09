"use client";

import React, { useState } from "react";
import Navbar from "../Navbar";
import Challenges from "./HackathonsComponents";
import HackathonsHeader from "./HackathonsHeader";
import Modal from "../community/Modal";

const ChallengesAndHackathons: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full"> 
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      
      <div className="relative flex-1 bg-white p-10 w-full h-full"> 
     
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            isModalOpen ? "bg-black/50 backdrop-blur-md pointer-events-none" : ""
          }`}
        ></div>

     
        <div className={`relative transition-all duration-300 ${isModalOpen ? "opacity-50" : "opacity-100"}`}>
          <HackathonsHeader />
          <Challenges />
          <div className="p-10 bg-gray-100 rounded-lg shadow-md mt-6 w-full h-full">
        
          </div> 
        </div>
      </div>

      
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default ChallengesAndHackathons;