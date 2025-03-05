"use client";

import { use } from "react";

const Lecture = ({ params }) => {
  const resolvedParams = use(params);
  console.log(resolvedParams);
  return (
    <div>
      <h3>Day of College {resolvedParams.lecture[0]}</h3>
      <h3>Lecture No. {resolvedParams.lecture[1]}</h3>
    </div>
  );
};

export default Lecture;
