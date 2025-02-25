"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <>
      <h4>About Page</h4>
      <button onClick={() => router.push("/")}>Go to Home Page</button>
      <Link href="/about/aboutstudent">Go to About Student</Link>
      <Link href={"/about/aboutcollege"}>Go to About College</Link>
    </>
  );
};

export default About;
