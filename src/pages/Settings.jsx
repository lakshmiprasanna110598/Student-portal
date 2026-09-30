import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Settings() {
  return (
    <>
      <Navbar />

      <div className="page-container">
        <h1>Student Dashboard</h1>

        <p>Manage your student account.</p>

        <div className="dashboard-links">
          <Link to="/dashboard">Overview</Link>

          <Link to="/dashboard/profile">Profile</Link>

          <Link className="active-link" to="/dashboard/settings">
            Settings
          </Link>
        </div>

        <h2>Settings</h2>

        <p>
          <label>
            <input type="checkbox" />
            {" "}Enable Email Notifications
          </label>
        </p>

        <p>
          <label>
            <input type="checkbox" />
            {" "}Enable Course Reminders
          </label>
        </p>
      </div>
    </>
  );
}

export default Settings;