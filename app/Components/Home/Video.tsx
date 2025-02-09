"use client";

import { useState } from "react";

interface VideoProps {
  className?: string;
}

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Manzi Jack",
    description: "Product Designer, Kigali",
  },
  {
    id: "9bZkp7q19f0",
    title: "Manzi Jack",
    description: "Product Designer, Kigali",
  },
  {
    id: "3JZ_D3ELwOQ",
    title: "Manzi Jack",
    description: "Product Designer, Kigali",
  },

  {
    id: "3JZ_D3ELwOQ",
    title: "Manzi Jack",
    description: "Product Designer, Kigali",
  },

  {
    id: "3JZ_D3ELwOQ",
    title: "Manzi Jack",
    description: "Product Designer, Kigali",
  },
  {
    id: "3JZ_D3ELwOQ",
    title: "Manzi Jack",
    description: "Product Designer, Kigali",
  },
];

const VideoCarousel: React.FC<VideoProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videosPerSlide = 3;
  const totalSlides = Math.ceil(videos.length / videosPerSlide);

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">
        Users are in Love with Skills
        <br /> Challenges Program
      </h2>
      <p className="mb-24">
        See what our clients say about working with us. Their success
        <br /> speaks for our dedication and expertise.
      </p>

      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="flex-shrink-0 w-full flex">
              {videos
                .slice(
                  slideIndex * videosPerSlide,
                  slideIndex * videosPerSlide + videosPerSlide
                )
                .map((video) => (
                  <div
                    key={video.id}
                    className={`flex-shrink-0 w-1/3 h-80 rounded-lg border border-gray-300 p-4 flex flex-col bg-white mx-2`}
                  >
                    <div className="relative w-full h-full bg-customBlue rounded-lg overflow-hidden">
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="absolute inset-0 flex justify-center items-center">
                          <div className="w-16 h-16 bg-gray-200 rounded-full flex justify-center items-center shadow-lg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 fill-current text-white"
                              viewBox="0 0 24 24"
                            >
                              <path d="M7 6v12l10-6z"></path>
                            </svg>
                          </div>
                        </div>
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${video.id}`}
                          title={video.title}
                          className="rounded-lg opacity-0"
                          allowFullScreen
                        ></iframe>
                      </a>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="w-8 h-8 bg-customBlue rounded-full mr-2 mt-2"></div>
                      <div>
                        <h3 className="text-green-800 font-bold">
                          {video.title}
                        </h3>
                        <p className="text-gray-300">{video.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-customBlue" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
