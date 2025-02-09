import React from "react";
import { Bell, Eye, Search } from "lucide-react";
import Image from "next/image";
import profilePicture from "../../../../public/profilePicture.jpeg";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

const SingleChallengeHeader: React.FC = () => {
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
            src={profilePicture}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </header>

      <div className="flex flex-auto justify-between bg-white mt-2 mb-5">
        <div className="flex items-center p-4">
          <Link href="/Dashboard-routes/challenges-hackthons" passHref>
            <button className="text-gray-500 hover:text-blue-800 flex items-center">
              <span className="border border-gray-400 p-2 rounded-xl flex items-center">
                <MoveLeft />
              </span>
              <span className="ml-2">Go Back</span>
            </button>
          </Link>

          <h1 className="mx-4 text-lg font-semibold text-gray-400">
            Challenges & Hackathons
          </h1>

          <Link href="/" passHref>
            <span className="text-blue-600 hover:text-blue-800">
              / Design a Dashboard for Sokofound
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleChallengeHeader;
