"use client";

import React, { useState } from 'react';
import Navbar from '../Navbar';
import DashboardHeader from './DashboardHeader';
import RecentChallenges from './RecentChallenges';
import ChallengesSection from './ChallengeCard';
import Modal from '../community/Modal';

const AdminDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex">
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div className="relative flex-1 flex flex-col">
      
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            isModalOpen ? "bg-black/50 backdrop-blur-md pointer-events-none" : ""
          }`}
        ></div>

        <div className={`relative transition-all duration-100 ${isModalOpen ? "opacity-50" : "opacity-100"} bg-white w-full`}>
          <DashboardHeader />
          <ChallengesSection />
          <RecentChallenges />
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

export default AdminDashboard;