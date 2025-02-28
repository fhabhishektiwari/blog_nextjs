"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();

  const handleClick = (pathName) => {
    router.push("/login" + pathName);
  };
  return (
    <div>
      <h1 className="heading">Login Page</h1>
      <Link href={"/"}>Home Page</Link>
      <button onClick={() => handleClick("/studentlogin")}>
        Student Login Page
      </button>
      <button onClick={() => handleClick("/teacherlogin")}>
        Teacher Login Page
      </button>
    </div>
  );
}

export default Login;
