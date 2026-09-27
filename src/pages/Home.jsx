import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      <div className="home-container">
        <h1>Welcome to Student Portal</h1>

        <p>
          Learn programming, explore courses, and manage your student profile.
        </p>

        <Link className="explore-link" to="/courses">
          Explore Courses
        </Link>
      </div>
    </>
  );
}

export default Home;