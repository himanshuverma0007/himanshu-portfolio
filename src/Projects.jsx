import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-800 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Some of my featured work and projects.
          </p>
        </div>

        {/* Project Card */}



        {/* Booktopia Project */}
<div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300 mt-10">

  <img
    src="/Booktopia.png"
    alt="Booktopia"
    className="w-full h-[350px] object-cover"
  />

  <div className="p-8">
    <h3 className="text-3xl font-bold text-cyan-400 mb-4">
      Booktopia
    </h3>

    <p className="text-gray-300 leading-7 mb-6">
      Designed and developed a full-stack bookstore with secure
      user authentication, role-based admin controls, and comprehensive
      book management features. Implemented functionalities including
      shopping cart, favourites, order processing, and user order history.
      Built a seamless and user-friendly interface that provides an
      engaging experience for browsing and purchasing books online.
    </p>

    <div className="flex flex-wrap gap-3 mb-6">
      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
        React JS
      </span>

      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
        Node.js
      </span>

      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
        Express.js
      </span>

      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
        MongoDB
      </span>

      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
        Tailwind CSS
      </span>
    </div>

             <a
              href=" https://booktopia-frontend-7f5z.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              View Project
            </a>
  </div>
  {/* ImageHub Project */}
<div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300 mt-10">

  <img
    src="/imagehub.png"
    alt="ImageHub"
    className="w-full h-[350px] object-cover"
  />

  <div className="p-8">
    <h3 className="text-3xl font-bold text-cyan-400 mb-4">
      ImageHub
    </h3>

    <p className="text-gray-300 leading-7 mb-6">
      Developed a photo-sharing web application that enables users to register,
      manage their profiles, and upload photos seamlessly. The platform
      provides an interactive environment for users to share, explore, and
      discover images while maintaining a user-friendly and responsive
      experience. Implemented features such as user authentication,
      profile management, and secure photo uploads.
    </p>

    <div className="flex flex-wrap gap-3 mb-6">
      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
        Node.js
      </span>

      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
        Express.js
      </span>

      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
        MongoDB
      </span>

      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
        EJS
      </span>

      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
        CSS3
      </span>
    </div>

  <a
  href="https://image-hub-s3do.onrender.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition"
>
  View Project
</a>
  </div>
</div>

{/* Wanderlust Project */}
<div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300 mt-10">

  <img
    src="/wanderlust.png"
    alt="Wanderlust"
    className="w-full h-[350px] object-cover"
  />

  <div className="p-8">
    <h3 className="text-3xl font-bold text-cyan-400 mb-4">
      Wanderlust - Listing Management Platform
    </h3>

    <p className="text-gray-300 leading-7 mb-6">
      Developed a full-stack Listing Management System that allows users
      to create, view, edit, and delete listings with images, pricing,
      location, and country information. Built using EJS for dynamic
      server-side rendering, Node.js and Express.js for backend
      development, MongoDB for database management, and Tailwind CSS
      for a responsive user interface. Implemented complete CRUD
      operations and designed an intuitive experience for managing
      listings efficiently.
    </p>

    <div className="flex flex-wrap gap-3 mb-6">
      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
        EJS
      </span>

      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
        Node.js
      </span>

      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
        Express.js
      </span>

      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
        MongoDB
      </span>

      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
        Tailwind CSS
      </span>
    </div>

    <a
      href=" https://wanderlust-5qtq.onrender.com/listings"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition"
    >
      View Project
    </a>
  </div>

</div>

</div>
{/* Course Builder Project */}
<div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300 mt-10">

  <img
    src="/course-builder.png"
    alt="Course Builder"
    className="w-full h-[350px] object-cover"
  />

  <div className="p-8">
    <h3 className="text-3xl font-bold text-cyan-400 mb-4">
      Course Builder
    </h3>

    <p className="text-gray-300 leading-7 mb-6">
      Developed a drag-and-drop course creation platform that enables
      instructors to build and manage courses effortlessly. Implemented
      interactive content blocks such as text, video, quiz, and assignments,
      allowing users to organize modules, reorder content dynamically, and
      edit course materials in real time. Built with a fully responsive
      design, including mobile-optimized bottom-sheet drawers, localStorage
      persistence for data retention, and JSON export functionality for
      seamless course sharing and backup.
    </p>

    <div className="flex flex-wrap gap-3 mb-6">
      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
        React.js
      </span>

      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
        @dnd-kit
      </span>

      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
        JavaScript
      </span>

      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
        LocalStorage
      </span>

      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
        Responsive Design
      </span>
    </div>

    <a
      href="https://course-builder-plum.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition"
    >
      View Project
    </a>
  </div>
</div>

<div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300 mt-10">

  <img
    src="/resume-builder.png"
    alt="Course Builder"
    className="w-full h-[350px] object-cover"
  />

  <div className="p-8">
    <h3 className="text-3xl font-bold text-cyan-400 mb-4">
      Resume-Builder
    </h3>

    <p className="text-gray-300 leading-7 mb-6">
    A React-based resume builder that gives users complete control over crafting their resume, with a live preview updating instantly as they type. Supports fully customizable sections for personal information, professional summary, experience, education, projects, skills, certifications, languages, and extra-curricular activities — each toggleable on or off to tailor the resume to any job application. Built with Zustand for centralized, predictable state management across dozens of dynamic form fields, and integrated one-click PDF export using html2pdf.js for instant, print-ready downloads directly from the browser.
    </p>

    <div className="flex flex-wrap gap-3 mb-6">
      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
        React.js
      </span>

      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
          html2pdf.js
      </span>

      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
        JavaScript
      </span>

      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
         Zustand
      </span>

      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
        Responsive Design
      </span>
    </div>

    <a
      href="https://resumebuilder-ten-lime.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition"
    >
      View Project
    </a>
  </div>
</div>


        <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300">

          {/* Project Image */}
          <img
            src="/obys-clone.png"
            alt="OBYS Clone"
            className="w-full h-[350px] object-cover"
          />

          {/* Project Content */}
          <div className="p-8">
            <h3 className="text-3xl font-bold text-cyan-400 mb-4">
              OBYS Clone
            </h3>

            <p className="text-gray-300 leading-7 mb-6">
              This is a fully responsive front-end clone of the OBYS Creative
              Agency website, built to replicate its modern and interactive
              design using HTML5, CSS3, JavaScript, GSAP, and Locomotive Scroll.
              The project focuses on smooth animations, immersive scrolling
              effects, and a visually appealing user experience while
              maintaining responsiveness across different devices.
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
                HTML5
              </span>

              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
                CSS3
              </span>

              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
                JavaScript
              </span>

              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
                GSAP
              </span>

              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
                Locomotive Scroll
              </span>
            </div>

            {/* View Button */}
            <a
              href="https://himanshuvermaobysclone.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;