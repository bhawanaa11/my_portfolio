import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

function Signup() {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.find((user) => user.email === email)) {
      alert("This email is already registered. Please login.");
      navigate("/login");
      return;
    }

    const newUser = { email, password, role };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    setUser(newUser); // update context

    alert(`Signup successful! Logged in as ${role}.`);
    navigate("/dashboard");
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
      textAlign: "center",
      padding: "0 20px",
    },
    card: {
      backgroundColor: "#F2B7C6",
      padding: "50px 40px",
      borderRadius: "20px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
      width: "400px",
      maxWidth: "90%",
      textAlign: "center",
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
    select: {
      width: "100%",
      padding: "14px 18px",
      margin: "12px 0",
      borderRadius: "10px",
      border: "none",
      backgroundColor: "#DD9296",
      color: "#22031F",
      fontSize: "16px",
      outline: "none",
      cursor: "pointer",
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
        <h2 style={styles.heading}>Sign Up for Style La</h2>
        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSignup}>
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
          <select value={role} onChange={(e) => setRole(e.target.value)} style={styles.select}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
