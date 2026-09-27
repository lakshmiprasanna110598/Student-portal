import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <>
      <Navbar />

      <div className="login-container">
        <h1>Student Login</h1>

        <p>Login to access your student dashboard.</p>
      <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
    </>
  );
}

export default Login;