import { memo } from "react";
import backgroundLittleImg from "../../assets/images/backgroundLittleimage.png";
import heroImages from "../../assets/images/heroImages.png"

const Background = () => {
  const backgroundText = {
    title: "Empowering Innovation with Cutting-Edge Data Solutions",
    description:
      "Transforming businesses through AI, analytics, and cloud technologies. Partner with Next Generation Digital Architects to unlock the full potential of your data and drive sustainable growth.",
  };

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImages})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020712]/90 to-[#020712]/90" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-noise.png')] opacity-20" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left */}
        <div className="md:w-1/2 space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Empowering Innovation with Cutting-Edge Data Solutions
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Transforming businesses through AI, analytics, and cloud technologies. Partner with Next Generation Digital Architects to unlock the full potential of your data and drive sustainable growth.
          </p>
          <button className="mt-4 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md shadow hover:bg-yellow-500 transition">
            Get Started
          </button>
        </div>

        {/* Right */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src={backgroundLittleImg}
            alt="3D Image"
            className="w-[450px] md:w-[550px] drop-shadow-2xl"
          />
        </div>
      </div>
    </div>

  );
};

export default memo(Background);
