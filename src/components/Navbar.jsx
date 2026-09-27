import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoginPage =
    location.pathname === "/" || location.pathname === "/login";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>Student Portal</h2>

      <div className="nav-links">
        <Link to="/home">Home</Link>

        <Link to="/courses">Courses</Link>

        {isLoginPage ? (
          <Link className="login-link" to="/login">
  Login
</Link>
        ) : (
          <>
          <Link
  className={location.pathname === "/dashboard" ? "active-link" : ""}
  to="/dashboard"
>
  Dashboard
</Link>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;