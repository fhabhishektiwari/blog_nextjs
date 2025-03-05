"use client";
import { use } from "react";

const Student = ({ params }) => {
  const resolvedParams = use(params); // Unwrapping the Promise
  console.log(resolvedParams, resolvedParams.student);

  return (
    <div>
      <h1>Student Details</h1>
      <h3>Name: {resolvedParams.student}</h3>
    </div>
  );
};

export default Student;
