// import React from 'react';

// const App = () => {
//   const projects = [
//     { title: 'Project 1', description: 'A responsive web application built with React', tech: 'React, CSS' },
//     { title: 'Project 2', description: 'E-commerce platform with payment integration', tech: 'Node.js, MongoDB' },
//     { title: 'Project 3', description: 'Mobile-first landing page design', tech: 'HTML, CSS' },
//   ];

//   const containerStyle = {
//     backgroundColor: '#f4eefd',
//     minHeight: '100vh',
//     fontFamily: 'Arial, sans-serif',
//     color: '#4a4a4a',
//   };

//   const navStyle = {
//     padding: '20px',
//     backgroundColor: 'rgba(244, 238, 253, 0.9)',
//     position: 'fixed',
//     width: '100%',
//     top: 0,
//     backdropFilter: 'blur(10px)',
//   };

//   const cardStyle = {
//     backgroundColor: 'white',
//     borderRadius: '10px',
//     padding: '20px',
//     boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Navigation */}
//       <nav style={navStyle}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
//           <h1 style={{ color: '#6a57b5', margin: 0 }}>Bhawana Poudel</h1>
//           <div style={{ display: 'flex', gap: '30px' }}>
//             <a href="#projects" style={{ color: '#6a57b5', textDecoration: 'none' }}>Projects</a>
//             <a href="#contact" style={{ color: '#6a57b5', textDecoration: 'none' }}>Contact</a>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section style={{ 
//         padding: '150px 20px 80px', 
//         textAlign: 'center',
//         maxWidth: '800px',
//         margin: '0 auto'
//       }}>
//         <h2 style={{ fontSize: '2.5em', color: '#6a57b5', marginBottom: '20px' }}>
//           Frontend Developer
//         </h2>
//         <p style={{ fontSize: '1.2em', lineHeight: '1.6' }}>
//           Creating clean and user-friendly web experiences
//         </p>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
//         <h3 style={{ color: '#6a57b5', textAlign: 'center', fontSize: '2em' }}>Projects</h3>
//         <div style={{ 
//           display: 'grid', 
//           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
//           gap: '30px',
//           padding: '40px 0'
//         }}>
//           {projects.map((project, index) => (
//             <div key={index} style={cardStyle}>
//               <h4 style={{ color: '#6a57b5', margin: '0 0 15px 0' }}>{project.title}</h4>
//               <p style={{ margin: '0 0 10px 0' }}>{project.description}</p>
//               <p style={{ fontSize: '0.9em', color: '#888' }}>{project.tech}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" style={{ padding: '60px 20px', maxWidth: '600px', margin: '0 auto' }}>
//         <div style={cardStyle}>
//           <h3 style={{ color: '#6a57b5', textAlign: 'center', marginBottom: '30px' }}>Contact Me</h3>
//           <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//             <input
//               type="text"
//               placeholder="Name"
//               style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
//             />
//             <textarea
//               placeholder="Message"
//               rows="4"
//               style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
//             ></textarea>
//             <button style={{
//               backgroundColor: '#6a57b5',
//               color: 'white',
//               padding: '12px',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer'
//             }}>
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer style={{ 
//         textAlign: 'center', 
//         padding: '40px 20px',
//         marginTop: '60px',
//         borderTop: '1px solid #e6e6e6'
//       }}>
//         <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
//           <a href="mailto:your@email.com" style={{ color: '#6a57b5' }}>📧 Email</a>
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: '#6a57b5' }}>🐱 GitHub</a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#6a57b5' }}>💼 LinkedIn</a>
//         </div>
//         <p style={{ color: '#888' }}>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;

import React from 'react'


function Portfolio() {
  // Theme colors
  const theme = {
    tiffanyBlue: '#4C3B4D',
    teaGreen: '#FFEEDB',
    white: '#FFFFFF',
    textDark: '#ADA8B6'
  };

  // Content data
  const content = {
    name: 'Bhawana Poudel',
    title: 'Web Developer',
    intro: `Passionate web developer with expertise in creating beautiful and functional websites.
            I specialize in React development and user-centric design. Let's create something amazing together!`,
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'UI/UX', 'Git'],
    contacts: [
      {  name: 'GitHub', link: 'https://github.com/yourusername' },
      {  name: 'LinkedIn', link: 'https://linkedin.com/in/yourprofile' },
      {  name: 'Email', link: 'mailto:you@example.com' },
      {  name: 'Resume', link: '/resume.pdf' }
    ]
  };

  // CSS styles
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.white
    },
    header: {
      backgroundColor: theme.tiffanyBlue,
      padding: '40px 20px',
      textAlign: 'center',
      color: theme.white
    },
    section: {
      padding: '40px 20px',
      maxWidth: '800px',
      margin: '0 auto',
      width: '100%'
    },
    skillCard: {
      backgroundColor: theme.teaGreen,
      padding: '15px 25px',
      borderRadius: '8px',
      textAlign: 'center',
      fontWeight: '600'
    },
    contactLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '12px 25px',
      borderRadius: '30px',
      backgroundColor: theme.tiffanyBlue,
      color: theme.white,
      textDecoration: 'none',
      transition: 'transform 0.3s ease'
    },
    footer: {
      backgroundColor: theme.tiffanyBlue,
      padding: '20px',
      textAlign: 'center',
      color: theme.white,
      marginTop: 'auto'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{content.name}</h1>
        <p style={{ fontSize: '1.2rem' }}>{content.title}</p>
      </header>

      {/* About Section */}
      <section style={styles.section}>
        <h2 style={{ color: theme.tiffanyBlue, marginBottom: '20px' }}>About Me</h2>
        <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>{content.intro}</p>
      </section>

      {/* Skills Section */}
      <section style={styles.section}>
        <h2 style={{ color: theme.tiffanyBlue, marginBottom: '20px' }}>Skills</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '15px'
        }}>
          {content.skills.map((skill, index) => (
            <div key={index} style={styles.skillCard}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.section}>
        <h2 style={{ color: theme.tiffanyBlue, marginBottom: '20px' }}>Contact Me</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          {content.contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.contactLink}
            >
              {contact.icon}
              <span>{contact.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} {content.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;