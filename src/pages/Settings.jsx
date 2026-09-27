import Navbar from "../components/Navbar";

function Settings() {
  return (
    <>
      <Navbar />

      <div className="page-container">
        <h1>Student Dashboard</h1>

        <p>Manage your student account.</p>

        <div className="dashboard-links">
          <a href="/dashboard">Overview</a>
          <a href="/dashboard/profile">Profile</a>
          <a href="/dashboard/settings">Settings</a>
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