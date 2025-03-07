// "use client";

// import { useState } from "react";

// export const metadata = {
//   title: "user",
//   description: "user page",
// };

export function generateMetadata() {
  return {
    title: "user",
    description: "user Page",
  };
}
export default function User() {
  // const [h3Color, setH3Color] = useState({ backgroundColor: "red" });
  return (
    <div>
      <h1 style={{ color: "blue" }}>User Page</h1>
      <h2>Heading 2 in user page</h2>
      {/* <h3 style={h3Color}>Heading 3 in user page</h3> */}
      {/* <button onClick={() => setH3Color({ backgroundColor: "yellow" })}>
        Change Color
      </button> */}
    </div>
  );
}
