"use client";

import React, { ReactNode } from 'react';


import Navbar from '../Navbar';
import EditChallenge from './Edit';
import HackathonsHeader from '../Create/HackathonsHeader';


const Editing: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <div className="flex">
        <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <div className="flex-1 bg-white">
          <HackathonsHeader />
          <EditChallenge />
          <div className="p-6 bg-gray-100">{children}</div>
        </div>
      </div>
    </>
  );
};


export default Editing;
