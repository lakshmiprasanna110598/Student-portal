import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const courses = [
  {
    id: "react",
    name: "React",
    description: "Learn React from fundamentals to advanced concepts.",
    duration: "6 Weeks",
  },
  {
    id: "javascript",
    name: "JavaScript",
    description: "Master modern JavaScript programming.",
    duration: "8 Weeks",
  },
  {
    id: "python",
    name: "Python",
    description: "Learn Python programming from scratch.",
    duration: "10 Weeks",
  },
  {
    id: "java",
    name: "Java",
    description: "Learn Java and object-oriented programming.",
    duration: "12 Weeks",
  },
];

function Courses() {
  return (
    <>
      <Navbar />

      <div className="courses-container">
        <h1>Available Courses</h1>

        <div className="course-grid">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <h2>{course.name}</h2>

              <p>{course.description}</p>

              <p>
                <strong>Duration:</strong> {course.duration}
              </p>

              <Link to={`/courses/${course.id}`}>
                <button>View Course</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;