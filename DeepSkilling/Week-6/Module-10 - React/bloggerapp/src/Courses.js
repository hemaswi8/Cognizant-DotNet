import React from "react";
import { courses } from "./Data";

function Courses() {
  return (
    <div>
      <h1>Course Details</h1>

      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.name}</h2>
          <h5>{course.date}</h5>
        </div>
      ))}
    </div>
  );
}

export default Courses;