"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import umurava from "../../public/umuravaBg.webp";
import profilePicture from "../../public/profilePicture.jpeg";
import { Home, NotebookIcon, Settings, Headset, Users2, User } from "lucide-react";
import Modal from "./community/Modal";

interface NavbarProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

const Navbar: FC<NavbarProps> = ({ isModalOpen, setIsModalOpen }) => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");

  const navLinks = [
    { href: "/dash-admin", label: "Dashboard", icon: Home },
    {
      href: "/routing",
      label: "Challenges & Hackathons",
      icon: NotebookIcon,
    },
  ];

  const footerLinks = [
    { href: "/settings", label: "Settings", icon: Settings },
    { href: "/help", label: "Help Center", icon: Headset },
    { href: "/referrals", label: "Refer Family & Friends", icon: Users2 },
  ];

  const handleCommunityClick = () => {
    setIsModalOpen(true);
    setActiveLink("community");
  };

  const handleNavLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <>
      <div className="text-1xl font-sans bg-customBlue flex flex-col h-screen text-white w-full sm:w-80 sticky top-0">
        <div className="flex items-center justify-center h-50 border-b border-blue-500">
          <Image src={umurava} alt="Logo" height={640} width={640} />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col mt-6 space-y-2">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} onClick={() => handleNavLinkClick(label.toLowerCase())}>
              <div
                className={`flex items-center px-4 py-3 transition duration-200 cursor-pointer ${
                  activeLink === label.toLowerCase() || pathname === href
                    ? "bg-white text-blue-500 rounded-lg m-2"
                    : "hover:bg-white hover:text-blue-500"
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="ml-2">{label}</span>
              </div>
            </Link>
          ))}
          {/* Community Link Triggers Modal */}
          <button
            onClick={handleCommunityClick}
            className={`flex items-center px-4 py-3 transition duration-200 cursor-pointer ${
              activeLink === "community" ? "bg-white text-blue-500 rounded-lg m-2" : "hover:bg-white hover:text-blue-500"
            }`}
          >
            <User className="w-6 h-6" />
            <span className="ml-2">Community</span>
          </button>
        </div>

        {/* Footer Links */}
        <div className="mt-auto flex flex-col space-y-2 mb-6">
          {footerLinks.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} onClick={() => handleNavLinkClick(label.toLowerCase())}>
              <div
                className={`flex items-center px-4 py-3 transition duration-200 cursor-pointer ${
                  activeLink === label.toLowerCase() || pathname === href
                    ? "bg-white text-blue-500 rounded-lg mt-2"
                    : "hover:bg-white hover:text-blue-500"
                }`}
              >
                <Icon className="w-6 h-6" />
                <span>{label}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* User Profile Section */}
        <div className="flex items-center justify-between px-4 py-3 bg-blue">
          <div className="flex items-center">
            <Image
              src={profilePicture}
              alt="User Avatar"
              height={40}
              width={40}
              className="rounded-full"
            />
            <div className="ml-2">
              <p className="text-sm font-medium">Hilaire Sh</p>
              <p className="text-sm text-blue-300">hilaire@uidesign</p>
            </div>
          </div>
          <Link href="/profile">
            <div className="text-blue-300 hover:text-white transition duration-200 cursor-pointer">
              →
            </div>
          </Link>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Navbar;