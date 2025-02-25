"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();
  const handleNavigate = (pathName) => {
    router.push(pathName);
  };
  return (
    <>
      <h1>Login Page...</h1>
      <Link href={"/"}>Go to Home Page</Link>
      <button onClick={() => handleNavigate("/login/loginstudent")}>
        Go to Login page for student
      </button>
      <button onClick={() => handleNavigate("/login/loginteacher")}>
        Go to Login page for teacher
      </button>
    </>
  );
};

export default Login;
