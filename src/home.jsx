import React from "react";
import myPhoto from "./assets/himanshu.jpg";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Your code */}
       <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5">
      <h1 className="text-2xl font-bold text-cyan-400">
    Portfolio
  </h1>

  {/* Desktop Menu */}
<ul className="hidden md:flex gap-8">
  <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
  <li><a href="#about" className="hover:text-cyan-400">About</a></li>
  <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
<li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
  <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
</ul>
  {/* Mobile Menu Button */}
  <button
    className="md:hidden text-2xl"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <FaTimes /> : <FaBars />}
  </button>
</nav>

{/* Mobile Menu */}
{menuOpen && (
  <div className="md:hidden px-8 pb-4">
    <ul className="flex flex-col gap-4 bg-gray-800 p-4 rounded-lg">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
     <li><a href="#skills">Skills</a></li>
<li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
)}

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col-reverse md:flex-row items-center justify-center px-8 py-20"
      >
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          <TypeAnimation
  sequence={[
    "Hi, I'm Himanshu Verma",
    1000,
  ]}
  wrapper="h2"
  speed={50}
  cursor={true}
  repeat={0}
  className="text-4xl md:text-6xl font-bold"
/>

<div className="mt-6">
  <TypeAnimation
    sequence={[
      2500, // wait for first animation to finish
      "Frontend Developer",
      2000,
      "React JS Developer",
      2000,
      "MERN Stack Developer",
      2000,
      "Software Engineer",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    className="text-xl md:text-2xl text-cyan-400 font-semibold"
  />

  <p className="mt-4 text-gray-300 text-lg">
    Passionate about Web Development, React.js,
    Node.js, MongoDB, MySQL, Tailwind CSS, C++ and Python.
    I enjoy building responsive and user-friendly web applications.
  </p>
</div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
           <a
  href="/Himanshu_verma_resume.pdf"
  download
  className="border border-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition text-center"
>
  Download Resume
</a>

           
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
         <img
          src={myPhoto}
          alt="Himanshu Verma"
          className="w-72 h-72 rounded-full object-cover border-4 border-cyan-400 shadow-lg"
/>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pb-20">
        <div className="bg-gray-800 p-6 rounded-xl text-center">
          <h3 className="text-3xl font-bold text-cyan-400">B.Tech (CSE)</h3>
          <p>Graduate</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl text-center">
          <h3 className="text-3xl font-bold text-cyan-400">7+</h3>
          <p>Technologies Explored</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl text-center">
          <h3 className="text-3xl font-bold text-cyan-400">Continuous</h3>
          <p>Learing and & Improving</p>
        </div>
      </section>
    </div>
    </>
  );
}

export default Home;