import React from 'react';

const App = () => {
  const projects = [
    { title: 'Project 1', description: 'A responsive web application built with React', tech: 'React, CSS' },
    { title: 'Project 2', description: 'E-commerce platform with payment integration', tech: 'Node.js, MongoDB' },
    { title: 'Project 3', description: 'Mobile-first landing page design', tech: 'HTML, CSS' },
  ];

  const containerStyle = {
    backgroundColor: '#f4eefd',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    color: '#4a4a4a',
  };

  const navStyle = {
    padding: '20px',
    backgroundColor: 'rgba(244, 238, 253, 0.9)',
    position: 'fixed',
    width: '100%',
    top: 0,
    backdropFilter: 'blur(10px)',
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  };

  return (
    <div style={containerStyle}>
      {/* Navigation */}
      <nav style={navStyle}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
          <h1 style={{ color: '#6a57b5', margin: 0 }}>Bhawana Poudel</h1>
          <div style={{ display: 'flex', gap: '30px' }}>
            <a href="#projects" style={{ color: '#6a57b5', textDecoration: 'none' }}>Projects</a>
            <a href="#contact" style={{ color: '#6a57b5', textDecoration: 'none' }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ 
        padding: '150px 20px 80px', 
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{ fontSize: '2.5em', color: '#6a57b5', marginBottom: '20px' }}>
          Frontend Developer
        </h2>
        <p style={{ fontSize: '1.2em', lineHeight: '1.6' }}>
          Creating clean and user-friendly web experiences
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h3 style={{ color: '#6a57b5', textAlign: 'center', fontSize: '2em' }}>Projects</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px',
          padding: '40px 0'
        }}>
          {projects.map((project, index) => (
            <div key={index} style={cardStyle}>
              <h4 style={{ color: '#6a57b5', margin: '0 0 15px 0' }}>{project.title}</h4>
              <p style={{ margin: '0 0 10px 0' }}>{project.description}</p>
              <p style={{ fontSize: '0.9em', color: '#888' }}>{project.tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '60px 20px', maxWidth: '600px', margin: '0 auto' }}>
        <div style={cardStyle}>
          <h3 style={{ color: '#6a57b5', textAlign: 'center', marginBottom: '30px' }}>Contact Me</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input
              type="text"
              placeholder="Name"
              style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
            />
            <input
              type="email"
              placeholder="Email"
              style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
            />
            <textarea
              placeholder="Message"
              rows="4"
              style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
            ></textarea>
            <button style={{
              backgroundColor: '#6a57b5',
              color: 'white',
              padding: '12px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '40px 20px',
        marginTop: '60px',
        borderTop: '1px solid #e6e6e6'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
          <a href="mailto:your@email.com" style={{ color: '#6a57b5' }}>📧 Email</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: '#6a57b5' }}>🐱 GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#6a57b5' }}>💼 LinkedIn</a>
        </div>
        <p style={{ color: '#888' }}>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;