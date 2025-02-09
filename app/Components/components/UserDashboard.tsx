import React, { useState } from 'react';
import Navbar from './Navbar';
import DashboardHeader from './challenges/DashboardHeader';
import RecentChallenges from './challenges/Challenges';
import ChallengesSection from './challenges/ChallengesCard';
import Modal from './community/Modal';

const UserDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex">
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div className="relative flex-1">
        {/* Darkened background effect when modal is open */}
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            isModalOpen ? "bg-black/50 backdrop-blur-md pointer-events-none" : ""
          }`}
        ></div>

        {/* Content that stays behind the modal */}
        <div className={`relative transition-all duration-300 ${isModalOpen ? "opacity-50" : "opacity-100"}`}>
          <DashboardHeader />
          <ChallengesSection />
          <RecentChallenges />
        
        </div>
      </div>

      {/* Modal appears on top of everything */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default UserDashboard;