import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

function Clothes() {
  const { user } = useContext(UserContext);
  const [clothes, setClothes] = useState([]);
  const [notification, setNotification] = useState("");
  const navigate = useNavigate();
  const isAdmin = user?.role === "admin";

  useEffect(() => {
    const storedClothes = JSON.parse(localStorage.getItem("clothes") || "[]");
    setClothes(storedClothes);
  }, []);

  const handleDelete = (index) => {
    const updated = clothes.filter((_, i) => i !== index);
    localStorage.setItem("clothes", JSON.stringify(updated));
    setClothes(updated);
    alert("🗑️ Cloth deleted successfully!");
  };

  const handleAddToCart = (cloth) => {
    if (!user) {
      alert("Please login to add items to your cart!");
      return;
    }

    const cartKey = `cart_${user.email}`;
    const cart = JSON.parse(localStorage.getItem(cartKey) || "[]");

    const existingIndex = cart.findIndex((item) => item.name === cloth.name);
    if (existingIndex !== -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({ ...cloth, quantity: 1 });
    }

    localStorage.setItem(cartKey, JSON.stringify(cart));
    setNotification(`🛒 "${cloth.name}" added to your cart!`);
    setTimeout(() => setNotification(""), 3000);
  };

  const styles = {
    wrapper: {
      minHeight: "100vh",
      width: "100vw",
      background: "linear-gradient(135deg, #22031F, #CC76A1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "90px 20px 40px 20px",
      fontFamily: "'Arial', sans-serif",
      overflowX: "hidden",
      color: "#FFD6E0",
    },
    backButton: {
      position: "fixed",
      top: "80px",
      left: "20px",
      backgroundColor: "#DD9296",
      color: "#22031F",
      border: "none",
      padding: "8px 14px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
      boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
    },
    heading: {
      fontSize: "42px",
      marginBottom: "25px",
      textShadow: "2px 2px #22031F",
    },
    addButton: {
      backgroundColor: "#22031F",
      color: "#F2B7C6",
      padding: "12px 24px",
      borderRadius: "10px",
      border: "none",
      fontWeight: "600",
      cursor: "pointer",
      marginBottom: "30px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
      transition: "0.3s",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: "30px",
      width: "100%",
      maxWidth: "1200px",
    },
    card: {
      width: "100%",
      height: "360px",
      borderRadius: "12px",
      overflow: "hidden",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
      transition: "0.3s",
    },
    imgWrapper: { width: "100%", height: "190px", overflow: "hidden" },
    img: { width: "100%", height: "100%", objectFit: "cover" },
    info: {
      padding: "10px",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    clothName: { fontSize: "16px", fontWeight: "600", textAlign: "center", marginBottom: "5px", color: "#22031F" },
    price: { fontSize: "15px", color: "#CC76A1", marginBottom: "10px" },
    btnGroup: { display: "flex", gap: "6px", padding: "8px", justifyContent: "center" },
    btn: { padding: "6px 10px", fontSize: "13px", borderRadius: "6px", fontWeight: "600", cursor: "pointer", flex: 1, border: "none", transition: "0.3s" },
    editBtn: { backgroundColor: "#F2B7C6", color: "#22031F" },
    deleteBtn: { backgroundColor: "#DD9296", color: "#22031F" },
    cartBtn: { backgroundColor: "#22031F", color: "#F2B7C6" },
    notification: {
      position: "fixed",
      top: "100px",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "#22031F",
      color: "#FFD6E0",
      padding: "12px 20px",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
      fontWeight: "600",
      zIndex: 1000,
      transition: "opacity 0.3s ease-in-out",
    },
  };

  return (
    <div style={styles.wrapper}>
      <button
        style={styles.backButton}
        onClick={() => navigate(-1)}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#F2B7C6")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#DD9296")}
      >
        ⬅ Back
      </button>

      <h2 style={styles.heading}>🛍️ Available Clothes</h2>

      {isAdmin && (
        <Link to="/addclothes">
          <button
            style={styles.addButton}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#DD9296";
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

      {notification && <div style={styles.notification}>{notification}</div>}

      <div style={styles.grid}>
        {clothes.length === 0 ? (
          <p>No clothes available. Please add some!</p>
        ) : (
          clothes.map((item, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div style={styles.imgWrapper}>
                <img src={item.image || "https://via.placeholder.com/150"} alt={item.name} style={styles.img} />
              </div>

              <div style={styles.info}>
                <h3 style={styles.clothName}>{item.name}</h3>
                <p style={styles.price}>💲 {item.price}</p>
              </div>

              <div style={styles.btnGroup}>
                {isAdmin ? (
                  <>
                    <button style={{ ...styles.btn, ...styles.editBtn }} onClick={() => navigate(`/clothes/update/${index}`)}>✏️ Edit</button>
                    <button style={{ ...styles.btn, ...styles.deleteBtn }} onClick={() => handleDelete(index)}>🗑️ Delete</button>
                  </>
                ) : (
                  <button style={{ ...styles.btn, ...styles.cartBtn }} onClick={() => handleAddToCart(item)}>🛒 Add to Cart</button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Clothes;
