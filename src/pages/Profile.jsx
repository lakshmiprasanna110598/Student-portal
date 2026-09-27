import Navbar from "../components/Navbar";

function Profile() {
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

        <h2>My Profile</h2>

        <p>
          <strong>Name:</strong> Rahul Kumar
        </p>

        <p>
          <strong>Email:</strong> rahul@example.com
        </p>

        <p>
          <strong>Course:</strong> Full Stack Development
        </p>

        <p>
          <strong>Year:</strong> 2nd Year
        </p>
      </div>
    </>
  );
}

export default Profile;