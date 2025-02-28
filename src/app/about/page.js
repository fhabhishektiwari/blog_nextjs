"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <>
      <h1 className="heading">About Page</h1>
      <button onClick={() => router.push("/")}>Go to Home Page</button>
      <Link href="/about/aboutstudent">Go to About Student</Link>
      <Link href={"/about/aboutcollege"}>Go to About College</Link>
    </>
  );
};

export default About;
