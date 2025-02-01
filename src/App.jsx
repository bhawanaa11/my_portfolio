

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