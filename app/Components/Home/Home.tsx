import ImageCarousel from "./ImageCarousel";
import VideoCarousel from "./Video";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Experience from "./Experience";
import Achievement from "./Achievement";
import Skills from "./Skills";
import { Gain } from "./Gain";
import { GetStarted } from "./GetStarted";
import UnlockSkill from "./UnlocSkill";
import Challenge from "./Challenge";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white overflow-hidden">
        <Header />
        <Hero className="transition-transform duration-500 ease-in-out transform hover:scale-105" />
        <Experience className="transition-transform duration-500 ease-in-out transform hover:scale-105" />
        <Achievement className="transition-transform duration-500 ease-in-out transform hover:scale-105" />
        <Skills className="transition-transform duration-500 ease-in-out transform hover:scale-105" />

        <div className="flex items-center justify-center h-screen bg-white-100 transition-transform duration-500 ease-in-out transform hover:scale-105">
          <ImageCarousel />
        </div>
        <Challenge/>

        <Gain className="transition-transform duration-500 ease-in-out transform hover:scale-105" />
        <div className="flex flex-col items-center transition-transform duration-500 ease-in-out transform hover:scale-105">
          <VideoCarousel />
        </div>
        <GetStarted className="transition-transform duration-500 ease-in-out transform hover:scale-105" />

        <UnlockSkill className="transition-transform duration-500 ease-in-out transform hover:scale-105" />

        <Footer className="transition-transform duration-500 ease-in-out transform hover:scale-105" />
      </div>
    </>
  );
};

export default Home;