// Checkout.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("cod"); // default
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch logged-in user
    const loggedInUser = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(loggedInUser);

    // Load user's cart
    const userCartKey = loggedInUser.username
      ? `cart_${loggedInUser.username}`
      : "cart_guest";
    const storedCart = JSON.parse(localStorage.getItem(userCartKey) || "[]");
    setCartItems(storedCart);
  }, []);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + Number(item.price || 0) * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      navigate("/cart");
      return;
    }

    // Simulate order saving
    const order = {
      username: user?.username || "Guest",
      items: cartItems,
      total: totalPrice,
      paymentMethod,
      date: new Date().toLocaleString(),
    };

    // Save order in localStorage for now
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Clear cart after checkout
    const userCartKey = user?.username
      ? `cart_${user.username}`
      : "cart_guest";
    localStorage.removeItem(userCartKey);

    alert(
      `✅ Order placed successfully using ${paymentMethod.toUpperCase()}! Thank you for shopping with us 💕`
    );

    navigate("/"); // Redirect home
  };

  const styles = {
    wrapper: {
      minHeight: "100vh",
      width: "100vw",
      background: "linear-gradient(135deg, #22031F, #CC76A1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "80px 20px",
      color: "#FFD6E0",
      fontFamily: "'Arial', sans-serif",
    },
    heading: {
      fontSize: "38px",
      color: "#FFD6E0",
      marginBottom: "30px",
      textShadow: "2px 2px #22031F",
    },
    box: {
      backgroundColor: "#F2B7C6",
      color: "#22031F",
      borderRadius: "15px",
      padding: "30px",
      width: "90%",
      maxWidth: "700px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    },
    sectionTitle: {
      fontWeight: "600",
      fontSize: "20px",
      marginBottom: "15px",
      borderBottom: "2px solid #22031F",
      paddingBottom: "5px",
    },
    orderSummary: {
      backgroundColor: "#FFD6E0",
      borderRadius: "10px",
      padding: "15px",
      marginBottom: "20px",
    },
    item: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "8px",
    },
    total: {
      fontWeight: "700",
      borderTop: "2px solid #22031F",
      paddingTop: "10px",
      marginTop: "10px",
    },
    paymentOption: {
      marginBottom: "10px",
    },
    button: {
      marginTop: "20px",
      backgroundColor: "#22031F",
      color: "#F2B7C6",
      border: "none",
      padding: "12px 24px",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "0.3s",
    },
  };

  return (
    <div style={styles.wrapper}>
        <button
        onClick={() => navigate(-1)}
        style={styles.backButton}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#F2B7C6")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#DD9296")}
      >
        ⬅ Back
      </button>
      <h1 style={styles.heading}>💳 Checkout</h1>

      <div style={styles.box}>
        {/* Order Summary */}
        <h2 style={styles.sectionTitle}>Order Summary</h2>
        <div style={styles.orderSummary}>
          {cartItems.map((item, index) => (
            <div key={index} style={styles.item}>
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div style={styles.total}>Total: ${totalPrice.toFixed(2)}</div>
        </div>

        {/* Payment Options */}
        <h2 style={styles.sectionTitle}>Payment Method</h2>
        <div>
          <label style={styles.paymentOption}>
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{" "}
            Cash on Delivery
          </label>
          <br />
          <label style={styles.paymentOption}>
            <input
              type="radio"
              name="payment"
              value="esewa"
              checked={paymentMethod === "esewa"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{" "}
            eSewa / Khalti / Online Wallet
          </label>
          <br />
          <label style={styles.paymentOption}>
            <input
              type="radio"
              name="payment"
              value="bank"
              checked={paymentMethod === "bank"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{" "}
            Bank Transfer
          </label>
        </div>

        {/* Confirm Button */}
        <button
          style={styles.button}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#DD9296")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#22031F")
          }
          onClick={handlePlaceOrder}
        >
          Confirm & Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
