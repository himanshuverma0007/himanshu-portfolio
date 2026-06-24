import React from "react";
import profilePic from "./assets/ghibli-profile.png";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-800 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Get to know more about me and my journey.
          </p>
        </div>

        {/* Content */}
      <div className="grid md:grid-cols-2 gap-12 items-stretch">

  {/* Left Side - Image */}
<div className="h-full flex items-center justify-center">
  <motion.img
    src={profilePic}
    alt="Himanshu Verma"
    className="w-full h-full object-cover rounded-2xl border-4 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)]"
    animate={{
      y: [0, -15, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</div>

  {/* Right Side - Content */}
  <div className="flex flex-col">
    <h3 className="text-3xl font-semibold mb-4">
      Hi, I'm <span className="text-cyan-400">Himanshu Verma</span>
    </h3>

    <p className="text-gray-300 leading-8 mb-6">
      I am a Btech in Computer Science & Engineering graduate passionate about
      web development and modern technologies.
    </p>

    {/* Information Cards */}
    <div className="grid md:grid-cols-2 gap-6 flex-grow">

      <div className="bg-gray-900 p-5 rounded-xl">
        <h4 className="text-cyan-400 font-semibold mb-3">
          Personal Information
        </h4>
        
        <p>Hi, i m Himanshu verma. i am from Uttar Pardesh but born and brought up in Chandigarh. I am belongs to a nuclear family including me and my parents, yes i am a single child. I loves to play cricket, watching anime and content creation in my free time.</p>
      </div>

      <div className="bg-gray-900 p-5 rounded-xl">
        <h4 className="text-cyan-400 font-semibold mb-3">
          Academic Information
        </h4>

        
        <p>Name: Himanshu Verma</p>
        <p>Course: B.Tech CSE</p>
        <p>session:2021-2025</p>
        <p>CGPA: 8.04</p>

        <br/>

        <p>12th - 75%</p>
        <p>session:2020-2021</p>
        <p>Govt. Model Senior Secondary School</p>
        <p>Sector 40-B, Chandigarh</p>

        <br />

        <p>10th - 78%</p>
        <p>session:2018-2019</p>
        <p>Sharda Sarvhitkari School</p>
        <p>Sector 40-D, Chandigarh</p>
      </div>

    </div>
  </div>

</div>

             </div>
    </section>
  );
};

export default About;