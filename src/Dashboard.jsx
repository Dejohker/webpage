import { Link } from "react-router-dom";
import CustomCarousel from "./CustomCarousel";

const Dashboard = () => {
  return (
    <main className="dashboard-page">
      <header className="page-header">
        <div>
          <span className="eyebrow">Dashboard</span>
          <h1>Carousel Branch</h1>
        </div>
        <Link className="secondary-link compact-link" to="/">
          Home
        </Link>
      </header>
      <CustomCarousel />
    </main>
  );
};

export default Dashboard;
