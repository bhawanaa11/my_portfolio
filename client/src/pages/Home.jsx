import React from "react";
import { Link } from "react-router-dom";

function Home() {
  // Inline styles
  const styles = {
    wrapper: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #22031F, #CC76A1)",
      fontFamily: "'Arial', sans-serif",
      textAlign: "center",
      padding: "0 20px",
    },
    heading: {
      color: "#F2B7C6",
      fontSize: "48px",
      fontWeight: "700",
      marginBottom: "20px",
      textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
    },
    paragraph: {
      color: "#F2B7C6",
      fontSize: "20px",
      marginBottom: "40px",
    },
    button: {
      padding: "12px 25px",
      margin: "0 10px 10px 10px",
      borderRadius: "12px",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "600",
      transition: "0.3s",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    },
    loginBtn: {
      backgroundColor: "#22031F",
      color: "#F2B7C6",
    },
    signupBtn: {
      backgroundColor: "#CC76A1",
      color: "#22031F",
    },
    shopBtn: {
      backgroundColor: "#DD9296",
      color: "#22031F",
    },
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}><strong>WELCOME TO STYLE LA</strong> </h1>
      <p style={styles.paragraph}>
        Your one-stop shop for stylish and affordable clothes!
      </p>

      <div>
        <Link to="/login">
          <button
            style={styles.button}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#CC76A1";
              e.currentTarget.style.color = "#22031F";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#22031F";
              e.currentTarget.style.color = "#F2B7C6";
            }}
          >
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button
            style={{ ...styles.button, ...styles.signupBtn }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#DD9296";
              e.currentTarget.style.color = "#22031F";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#CC76A1";
              e.currentTarget.style.color = "#22031F";
            }}
          >
            Sign Up
          </button>
        </Link>

        <Link to="/clothes">
          <button
            style={{ ...styles.button, ...styles.shopBtn }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#CC76A1";
              e.currentTarget.style.color = "#22031F";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#DD9296";
              e.currentTarget.style.color = "#22031F";
            }}
          >
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
