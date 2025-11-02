import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

function AddClothes() {
  const { user } = useContext(UserContext); // get current user
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate();

  // Route protection: only admin
  useEffect(() => {
    if (!user || user.role !== "admin") {
      alert("🚫 Access Denied! Only admin can add clothes.");
      navigate("/"); // redirect non-admin users
    }
  }, [user, navigate]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const newCloth = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      image,
    };

    const clothes = JSON.parse(localStorage.getItem("clothes") || "[]");
    clothes.push(newCloth);
    localStorage.setItem("clothes", JSON.stringify(clothes));

    // Show stylish message
    setMessage(`✅ "${name}" added successfully!`);
    setTimeout(() => setMessage(""), 3000); // disappears after 3 seconds

    // Clear form
    setName("");
    setPrice("");
    setImage("");
    setPreview("");
  };

  const styles = {
    wrapper: {
      height: "100vh",
      width: "100vw",
      background: "linear-gradient(135deg, #22031F, #CC76A1)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#F2B7C6",
      fontFamily: "'Arial', sans-serif",
      position: "relative",
    },
    message: {
      position: "fixed",
      top: "20px",
      right: "20px",
      backgroundColor: "#22031F",
      color: "#F2B7C6",
      padding: "12px 20px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      fontWeight: "600",
      zIndex: 1000,
      transition: "opacity 0.5s ease",
    },
    card: {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(10px)",
      padding: "40px",
      borderRadius: "20px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
      width: "90%",
      maxWidth: "450px",
      textAlign: "center",
    },
    heading: { fontSize: "36px", marginBottom: "25px", color: "#FFD6E0" },
    input: {
      width: "100%",
      padding: "14px",
      marginBottom: "18px",
      borderRadius: "10px",
      border: "none",
      outline: "none",
      fontSize: "16px",
      backgroundColor: "rgba(255,255,255,0.8)",
      color: "#22031F",
    },
    button: {
      backgroundColor: "#22031F",
      color: "#F2B7C6",
      padding: "14px 25px",
      border: "none",
      borderRadius: "12px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "0.3s",
      width: "100%",
    },
    preview: {
      width: "120px",
      height: "120px",
      objectFit: "cover",
      marginTop: "10px",
      borderRadius: "12px",
      border: "2px solid #DD9296",
    },
  };

  return (
    <div style={styles.wrapper}>
      {message && <div style={styles.message}>{message}</div>} 
      <div style={styles.card}>
        <h2 style={styles.heading}>➕ Add New Cloth</h2>
        <form onSubmit={handleAdd}>
          <input
            type="text"
            placeholder="Cloth Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="number"
            placeholder="Price (in USD)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={styles.input}
            required
          />
          {preview && <img src={preview} alt="Preview" style={styles.preview} />}
          <button type="submit" style={styles.button}>Add Cloth</button>
        </form>
      </div>
    </div>
  );
}

export default AddClothes;
