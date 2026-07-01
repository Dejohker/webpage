import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [page, setPage] = useState("signup");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSignup = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    alert("Account created successfully");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    alert("Logged in successfully");
    navigate("/home");
  };

  const showLoginPage = (event) => {
    event.preventDefault();
    setError("");
    setPage("login");
  };

  const showSignupPage = (event) => {
    event.preventDefault();
    setPage("signup");
  };

  if (page === "login") {
    return (
      <main className="auth-page">
        <div className="auth-container">
          <h1 className="auth-title">Welcome Back</h1>
          <p>Sign in to continue</p>

          <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <Button text="Login" />
          </form>

          <a href="#">Forgot Password?</a>
          <a href="#" onClick={showSignupPage}>
            Need an account? Sign Up
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="auth-page">
      <div className="auth-container">
        <h1 className="auth-title">Create Account</h1>
        <p>Sign up to get started</p>

        <form onSubmit={handleSignup}>
          {error && <span className="error-message">{error}</span>}
          <input type="text" name="fullName" placeholder="Full Name" required />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />
          <Button text="Sign Up" />
        </form>

        <a href="#" onClick={showLoginPage}>
          Already have an account? Login
        </a>
      </div>
    </main>
  );
};

export default Home;
