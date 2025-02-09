import React from "react";
import { Bell,Search } from "lucide-react";
import Image from "next/image";
import profilePicture from "../../../public/profilePicture.jpeg";
const HackathonsHeader: React.FC = () => {
  return (
    <>
    
   
      <header className="flex items-center justify-between bg-white px-6 py-4">
        {/* Search Bar */}
        <div className="flex items-center flex-grow max-w-md relative">
          <Search className="absolute left-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-10 pr-4 py-2 text-gray-700 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-customBlue"
          />
        </div>

        {/* Notification and Profile Section */}
        <div className="flex items-center ml-6 space-x-4">
          {/* Notification Icon */}
          <button
            type="button"
            className="p-2 text-gray-600 rounded-full bg-gray-200 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-customBlue"
          >
            <Bell size={24} />
          </button>

          {/* Profile Picture */}
          <Image
            src={profilePicture}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </header>

      
     

        
      
    
    </>
  );
};

export default HackathonsHeader;
