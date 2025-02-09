import React ,{useState,useEffect}from "react";
import { Bell,Search } from "lucide-react";
import Image from "next/image";
import profilePicture from "../../../../public/profilePicture.jpeg";


const HackathonsHeader: React.FC = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!searchQuery) {
        setSearchResults([]);
        return;
      }

      try {
        const url = `/api/challenges?search=${encodeURIComponent(searchQuery)}`;
        const res = await fetch(url);
        const data = await res.json();

        if (res.ok) {
          setSearchResults(data);
        } else {
          console.error("Error fetching search results:", data.error);
        }
      } catch (error) {
        console.error("API request failed:", error);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchQuery(e.currentTarget.value); 
    }
  };

  return (
    <>
    
   
      <header className="flex items-center justify-between bg-white px-6 py-4">
        {/* Search Bar */}
        <div className="flex items-center flex-grow max-w-md relative mb-6">
          <Search className="absolute left-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-10 pr-4 py-2 text-gray-700 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown} 
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

      <div className="flex flex-auto justify-between">
        <div className="text-left px-4 py-4">
          <h1 className="text-3xl font-semibold text-gray-900">Challenges</h1>
          <p className="text-1xl text-gray-600  py-4">
            Join a challenge or hackathon to gain valuable work experience
          </p>
        </div>

        
      </div>
    
    </>
  );
};

export default HackathonsHeader;
