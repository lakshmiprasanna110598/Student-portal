import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="home-container">
        <div className="home-content">
          <h1>Welcome to Student Portal</h1>

          <p>
            Learn programming, explore courses, and manage your student profile.
          </p>

          <Link to="/courses" className="explore-btn">
            Explore Courses
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;

