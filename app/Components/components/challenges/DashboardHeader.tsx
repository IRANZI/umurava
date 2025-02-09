import React from "react";
import { Bell, Eye, Search } from "lucide-react";
import Image from "next/image";

const DashboardHeader: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <header className="flex items-center justify-between bg-white px-6 py-4">
        {/* Search Bar */}
        <div className="flex items-center flex-grow max-w-md relative">
          <Search className="absolute left-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-10 pr-4 py-2 text-gray-700 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Notification and Profile Section */}
        <div className="flex items-center ml-6 space-x-4">
          {/* Notification Icon */}
          <button
            type="button"
            className="p-2 text-gray-600 rounded-full bg-gray-200 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Bell size={24} />
          </button>

          {/* Profile Picture */}
          <Image
            src="/profilePicture.jpeg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </header>

      <div className="flex flex-auto justify-between">
        <div className="text-left px-4 py-4">
          <h1 className="text-3xl font-semibold text-gray-900">
            Welcome back Hilaire,
          </h1>
          <p className="text-1xl text-gray-600  py-4">
            Build Work Experience through Skills Challenges
          </p>
        </div>

        <div>
          <button className="flex items-center px-4 py-3 mt-6 mr-6 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Eye size={16} className="mr-2" />
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
