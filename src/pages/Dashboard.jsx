import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="page-container">
        <h1>Student Dashboard</h1>

        <p>Manage your student account.</p>

        <div className="dashboard-links">
          <Link className="active-link" to="/dashboard">
            Overview
          </Link>

          <Link to="/dashboard/profile">
            Profile
          </Link>

          <Link to="/dashboard/settings">
            Settings
          </Link>
        </div>

        <div className="dashboard-overview-box">
          <h2>Dashboard Overview</h2>

          <div className="dashboard-stats">

            <div className="stat-box">
              <h3>4</h3>
              <p>Enrolled Courses</p>
            </div>

            <div className="stat-box">
              <h3>82%</h3>
              <p>Average Progress</p>
            </div>

            <div className="stat-box">
              <h3>12</h3>
              <p>Assignments</p>
            </div>

          </div>

          <p>Welcome back! Continue your learning journey.</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;