import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App"; // Make sure your App.js provides UserContext

function Login() {
  const { setUser } = useContext(UserContext); // Update context on login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
      navigate("/dashboard");
    }
  }, [navigate, setUser]);

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setUser(user); // update context
      navigate("/dashboard");
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

  const styles = {
    wrapper: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #22031F, #CC76A1)",
      fontFamily: "'Arial', sans-serif",
    },
    card: {
      backgroundColor: "#F2B7C6",
      padding: "50px 40px",
      borderRadius: "20px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
      textAlign: "center",
      width: "400px",
      maxWidth: "90%",
    },
    heading: {
      color: "#22031F",
      marginBottom: "30px",
      fontSize: "28px",
      fontWeight: "600",
    },
    input: {
      width: "100%",
      padding: "14px 18px",
      margin: "12px 0",
      borderRadius: "10px",
      border: "none",
      backgroundColor: "#DD9296",
      color: "#22031F",
      fontSize: "16px",
      outline: "none",
      transition: "0.3s",
    },
    button: {
      width: "100%",
      padding: "14px 18px",
      marginTop: "20px",
      backgroundColor: "#22031F",
      color: "#F2B7C6",
      border: "none",
      borderRadius: "10px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "0.3s",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Login to Style La</h2>
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
