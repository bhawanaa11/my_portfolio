// import React from "react";
// import img1 from "./images/bhawa.jpg"

// const App = () => {
//   const skills = ["HTML", "CSS", "JavaScript", "React", "Git"];
//   const projects = [
//     {
//       title: "Project 1",
//       description: "A responsive website built with HTML/CSS",
//       image: "/project1.jpg",
//     },
//     {
//       title: "Project 2",
//       description: "React-based task management app",
//       image: "/project2.jpg",
//     },
//   ];

//   return (
//     <div className="font-sans text-white min-h-screen bg-[#011C27] flex flex-col items-center">
//       {/* Header */}
//       <header className="w-full text-center py-6">
//         <h1 className="text-4xl font-bold text-[#F5E6E8]">Bhawana Poudel</h1>
//         <p className="text-lg text-[#D5C6E0]">Full-stack Developer</p>
//         <nav className="mt-4">
//           <a href="#skills" className="mx-4 text-[#AAA1C8] hover:text-[#F5E6E8] transition duration-300">
//             Skills
//           </a>
//           <a href="#projects" className="mx-4 text-[#AAA1C8] hover:text-[#F5E6E8] transition duration-300">
//             Projects
//           </a>
//           <a href="#contact" className="mx-4 text-[#AAA1C8] hover:text-[#F5E6E8] transition duration-300">
//             Contact
//           </a>
//         </nav>
//       </header>

//       {/* Main Content Container */}
//       <div className="w-full max-w-4xl px-6">
//         {/* Introduction */}
//         <section className="text-center p-8 rounded-lg bg-[#AAA1C8] shadow-lg">
//           <img
//             src={img1}
//             alt="Profile"
//             className="w-32 h-32 rounded-full mx- border-4 border-[#AAA1C8] shadow-md"
//           />
//           <h2 className="text-3xl font-semibold text-[#192A51] mt-4">Hi, I'm Bhawana</h2>
//           <p className="text-lg text-[#192A51]">
//             A passionate full-stack developer with 2 years of experience in creating web interfaces.
//           </p>
//         </section>

//         {/* Skills */}
//         <section id="skills" className="mt-8 p-8 rounded-lg bg-[#AAA1C8] text-[#192A51] shadow-lg">
//           <h2 className="text-2xl font-bold text-center mb-6">Skills</h2>
//           <div className="flex flex-wrap justify-center gap-4">
//             {skills.map((skill, index) => (
//               <span key={index} className="px-6 py-2 bg-[#F5E6E8] text-[#192A51] hover:border-[#011C27]  rounded-full shadow-md hover:bg-[#D5C6E0] transition duration-300">
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </section>

//         {/* Projects */}
//         <section id="projects" className="mt-8 p-8  bg-[#AAA1C8] text-white shadow-lg hover:border-blue-400 hover:shadow-blue-400 hover:shadow-lg transition duration-300 px-4 py-2 rounded-md">
//           <h2 className="text-2xl font-bold text-center text-[#192A51] mb-6">Projects</h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             {projects.map((project, index) => (
//               <div key={index} className="bg-[#F5E6E8] text-[#192A51] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover rounded-lg"
//                 />
//                 <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
//                 <p>{project.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Contact */}
//         <section id="contact" className="mt-8 p-8 rounded-lg bg-[#AAA1C8] text-[#192A51] shadow-lg">
//           <h2 className="text-2xl font-bold text-center text-[#192A51] mb-6">Get in Touch</h2>
//           <div className="max-w-lg mx-auto">
//             <form className="flex flex-col gap-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="p-3 rounded-md border border-[#D5C6E0] bg-[#F5E6E8] focus:ring-2 focus:ring-[#192A51] transition"
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="p-3 rounded-md border border-[#D5C6E0] bg-[#F5E6E8] focus:ring-2 focus:ring-[#192A51] transition"
//               />
//               <textarea
//                 placeholder="Your Message"
//                 rows="5"
//                 className="p-3 rounded-md border border-[#D5C6E0] bg-[#F5E6E8] focus:ring-2 focus:ring-[#192A51] transition"
//               ></textarea>
//               <button className="py-3 bg-[#192A51] text-white font-semibold rounded-md hover:bg-[#F5E6E8] hover:text-[#192A51] transition duration-300 shadow-md">
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </section>
//       </div>

//       {/* Footer */}
//       <footer className="w-full text-center py-6 mt-8 ">
//         <div className="mb-4 justify-between">
//           <a href="https://github.com/bhawanaa11" className="px-6 py-2 bg-[#F5E6E8] text-[#192A51] hover:border-[#011C27]  rounded-full shadow-md hover:bg-[#D5C6E0] transition duration-300">
//             GitHub
//           </a>
//           <a href="https://linkedin.com" className="px-6 py-2 bg-[#F5E6E8] text-[#192A51] hover:border-[#011C27]  rounded-full shadow-md hover:bg-[#D5C6E0] transition duration-300">
//             LinkedIn
//           </a>
//           <a href="https://fiverr.com/bhawanapoudel" className="px-6 py-2 bg-[#F5E6E8] text-[#192A51] hover:border-[#011C27]  rounded-full shadow-md hover:bg-[#D5C6E0] transition duration-300">
//           Fiverr
//           </a>
//         </div>
//         <p className="text-[#D5C6E0]">© 2023 Bhawana Poudel. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;




import React, { useState } from "react";
import img1 from "./images/bhawa.jpg";

/* Royal blue + gray palette
   royal   #1E3FAE   deep   #14296F   sky   #DCE4FA
   ink     #1F2430   slate  #5B6475   mist  #ECEEF2   line #D3D7DF */

const disciplines = [
  {
    title: "MERN Developer",
    summary: "Full-stack web apps from database to interface.",
    tags: ["MongoDB", "Express", "React", "Node.js", "REST APIs", "Git"],
    level: 85,
  },
  {
    title: "UI/UX Design",
    summary: "Clear, usable interfaces designed around real people.",
    tags: ["Figma", "Wireframing", "Prototyping", "User flows", "Design systems"],
    level: 80,
  },
  {
    title: "SEO",
    summary: "Getting the right pages found by the right searchers.",
    tags: ["Keyword research", "On-page SEO", "Technical audits", "Link building"],
    level: 85,
  },
  {
    title: "Digital Marketing",
    summary: "Campaigns that bring in visitors and turn them into clients.",
    tags: ["Social media", "Google Ads", "Email campaigns", "Analytics"],
    level: 80,
  },
];

const projects = [
  {
    title: "Responsive Business Website",
    description: "A fast, mobile-first website built with HTML and CSS.",
    stack: "HTML · CSS · SEO",
    image: "/project1.jpg",
  },
  {
    title: "Task Management App",
    description: "A React-based app for creating, tracking and finishing tasks.",
    stack: "React · Node.js · MongoDB",
    image: "/project2.jpg",
  },
  {
    title: "Brand Growth Campaign",
    description: "Search and social campaign with on-page SEO improvements.",
    stack: "SEO · Google Ads · Analytics",
    image: "/project3.jpg",
  },
];

const links = [
  { label: "GitHub", href: "https://github.com/bhawanaa11" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Fiverr", href: "https://fiverr.com/bhawanapoudel" },
];

const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const App = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // Replace with your backend / EmailJS / Formspree call.
    console.log("Message:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const field =
    "w-full rounded-lg border border-[#D3D7DF] bg-white px-4 py-3 text-[#1F2430] placeholder:text-[#5B6475] outline-none focus:border-[#1E3FAE] focus:ring-2 focus:ring-[#1E3FAE]/25 transition";

  return (
    <div className="font-body min-h-screen bg-[#ECEEF2] text-[#1F2430] lg:flex">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&family=Public+Sans:wght@400;500;600&display=swap');
        .font-body { font-family: 'Public Sans', system-ui, sans-serif; }
        .font-display { font-family: 'Bricolage Grotesque', 'Public Sans', sans-serif; }
        html { scroll-behavior: smooth; }
        @keyframes bar-grow { from { width: 0; } }
        .bar { animation: bar-grow 1.1s ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .bar { animation: none; }
        }
      `}</style>

      {/* Sidebar */}
      <aside className="bg-[#1E3FAE] text-white lg:fixed lg:inset-y-0 lg:left-0 lg:w-80 lg:overflow-y-auto">
        <div className="flex flex-col items-center px-8 py-10 lg:min-h-full lg:justify-between">
          <div className="flex flex-col items-center text-center">
            <img
              src={img1}
              alt="Bhawana Poudel"
              className="h-36 w-36 rounded-full border-4 border-white/90 object-cover shadow-lg"
            />
            <h1 className="font-display mt-6 text-3xl font-extrabold leading-tight">
              Bhawana Poudel
            </h1>
            <p className="mt-2 text-[#DCE4FA]">
              MERN developer, UI/UX designer, SEO and digital marketing specialist
            </p>

            <nav className="mt-8 flex w-full flex-wrap justify-center gap-2 lg:flex-col lg:gap-1">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="rounded-lg px-4 py-2 font-medium text-[#DCE4FA] transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  {n.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/40 px-4 py-1.5 text-sm font-medium transition hover:bg-white hover:text-[#14296F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* Content */}
      <main className="w-full lg:ml-80">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:px-12 lg:py-16">
          {/* About */}
          <section id="about" className="scroll-mt-8">
            <h2 className="font-display max-w-2xl text-4xl font-extrabold leading-tight text-[#14296F] sm:text-5xl">
              I build websites, design how they feel, and make sure people find them.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5B6475]">
              I'm Bhawana, a full-stack developer with 2 years of experience creating web
              interfaces. I combine MERN development and UI/UX design with SEO and digital
              marketing, so a project can go from idea to live site to steady traffic with
              one person.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-lg bg-[#1E3FAE] px-6 py-3 font-semibold text-white shadow-md transition hover:bg-[#14296F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3FAE]"
              >
                Hire me
              </a>
              <a
                href="#projects"
                className="rounded-lg border border-[#5B6475] px-6 py-3 font-semibold text-[#1F2430] transition hover:border-[#1E3FAE] hover:text-[#1E3FAE]"
              >
                See my work
              </a>
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="mt-24 scroll-mt-8">
            <h2 className="font-display text-3xl font-bold text-[#14296F]">What I do</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {disciplines.map((d, i) => (
                <article
                  key={d.title}
                  className={`rounded-2xl p-7 ${
                    i === 0
                      ? "bg-[#14296F] text-white md:col-span-2"
                      : "border border-[#D3D7DF] bg-white"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl font-bold">{d.title}</h3>
                    <span
                      className={`text-sm font-semibold ${
                        i === 0 ? "text-[#DCE4FA]" : "text-[#1E3FAE]"
                      }`}
                    >
                      {d.level}%
                    </span>
                  </div>
                  <p className={`mt-2 ${i === 0 ? "text-[#DCE4FA]" : "text-[#5B6475]"}`}>
                    {d.summary}
                  </p>

                  <div
                    className={`mt-5 h-2 overflow-hidden rounded-full ${
                      i === 0 ? "bg-white/20" : "bg-[#ECEEF2]"
                    }`}
                    role="progressbar"
                    aria-valuenow={d.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${d.title} proficiency`}
                  >
                    <div
                      className={`bar h-full rounded-full ${
                        i === 0 ? "bg-white" : "bg-[#1E3FAE]"
                      }`}
                      style={{ width: `${d.level}%` }}
                    />
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {d.tags.map((t) => (
                      <li
                        key={t}
                        className={`rounded-full px-3 py-1 text-sm ${
                          i === 0
                            ? "bg-white/10 text-white"
                            : "bg-[#DCE4FA] text-[#14296F]"
                        }`}
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="mt-24 scroll-mt-8">
            <h2 className="font-display text-3xl font-bold text-[#14296F]">Selected projects</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="overflow-hidden rounded-2xl border border-[#D3D7DF] bg-white"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-48 w-full bg-[#DCE4FA] object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold">{p.title}</h3>
                    <p className="mt-2 text-[#5B6475]">{p.description}</p>
                    <p className="mt-4 text-sm font-semibold text-[#1E3FAE]">{p.stack}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section
            id="contact"
            className="mt-24 scroll-mt-8 rounded-2xl bg-[#14296F] p-8 text-white sm:p-10"
          >
            <h2 className="font-display text-3xl font-bold">Let's work together</h2>
            <p className="mt-2 max-w-lg text-[#DCE4FA]">
              Tell me about your website, app or campaign. I usually reply within a day.
            </p>

            <form onSubmit={onSubmit} className="mt-8 grid max-w-xl gap-4">
              <label className="grid gap-1.5 text-sm font-medium">
                Your name
                <input
                  className={field}
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  placeholder="Jane Doe"
                />
              </label>
              <label className="grid gap-1.5 text-sm font-medium">
                Your email
                <input
                  className={field}
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  placeholder="jane@example.com"
                />
              </label>
              <label className="grid gap-1.5 text-sm font-medium">
                Your message
                <textarea
                  className={field}
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={onChange}
                  required
                  placeholder="What would you like to build or improve?"
                />
              </label>
              <button
                type="submit"
                className="justify-self-start rounded-lg bg-white px-6 py-3 font-semibold text-[#14296F] transition hover:bg-[#DCE4FA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Send message
              </button>
              {sent && (
                <p role="status" className="text-sm text-[#DCE4FA]">
                  Message sent. Thank you, I'll be in touch soon.
                </p>
              )}
            </form>
          </section>

          <footer className="mt-12 border-t border-[#D3D7DF] pt-6 text-sm text-[#5B6475]">
            © {new Date().getFullYear()} Bhawana Poudel. All rights reserved.
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;