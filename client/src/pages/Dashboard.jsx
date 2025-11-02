import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [totalClothes, setTotalClothes] = useState(0);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const clothes = JSON.parse(localStorage.getItem("clothes") || "[]");
    setTotalClothes(clothes.length);

    // get logged in user role
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUserRole(loggedInUser.role);
    }
  }, []);

  const styles = {
    wrapper: {
      width: "100vw",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "60px 20px",
      background: "linear-gradient(135deg, #22031F, #CC76A1)",
      fontFamily: "'Arial', sans-serif",
      color: "#F2B7C6",
      textAlign: "center",
      boxSizing: "border-box",
    },
    content: {
      flex: 1,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    heading: { fontSize: "40px", marginBottom: "10px" },
    subheading: { fontSize: "22px", marginBottom: "40px" },
    stats: {
      display: "flex",
      justifyContent: "center",
      gap: "25px",
      flexWrap: "wrap",
      width: "100%",
      maxWidth: "1000px",
      marginBottom: "40px",
    },
    statCard: {
      backgroundColor: "#F2B7C6",
      color: "#22031F",
      padding: "35px 25px",
      borderRadius: "20px",
      minWidth: "200px",
      flex: "1 1 200px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
      transition: "0.3s",
    },
    statTitle: { fontSize: "20px", marginBottom: "15px", fontWeight: "600" },
    statValue: { fontSize: "28px", fontWeight: "700" },
    actions: {
      display: "flex",
      justifyContent: "center",
      gap: "25px",
      flexWrap: "wrap",
      width: "100%",
      maxWidth: "700px",
      marginTop: "auto",
    },
    button: {
      padding: "14px 28px",
      borderRadius: "12px",
      border: "none",
      fontWeight: "600",
      fontSize: "16px",
      cursor: "pointer",
      transition: "0.3s",
      boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    },
    viewBtn: { backgroundColor: "#DD9296", color: "#22031F" },
    addBtn: { backgroundColor: "#22031F", color: "#F2B7C6" },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.content}>
        <h1 style={styles.heading}>🧾 Dashboard</h1>
        <p style={styles.subheading}>
          Welcome to  <strong>Style La</strong> 👗
        </p>

        <div style={styles.stats}>
          {["Total Clothes", "Categories", "Pending Orders"].map((title, i) => {
            const value =
              title === "Total Clothes"
                ? totalClothes
                : title === "Categories"
                ? "3 (Men, Women, Kids)"
                : 2;
            return (
              <div
                key={i}
                style={styles.statCard}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <h3 style={styles.statTitle}>{title}</h3>
                <p style={styles.statValue}>{value}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div style={styles.actions}>
        <Link to="/clothes">
          <button
            style={{ ...styles.button, ...styles.viewBtn }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#CC76A1";
              e.currentTarget.style.color = "#22031F";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#DD9296";
              e.currentTarget.style.color = "#22031F";
            }}
          >
            👕 View Clothes
          </button>
        </Link>

        {/* ✅ Only show this if user is admin */}
        {userRole === "admin" && (
          <Link to="/addclothes">
            <button
              style={{ ...styles.button, ...styles.addBtn }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#CC76A1";
                e.currentTarget.style.color = "#22031F";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#22031F";
                e.currentTarget.style.color = "#F2B7C6";
              }}
            >
              ➕ Add New Cloth
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
