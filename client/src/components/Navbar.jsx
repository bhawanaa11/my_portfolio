import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update cart count
  useEffect(() => {
    const updateCartCount = () => {
      if (user?.email) {
        const cart = JSON.parse(localStorage.getItem(`cart_${user.email}`) || "[]");
        setCartCount(cart.reduce((sum, item) => sum + item.quantity, 0));
      } else {
        setCartCount(0);
      }
    };
    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    const interval = setInterval(updateCartCount, 300);
    return () => {
      window.removeEventListener("storage", updateCartCount);
      clearInterval(interval);
    };
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("isLoggedIn");
    setUser(null);
    navigate("/login");
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      padding: "10px 20px",
      background: "linear-gradient(90deg, #22031F, #CC76A1)",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      fontFamily: "'Arial', sans-serif",
    },
    logo: { fontSize: "24px", fontWeight: "bold", color: "#FFD6E0", cursor: "pointer" },
    menuWrapper: { display: "flex", gap: "12px", alignItems: "center" },
    menuItem: {
      position: "relative",
      backgroundColor: "#F2B7C6",
      color: "#22031F",
      padding: "10px 18px",
      borderRadius: "12px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "0.3s",
      boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
      textAlign: "center",
    },
    logoutBtn: { backgroundColor: "#DD9296", color: "#22031F", padding: "8px 16px", borderRadius: "8px", cursor: "pointer", fontWeight: "500" },
    loginSignupBtn: { backgroundColor: "#22031F", color: "#F2B7C6", padding: "8px 16px", borderRadius: "8px", cursor: "pointer", fontWeight: "500" },
    hamburger: { display: "flex", flexDirection: "column", cursor: "pointer", gap: "4px" },
    bar: { width: "25px", height: "3px", backgroundColor: "#FFD6E0", borderRadius: "2px" },
    mobileMenu: { display: isMobileMenuOpen ? "flex" : "none", flexDirection: "column", gap: "10px", width: "100%", marginTop: "10px" },
  };

  // Menu for logged-in users
  const userLinks = user
    ? [
        { label: "🏠 Dashboard", path: "/dashboard" },
        { label: "🛍️ Shop", path: "/clothes" },
        ...(user.role === "user" ? [{ label: `🛒 Cart (${cartCount})`, path: "/cart" }] : []),
        ...(user.role === "user" ? [{ label: "💳 Checkout", path: "/checkout" }] : []),
        ...(user.role === "admin" ? [{ label: "📦 Orders", path: "/orders" }] : []),
        ...(user.role === "admin" ? [{ label: "➕ Add Clothes", path: "/addclothes" }] : []),
      ]
    : [];

  // Menu for guests (not logged in)
  const guestLinks = [
    { label: "🔑 Login", path: "/login" },
    { label: "📝 Sign Up", path: "/signup" },
  ];

  const linksToRender = user ? userLinks : guestLinks;

  const renderMenuItem = (item, index) => (
    <div
      key={index}
      style={styles.menuItem}
      onClick={() => {
        navigate(item.path);
        setIsMobileMenuOpen(false);
      }}
    >
      {item.label}
    </div>
  );

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo} onClick={() => navigate(user ? "/dashboard" : "/")}>STYLE LA</div>

      {!isMobile && (
        <div style={styles.menuWrapper}>
          {linksToRender.map(renderMenuItem)}
          {user && <div style={styles.logoutBtn} onClick={handleLogout}>Logout</div>}
        </div>
      )}

      {isMobile && (
        <>
          <div style={styles.hamburger} onClick={toggleMobileMenu}>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
          </div>
          <div style={styles.mobileMenu}>
            {linksToRender.map(renderMenuItem)}
            {user && <div style={styles.logoutBtn} onClick={handleLogout}>Logout</div>}
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
