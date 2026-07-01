import { Link } from "react-router-dom";
import Button from "./Button";

const ForgotPassword = () => {
  const handleResetPassword = (event) => {
    event.preventDefault();
    alert("Password reset link sent");
  };

  return (
    <main className="auth-page">
      <section className="auth-container">
        <h1 className="auth-title">Forgot Password</h1>
        <p>Enter your email address and we will send you a reset link.</p>

        <form onSubmit={handleResetPassword}>
          <input type="email" placeholder="Email Address" required />
          <Button text="Send Reset Link" />
        </form>

        <Link to="/auth">Back to Login</Link>
        <Link to="/">Back Home</Link>
      </section>
    </main>
  );
};

export default ForgotPassword;
