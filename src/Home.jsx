import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="site-shell">
      <section className="hero-section">
        <div className="hero-content">
          <span className="eyebrow">Main website</span>
          <h1>Alameen React</h1>
          <p>
            Use this home page as the starting point for every branch in the
            project.
          </p>
          <div className="hero-actions" aria-label="Website branches">
            <Link className="primary-link" to="/auth">
              Login / Sign Up
            </Link>
            <Link className="secondary-link" to="/dashboard">
              View Dashboard
            </Link>
          </div>
        </div>
      </section>

      <section className="branch-section" aria-label="Available pages">
        <Link className="branch-card" to="/auth">
          <span>01</span>
          <h2>Auth</h2>
          <p>Create an account or log in.</p>
        </Link>
        <Link className="branch-card" to="/dashboard">
          <span>02</span>
          <h2>Dashboard</h2>
          <p>Open the carousel page.</p>
        </Link>
        <Link className="branch-card" to="/forgot-password">
          <span>03</span>
          <h2>Password Reset</h2>
          <p>Send a password reset link.</p>
        </Link>
      </section>
    </main>
  );
};

export default Home;
