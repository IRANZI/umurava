"use client";

import ChallengesAndHackathons from "app/Components/Challenges/challenge";
import Head from "next/head";  // Import Head for SEO

export default function Home() {
  return (
    <>
      
      <div className="flex min-h-screen w-full"> {/* Full width and height for the container */}
        <ChallengesAndHackathons />
      </div>
    </>
  );
}