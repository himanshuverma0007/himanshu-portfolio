import React from "react";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import {
  SiExpress,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiCplusplus,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      level: 90,
      icon: <FaHtml5 className="text-orange-500 text-3xl" />,
    },
    {
      name: "CSS3",
      level: 88,
      icon: <FaCss3Alt className="text-blue-500 text-3xl" />,
    },
    {
      name: "JavaScript",
      level: 85,
      icon: <FaJs className="text-yellow-400 text-3xl" />,
    },
    {
      name: "React JS",
      level: 82,
      icon: <FaReact className="text-cyan-400 text-3xl" />,
    },
    {
      name: "Tailwind CSS",
      level: 85,
      icon: <SiTailwindcss className="text-sky-400 text-3xl" />,
    },
    {
      name: "Node.js",
      level: 75,
      icon: <FaNodeJs className="text-green-500 text-3xl" />,
    },
    {
      name: "Express.js",
      level: 72,
      icon: <SiExpress className="text-white text-3xl" />,
    },
    {
      name: "MongoDB",
      level: 70,
      icon: <SiMongodb className="text-green-400 text-3xl" />,
    },
    {
      name: "MySQL",
      level: 80,
      icon: <SiMysql className="text-blue-400 text-3xl" />,
    },
    {
      name: "C++",
      level: 85,
      icon: <SiCplusplus className="text-blue-500 text-3xl" />,
    },
    {
      name: "Python",
      level: 78,
      icon: <FaPython className="text-yellow-400 text-3xl" />,
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Technologies and tools I work with.
          </p>
        </div>

        {/* Skills Card */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index}>
                {/* Skill Name & Percentage */}
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    {skill.icon}
                    <span className="font-semibold text-lg">
                      {skill.name}
                    </span>
                  </div>

                  <span className="text-cyan-400 font-bold">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className="h-4 bg-cyan-400 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;