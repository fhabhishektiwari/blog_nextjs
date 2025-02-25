"use client";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <>
      <h4>About Page</h4>
      <button onClick={() => router.push("/")}>Go to Home Page</button>
    </>
  );
};

export default About;
