import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const courses = {
  react: {
    name: "REACT",
    description: "You selected the react course.",
    duration: "6 Weeks",
  },
  javascript: {
    name: "JAVASCRIPT",
    description: "You selected the javascript course.",
    duration: "8 Weeks",
  },
  python: {
    name: "PYTHON",
    description: "You selected the python course.",
    duration: "10 Weeks",
  },
  java: {
    name: "JAVA",
    description: "You selected the java course.",
    duration: "12 Weeks",
  },
};

function CourseDetails() {
  const { courseId } = useParams();

  const course = courses[courseId];

  if (!course) {
    return (
      <>
        <Navbar />
        <div className="page-container">
          <h1>Course Not Found</h1>
          <Link to="/courses">← Back to Courses</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="page-container">
        <h1>Course Details</h1>

        <h2>{course.name}</h2>

        <p>{course.description}</p>

        <p>
          <strong>Course ID:</strong> {courseId}
        </p>

        <p>
          <strong>Duration:</strong> {course.duration}
        </p>

        <h3>Topics</h3>

        <ul>
          <li>Fundamentals</li>
          <li>Practical Coding</li>
          <li>Projects</li>
          <li>Interview Preparation</li>
        </ul>

       <Link className="back-link" to="/courses">
  ← Back to Courses
</Link> 
      </div>
    </>
  );
}

export default CourseDetails;