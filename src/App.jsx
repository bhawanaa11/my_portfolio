import React from "react";
import img1 from "./images/bhawa.jpg"

const App = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git"];
  const projects = [
    {
      title: "Project 1",
      description: "A responsive website built with HTML/CSS",
      image: "/project1.jpg",
    },
    {
      title: "Project 2",
      description: "React-based task management app",
      image: "/project2.jpg",
    },
  ];

  return (
    <div className="font-sans text-white min-h-screen bg-[#011C27] flex flex-col items-center">
      {/* Header */}
      <header className="w-full text-center py-6">
        <h1 className="text-4xl font-bold text-[#F5E6E8]">Bhawana Poudel</h1>
        <p className="text-lg text-[#D5C6E0]">Full-stack Developer</p>
        <nav className="mt-4">
          <a href="#skills" className="mx-4 text-[#AAA1C8] hover:text-[#F5E6E8] transition duration-300">
            Skills
          </a>
          <a href="#projects" className="mx-4 text-[#AAA1C8] hover:text-[#F5E6E8] transition duration-300">
            Projects
          </a>
          <a href="#contact" className="mx-4 text-[#AAA1C8] hover:text-[#F5E6E8] transition duration-300">
            Contact
          </a>
        </nav>
      </header>

      {/* Main Content Container */}
      <div className="w-full max-w-4xl px-6">
        {/* Introduction */}
        <section className="text-center p-8 rounded-lg bg-[#AAA1C8] shadow-lg">
          <img
            src={img1}
            alt="Profile"
            className="w-32 h-32 rounded-full mx- border-4 border-[#AAA1C8] shadow-md"
          />
          <h2 className="text-3xl font-semibold text-[#192A51] mt-4">Hi, I'm Bhawana</h2>
          <p className="text-lg text-[#192A51]">
            A passionate full-stack developer with 2 years of experience in creating web interfaces.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-8 p-8 rounded-lg bg-[#AAA1C8] text-[#192A51] shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="px-6 py-2 bg-[#F5E6E8] text-[#192A51] hover:border-[#011C27]  rounded-full shadow-md hover:bg-[#D5C6E0] transition duration-300">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-8 p-8  bg-[#AAA1C8] text-white shadow-lg hover:border-blue-400 hover:shadow-blue-400 hover:shadow-lg transition duration-300 px-4 py-2 rounded-md">
          <h2 className="text-2xl font-bold text-center text-[#192A51] mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#F5E6E8] text-[#192A51] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-8 p-8 rounded-lg bg-[#AAA1C8] text-[#192A51] shadow-lg">
          <h2 className="text-2xl font-bold text-center text-[#192A51] mb-6">Get in Touch</h2>
          <div className="max-w-lg mx-auto">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-md border border-[#D5C6E0] bg-[#F5E6E8] focus:ring-2 focus:ring-[#192A51] transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-md border border-[#D5C6E0] bg-[#F5E6E8] focus:ring-2 focus:ring-[#192A51] transition"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="p-3 rounded-md border border-[#D5C6E0] bg-[#F5E6E8] focus:ring-2 focus:ring-[#192A51] transition"
              ></textarea>
              <button className="py-3 bg-[#192A51] text-white font-semibold rounded-md hover:bg-[#F5E6E8] hover:text-[#192A51] transition duration-300 shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-6 mt-8 ">
        <div className="mb-4 justify-between">
          <a href="https://github.com/bhawanaa11" className="px-6 py-2 bg-[#F5E6E8] text-[#192A51] hover:border-[#011C27]  rounded-full shadow-md hover:bg-[#D5C6E0] transition duration-300">
            GitHub
          </a>
          <a href="https://linkedin.com" className="px-6 py-2 bg-[#F5E6E8] text-[#192A51] hover:border-[#011C27]  rounded-full shadow-md hover:bg-[#D5C6E0] transition duration-300">
            LinkedIn
          </a>
          <a href="https://fiverr.com/bhawanapoudel" className="px-6 py-2 bg-[#F5E6E8] text-[#192A51] hover:border-[#011C27]  rounded-full shadow-md hover:bg-[#D5C6E0] transition duration-300">
          Fiverr
          </a>
        </div>
        <p className="text-[#D5C6E0]">© 2023 Bhawana Poudel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
