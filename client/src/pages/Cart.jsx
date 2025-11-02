import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

function Cart() {
  const { user } = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const cartKey = user ? `cart_${user.email}` : null;

  // Load cart and listen for changes (real-time)
  useEffect(() => {
    if (!user) return;

    const loadCart = () => {
      const storedCart = JSON.parse(localStorage.getItem(cartKey) || "[]");
      setCartItems(storedCart);
    };

    loadCart();

    // Listen for storage events (other tabs)
    window.addEventListener("storage", loadCart);

    // Poll for updates in same tab
    const interval = setInterval(loadCart, 300);

    return () => {
      window.removeEventListener("storage", loadCart);
      clearInterval(interval);
    };
  }, [cartKey, user]);

  const increaseQuantity = (index) => {
    const updated = [...cartItems];
    updated[index].quantity += 1;
    setCartItems(updated);
    localStorage.setItem(cartKey, JSON.stringify(updated));
  };

  const decreaseQuantity = (index) => {
    const updated = [...cartItems];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
    } else {
      updated.splice(index, 1);
    }
    setCartItems(updated);
    localStorage.setItem(cartKey, JSON.stringify(updated));
  };

  const removeItem = (index) => {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
    localStorage.setItem(cartKey, JSON.stringify(updated));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + Number(item.price || 0) * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (!cartItems.length) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/checkout");
  };

  const styles = {
    wrapper: {
      minHeight: "100vh",
      width: "100vw",
      background: "linear-gradient(135deg, #22031F, #CC76A1)",
      fontFamily: "'Arial', sans-serif",
      padding: "100px 20px 40px 20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "#FFD6E0",
    },
    heading: { fontSize: "36px", marginBottom: "30px", textShadow: "2px 2px #22031F" },
    card: {
      width: "100%",
      maxWidth: "800px",
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
      padding: "20px",
      marginBottom: "20px",
      display: "flex",
      alignItems: "center",
      gap: "20px",
      transition: "0.3s",
    },
    img: { width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" },
    info: { flex: 1 },
    name: { fontSize: "18px", fontWeight: "600", color: "#22031F" },
    price: { fontSize: "16px", color: "#CC76A1", marginTop: "5px" },
    quantityWrapper: { display: "flex", alignItems: "center", gap: "10px" },
    qtyBtn: {
      padding: "6px 12px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
      fontWeight: "600",
      backgroundColor: "#22031F",
      color: "#F2B7C6",
      transition: "0.3s",
    },
    removeBtn: {
      padding: "6px 12px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
      fontWeight: "600",
      backgroundColor: "#DD9296",
      color: "#22031F",
      transition: "0.3s",
    },
    total: { fontSize: "22px", fontWeight: "700", marginTop: "20px" },
    checkoutBtn: {
      marginTop: "20px",
      padding: "12px 30px",
      fontSize: "16px",
      fontWeight: "700",
      border: "none",
      borderRadius: "12px",
      backgroundColor: "#22031F",
      color: "#F2B7C6",
      cursor: "pointer",
      transition: "0.3s",
    },
    empty: { fontSize: "18px", marginTop: "50px", color: "#FFD6E0" },
  };

  if (!user) {
    return (
      <div style={styles.wrapper}>
        <h2>Please login to view your cart.</h2>
      </div>
    );
  }

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>{user.email}'s Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <p style={styles.empty}>Your cart is empty!</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} style={styles.card}>
              <img src={item.image || "https://via.placeholder.com/150"} alt={item.name} style={styles.img} />
              <div style={styles.info}>
                <div style={styles.name}>{item.name}</div>
                <div style={styles.price}>💲 {Number(item.price).toFixed(2)}</div>
              </div>
              <div style={styles.quantityWrapper}>
                <button style={styles.qtyBtn} onClick={() => decreaseQuantity(index)}>-</button>
                <span>{item.quantity}</span>
                <button style={styles.qtyBtn} onClick={() => increaseQuantity(index)}>+</button>
              </div>
              <button style={styles.removeBtn} onClick={() => removeItem(index)}>Remove</button>
            </div>
          ))}
          <div style={styles.total}>Total: 💲 {totalPrice.toFixed(2)}</div>
          <button style={styles.checkoutBtn} onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;
