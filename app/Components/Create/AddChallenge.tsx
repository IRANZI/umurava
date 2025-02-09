import React, { ReactNode, useState } from 'react';
import Navbar from '../Navbar';
import CreateChallenge from './Create';
import HackathonsHeader from './HackathonsHeader';

const AddChallenge: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal open/close

  return (
    <>
      <div className="flex">
        <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> {/* Pass props to Navbar */}
        <div className="flex-1 bg-white">
          <HackathonsHeader />
          <CreateChallenge />
          <div className="p-6 bg-gray-100">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddChallenge;