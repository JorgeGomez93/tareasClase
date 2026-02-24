import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authToken"),
  );
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // To handle initial load
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchUser = async () => {
      if (authToken) {
        try {
          const response = await fetch("http://localhost:8000/users/me", {
            headers: { Authorization: `Bearer ${authToken}` },
          });
          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          } else {
            // Token is invalid or expired
            setAuthToken(null);
            localStorage.removeItem("authToken");
            navigate("/"); // Redirect to home on invalid token
          }
        } catch (error) {
          console.error("Failed to fetch user", error);
          setAuthToken(null); // Clear token on error
          localStorage.removeItem("authToken");
          navigate("/"); // Redirect to home on error
        }
      }
      setIsLoading(false);
    };

    fetchUser();
  }, [authToken, navigate]); // Add navigate to dependency array

  const login = async (email, password) => {
    const response = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Failed to login");
    }

    const data = await response.json();
    localStorage.setItem("authToken", data.access_token);
    setAuthToken(data.access_token);
  };

  const logout = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem("authToken");
    navigate("/"); // Redirect to home after logout
  };

  const value = {
    authToken,
    user,
    isLoggedIn: !!user,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

