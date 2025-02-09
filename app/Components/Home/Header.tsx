"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleNavigation = (link: string) => {
    setActiveLink(link);
    router.push(link);
    setMenuOpen(false);
  };

  useEffect(() => {
    const path = window.location.pathname;
    setActiveLink(path);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-md cursor-pointer">
      <div className="flex justify-between items-center p-6 md:px-10 lg:px-32">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/Umurava logo.png" alt="Logo" width={150} height={150} />
        </div>

        {/* Hamburger Menu Button (visible on small screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          ref={menuRef}
          className={`fixed top-0 right-0 bg-white h-full w-64 z-40 transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 md:static md:transform-none md:flex md:space-x-6 md:w-auto md:items-center`}
        >
          <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mt-16 md:mt-0 p-6 md:p-0">
            <li
              onClick={() => handleNavigation("/Home-routes/home")}
              className={`block ${
                activeLink === "/home"
                  ? "text-blue-500"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              Home
            </li>
            <li
              onClick={() => handleNavigation("/Home-routes/challenges")}
              className={`block ${
                activeLink === "/challenges"
                  ? "text-blue-500"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              Challenge & Hackathons
            </li>
            <li
              onClick={() => handleNavigation("/Home-routes/learn")}
              className={`block ${
                activeLink === "/learn"
                  ? "text-blue-500"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              For Educational Institutions
            </li>
            <li
              className={`block ${
                activeLink === "about"
                  ? "text-blue-500"
                  : "text-gray-700 hover:text-blue-500"
              }`}
              onClick={() => handleNavigation("/Home-routes/about")}
            >
              About Us
            </li>
            <li
              className={`block ${
                activeLink === "/contact"
                  ? "text-blue-500"
                  : "text-gray-700 hover:text-blue-500"
              }`}
              onClick={() => handleNavigation("/Home-routes/contact")}
            >
              Contact Us
            </li>
          </ul>
          <div className="mt-auto md:hidden p-6">
            <button
              className="w-full bg-blue-950 text-white px-4 py-2 rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              Join the Program
            </button>
          </div>
        </nav>

        {/* Join Button (visible on larger screens) */}
        <div className="hidden md:block">
          <button className="bg-blue-950 text-white px-6 py-2 rounded-lg">
            Join the Program
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
