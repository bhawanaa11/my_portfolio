// App.jsx
import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Clothes from "./pages/Clothes";
import AddClothes from "./pages/AddClothes";

import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";

// Create context for logged-in user
export const UserContext = createContext(null);

// Protected Route wrapper using UserContext
const ProtectedRoute = ({ children }) => {
  const { user } = React.useContext(UserContext);
  return user ? children : <Navigate to="/login" />;
};

function App() {
  // Initialize user from localStorage if already logged in
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Persist user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      localStorage.setItem("isLoggedIn", "true");
    } else {
      localStorage.removeItem("loggedInUser");
      localStorage.setItem("isLoggedIn", "false");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/clothes" element={<Clothes />} />
          <Route
            path="/addclothes"
            element={
              <ProtectedRoute>
                {user?.role === "admin" ? <AddClothes /> : <Navigate to="/clothes" />}
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <CheckOut />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
